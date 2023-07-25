const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');

const {
  findLastQuestionWithAnswersByPhone,
} = require('../../services/questions.service');
const {
  handleQuestionProcess,
  isUserSickBasedInAnswers,
} = require('../../helpers');

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
    async (ctx, { fallBack, flowDynamic, gotoFlow }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      const examId = await handleQuestionProcess({
        question: question1,
        optionTyped,
        phone,
        fallBack,
        flowDynamic,
      });

      if (!examId) return;

      const answers = await findLastQuestionWithAnswersByPhone(phone, examId);
      const isSick = isUserSickBasedInAnswers(answers);

      if (isSick) {
        await gotoFlow(tenthStepVar1);
        return;
      }
      await gotoFlow(tenthStepVar2);
    },
    [tenthStepVar1, tenthStepVar2]
  );

module.exports = { nineth };
