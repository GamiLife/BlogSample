const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { fourth } = require('./fourth.step');

const { thirdStep } = conversation;
const { keywords, questions } = thirdStep;
const [question1, question2, question3] = questions;

const third = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(question2)
  .addAnswer(
    question3,
    { capture: true },
    async (ctx, { fallBack, flowDynamic, gotoFlow }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      const isContinue = await handleQuestionProcess({
        question: question2,
        optionTyped,
        phone,
        fallBack,
        flowDynamic,
        isFirstQuestion: true,
      });

      if (!isContinue) return;
    },
    [fourth]
  );

module.exports = { third };
