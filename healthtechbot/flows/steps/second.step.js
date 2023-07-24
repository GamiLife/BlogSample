const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');
const { client } = require('../../config/db/Singleton.db');

const { third } = require('./third.step');

const { secondtStep } = conversation;
const { keywords, questions } = secondtStep;
const [question1, question2] = questions;

const second = addKeyword(keywords).addAnswer(
  [question1, question2],
  {
    capture: true,
  },
  async (ctx, { gotoFlow }) => {
    const phone = ctx.from;
    const documentNumber = ctx.body;

    const cl = await client();
    cl.db
      .collection('users')
      .updateOne(
        { phone: phone },
        { $set: { phone, documentNumber } },
        { upsert: true }
      );
  },
  [third]
);

module.exports = { second };
