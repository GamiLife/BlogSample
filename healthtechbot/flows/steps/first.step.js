const { addKeyword } = require('@bot-whatsapp/bot');

const {
  conversation,
  templateWelcome,
} = require('../../config/constants/conversation');
const { second } = require('./second.step');
const { third } = require('./third.step');
const { client } = require('../../config/db/Singleton.db');

const { firstStep } = conversation;
const { keywords, questions } = firstStep;
const [question1, question2] = questions;

const variationWithUserFullNameAndDocumentNumber = addKeyword([])
  .addAnswer('')
  .addAnswer(
    'Ya estas registrado! 😃',
    null,
    async (ctx, { gotoFlow }) => {
      try {
        gotoFlow(third);
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    [third]
  );

const variationWithoutUserFullName = addKeyword([])
  .addAnswer('')
  .addAnswer(
    '🤔',
    { capture: true },
    async (ctx, { gotoFlow }) => {
      try {
        const fullName = ctx.body;
        const phone = ctx.from;

        const cl = await client();
        cl.db
          .collection('users')
          .updateOne(
            { phone: phone },
            { $set: { fullName, phone } },
            { upsert: true }
          );
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    [second]
  );

const variationWithUserFullNameButWithoutDocumentNumber = addKeyword([])
  .addAnswer('')
  .addAnswer(
    '🤔',
    null,
    async (ctx, { gotoFlow }) => {
      try {
        gotoFlow(second);
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    [second]
  );

const first = addKeyword(keywords).addAnswer(
  'Hey!',
  null,
  async (ctx, { gotoFlow, flowDynamic }) => {
    try {
      const phone = ctx.from;

      const cl = await client();
      const user = await cl.db.collection('users').findOne({ phone: phone });

      if (user && user.fullName && !user.documentNumber) {
        const mess = templateWelcome(user.fullName);
        await flowDynamic([mess, 'Nos falta tener tu dni 😃']);
        gotoFlow(variationWithUserFullNameButWithoutDocumentNumber);
        return;
      }

      if (user && user.fullName && user.documentNumber) {
        const mess = templateWelcome(user.fullName);
        await flowDynamic(mess);
        gotoFlow(variationWithUserFullNameAndDocumentNumber);
        return;
      }

      await flowDynamic([question1, question2]);
      gotoFlow(variationWithoutUserFullName);
    } catch (error) {}
  },
  [
    variationWithUserFullNameAndDocumentNumber,
    variationWithoutUserFullName,
    variationWithUserFullNameButWithoutDocumentNumber,
  ]
);

module.exports = {
  first,
};
