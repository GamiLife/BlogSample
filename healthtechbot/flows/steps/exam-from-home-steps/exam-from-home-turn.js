const { addKeyword } = require('@bot-whatsapp/bot');
const {
  conversation,
  linkForExamFromHome,
} = require('../../../config/constants/conversation');

const { scheduleExamFromHomeChooseTurn } = conversation;
const { keywords, questions } = scheduleExamFromHomeChooseTurn;
const [question1, question2] = questions;

const examFromHomeTurnStep = addKeyword(keywords, {
  regex: false,
})
  .addAnswer(question1)
  .addAnswer(
    question2,
    { capture: true },
    async (ctx, { fallBack, flowDynamic }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      await delay(2000);

      const isValid = isCorrectRange([1, 2], Number(optionTyped));

      if (!isValid) {
        await flowDynamic(invalidOption);
        await fallBack();
        return false;
      }

      const messageOption = linkForExamFromHome[optionTyped];
      if (!messageOption) return;

      const { message } = messageOption;
      await flowDynamic([message]);
    },
    []
  );

module.exports = { examFromHomeTurnStep };
