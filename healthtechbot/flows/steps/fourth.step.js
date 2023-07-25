const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { fifth } = require('./fifth.step');

const { fourthStep } = conversation;
const { keywords, questions } = fourthStep;
const [question1, question2] = questions;

const fourth = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(
    question2,
    { capture: true },
    async (ctx, { fallBack, flowDynamic, gotoFlow }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      const isContinue = await handleQuestionProcess({
        question: question1,
        optionTyped,
        phone,
        fallBack,
        flowDynamic,
      });

      if (!isContinue) return;
    },
    [fifth]
  );

module.exports = { fourth };
