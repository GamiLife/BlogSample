const { addKeyword } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../config/constants/conversation');
const { invalidOption } = require('../../../config/constants/messages');
const { updateUser } = require('../../../services/user.service');
const { isCorrectRange } = require('../../../validators');

const {
  firstSurveyQuestionStep,
} = require('../survey-steps/first-question.step');

const { genderStep } = conversation;
const { keywords, questions } = genderStep;
const [question1, question2] = questions;

const genderStepFlow = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(
    question2,
    {
      capture: true,
    },
    async (ctx, { flowDynamic, fallBack, gotoFlow }) => {
      const phone = ctx.from;
      const optionTyped = ctx.body;

      const isValid = isCorrectRange([1, 2], Number(optionTyped));

      if (!isValid) {
        await flowDynamic(invalidOption);
        await fallBack();
        return;
      }

      await updateUser(phone, { phone, genderId: optionTyped });
      await flowDynamic([
        'Listo',
        'Para poder brindarte un diagnóstico adecuado te haremos unas preguntas.',
        'Te tomará 30 segundos.',
      ]);
      await gotoFlow(firstSurveyQuestionStep);
      return;
    }
  );

module.exports = { genderStepFlow };