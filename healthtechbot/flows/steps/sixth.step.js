const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { seven } = require('./seven.step');

const { sixthStep } = conversation;
const { keywords, questions } = sixthStep;
const [question1, question2] = questions;

const sixth = addKeyword(keywords)
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
    [seven]
  );

module.exports = { sixth };
