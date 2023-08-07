const { addKeyword } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../config/constants/conversation');
const { findUserByPhone } = require('../../../services');
const { handleQuestionProcess } = require('../../../helpers');

const {
  thirdSurveyQuestionForManStep,
} = require('./third-question/third-question-for-man.step');
const {
  thirdSurveyQuestionForWomanStep,
} = require('./third-question/third-question-for-woman.step');

const { secondSurveyQuestion } = conversation;
const { keywords, questions, answerPoints } = secondSurveyQuestion;
const [question1, question2] = questions;

const secondSurveyQuestionStep = addKeyword(keywords, {
  regex: true,
})
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
        answerPoints,
      });

      if (!isContinue) return;

      const user = await findUserByPhone(phone);
      const genderId = user && user.genderId ? user.genderId : 1;

      if (genderId == 1) {
        await gotoFlow(thirdSurveyQuestionForManStep);
        return;
      }

      await gotoFlow(thirdSurveyQuestionForWomanStep);
      return;
    },
    [thirdSurveyQuestionForManStep, thirdSurveyQuestionForWomanStep]
  );

module.exports = { secondSurveyQuestionStep };
