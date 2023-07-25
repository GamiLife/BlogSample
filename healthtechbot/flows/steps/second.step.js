const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');
const { updateUser } = require('../../services/user.service');

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

    await updateUser(phone, { phone, documentNumber });
  },
  [third]
);

module.exports = { second };
