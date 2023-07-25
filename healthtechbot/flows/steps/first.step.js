const { addKeyword } = require('@bot-whatsapp/bot');

const {
  conversation,
  templateWelcome,
  missingDocumentNumberMessage,
  alreadyUserRegistered,
} = require('../../config/constants/conversation');
const { second } = require('./second.step');
const { third } = require('./third.step');
const { updateUser, findUserByPhone } = require('../../services');

const { firstStep } = conversation;
const { keywords, questions } = firstStep;
const [question1, question2] = questions;

const variationWithUserFullNameAndDocumentNumber = addKeyword([])
  .addAnswer('')
  .addAnswer(
    alreadyUserRegistered,
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
    async (ctx, { fallBack }) => {
      const fullName = ctx.body;
      const phone = ctx.from;

      await updateUser(phone, { fullName, phone });
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
    const phone = ctx.from;

    try {
      const user = await findUserByPhone(phone);

      if (user && user.fullName && !user.documentNumber) {
        const mess = templateWelcome(user.fullName);
        await flowDynamic([mess, missingDocumentNumberMessage]);
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
