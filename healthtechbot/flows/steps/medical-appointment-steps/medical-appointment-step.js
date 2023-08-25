const { addKeyword } = require('@bot-whatsapp/bot');
const {
  conversation,
  linkForMedicalAppointments,
} = require('../../../config/constants/conversation');
const { invalidOption } = require('../../../config/constants/messages');

const { scheduleMedicalAppointment } = conversation;
const { keywords, questions } = scheduleMedicalAppointment;
const [question1, question2] = questions;

const medicalAppointmentStep = addKeyword(keywords, {
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

      const isValid = isCorrectRange([1, 2, 3], Number(optionTyped));

      if (!isValid) {
        await flowDynamic(invalidOption);
        await fallBack();
        return false;
      }

      const messageOption = linkForMedicalAppointments[optionTyped];
      if (!messageOption) return;

      const { message } = messageOption;
      await flowDynamic(message);
    },
    []
  );

module.exports = { medicalAppointmentStep };
