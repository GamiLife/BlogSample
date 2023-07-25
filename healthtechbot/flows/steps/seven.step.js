const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { eighth } = require('./eigth.step');

const { sevenStep } = conversation;
const { keywords, questions } = sevenStep;
const [question1, question2] = questions;

const seven = addKeyword(keywords)
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
    [eighth]
  );

module.exports = { seven };