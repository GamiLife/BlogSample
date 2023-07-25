const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { nineth } = require('./nineth.step');

const { eighthStep } = conversation;
const { keywords, questions } = eighthStep;
const [question1, question2] = questions;

const eighth = addKeyword(keywords)
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
    [nineth]
  );

module.exports = { eighth };
