const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const { handleQuestionProcess } = require('../../helpers');

const { tenthStepVar1 } = require('./ten-step/variation1/ten1.step');
const { tenthStepVar2 } = require('./ten-step/variation2/ten2.step');

const { ninethStep } = conversation;
const { keywords, questions } = ninethStep;
const [question1, question2] = questions;

const nineth = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(
    question2,
    { capture: true },
    async (ctx, { fallBack }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      await handleQuestionProcess({
        question: question2,
        optionTyped,
        phone,
        fallBack,
      });
    },
    []
  );

module.exports = { nineth };
