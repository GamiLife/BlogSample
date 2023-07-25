const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');
const { invalidDocumentNumber } = require('../../config/constants/messages');
const { updateUser } = require('../../services/user.service');

const { isCorrectDocumentNumber } = require('../../validators');

const { third } = require('./third.step');

const { secondtStep } = conversation;
const { keywords, questions } = secondtStep;
const [question1, question2] = questions;

const second = addKeyword(keywords).addAnswer(
  [question1, question2],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
    const phone = ctx.from;
    const documentNumber = ctx.body;

    const isValid = isCorrectDocumentNumber(documentNumber);

    if (!isValid) {
      await flowDynamic(invalidDocumentNumber);
      await fallBack();
      return;
    }

    await updateUser(phone, { phone, documentNumber });
    await gotoFlow(third);
  }
);

module.exports = { second };
