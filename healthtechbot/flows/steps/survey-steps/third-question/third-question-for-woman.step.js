const { addKeyword } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../../config/constants/conversation');

const { handleQuestionProcess } = require('../../../../helpers');

const { fourthSurveyQuestionStep } = require('../fourth-question.step');

const { thirdSurveyQuestionForWoman } = conversation;
const { keywords, questions, answerPoints } = thirdSurveyQuestionForWoman;
const [question1, question2] = questions;

const thirdSurveyQuestionForWomanStep = addKeyword(keywords, {
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
    },
    [fourthSurveyQuestionStep]
  );

module.exports = { thirdSurveyQuestionForWomanStep };
