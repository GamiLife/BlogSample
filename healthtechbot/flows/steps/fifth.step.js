const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { sixth } = require('./sixth.step');

const { fifthStep } = conversation;
const { keywords, questions } = fifthStep;
const [question1, question2] = questions;

const fifth = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(
    question2,
    { capture: true },
    async (ctx, { fallBack }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      await handleQuestionProcess({
        question: question1,
        optionTyped,
        phone,
        fallBack,
      });
    },
    [sixth]
  );

module.exports = { fifth };
