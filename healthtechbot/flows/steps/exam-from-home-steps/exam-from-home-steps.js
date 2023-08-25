const { addKeyword } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../config/constants/conversation');
const { invalidOption } = require('../../../config/constants/messages');
const { examFromHomeTurnStep } = require('./exam-from-home-turn');

const { scheduleExamFromHome } = conversation;
const { keywords, questions } = scheduleExamFromHome;
const [question1, question2] = questions;

const examFromHomeStep = addKeyword(keywords, {
  regex: false,
})
  .addAnswer(question1)
  .addAnswer(
    question2,
    { capture: true },
    async (ctx, { fallBack, flowDynamic, gotoFlow }) => {
      const optionTyped = ctx.body;
      const phone = ctx.from;

      await delay(2000);

      const isValid = isCorrectRange([1, 2, 3, 4], Number(optionTyped));

      if (!isValid) {
        await flowDynamic(invalidOption);
        await fallBack();
        return false;
      }

      if (optionTyped == '4') {
        await flowDynamic([
          'En unos momentos, te estaremos atendiendo. Estamos derivando a un asesor para poder resolver tu consulta',
        ]);
        return;
      }
    },
    [examFromHomeTurnStep]
  );

module.exports = { examFromHomeStep };
