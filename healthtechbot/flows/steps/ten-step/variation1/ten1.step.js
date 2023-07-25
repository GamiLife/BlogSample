const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const { invalidOption } = require('../../../../config/constants/messages');
const {
  conversation,
  linkForThirdVariation1,
} = require('../../../../config/constants/conversation');

const { completeExam, findLastExamByPhone } = require('../../../../services');
const { isCorrectRange } = require('../../../../validators');

const { tenthStepVariation1 } = conversation;
const { keywords, questions } = tenthStepVariation1;
const [question1, question2, question3] = questions;

const tenthStepVar1 = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(question2)
  .addAnswer(
    question3,
    { capture: true },
    async (ctx, { flowDynamic, fallBack, endFlow }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      const isValid = isCorrectRange([1, 2, 3], Number(optionTyped));

      const currentExam = await findLastExamByPhone(phone);
      if (currentExam && currentExam.isCompleted) {
        return;
      }

      if (!isValid) {
        await flowDynamic(invalidOption);
        await fallBack();
        return;
      }

      const link = linkForThirdVariation1[optionTyped];
      if (currentExam) {
        await completeExam(phone, currentExam.examId);
      }

      await flowDynamic([
        'Este es el link del doctor que te podra atender: ',
        link,
      ]);
      return endFlow('Gracias! 😃');
    }
  );

module.exports = { tenthStepVar1 };
