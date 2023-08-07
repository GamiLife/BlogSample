const { addKeyword } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../config/constants/conversation');
const { invalidDocumentNumber } = require('../../../config/constants/messages');
const { updateUser } = require('../../../services/user.service');
const { isCorrectDocumentNumber } = require('../../../validators');

const { genderStepFlow } = require('./gender.step');

const { documentStep } = conversation;
const { keywords, questions } = documentStep;
const [question1] = questions;

const documentStepFlow = addKeyword(keywords)
  .addAnswer('')
  .addAnswer(
    question1,
    {
      capture: true,
    },
    async (ctx, { flowDynamic, fallBack, gotoFlow }) => {
      const phone = ctx.from;
      const documentNumber = ctx.body;

      const isValid = isCorrectDocumentNumber(documentNumber);

      if (!isValid) {
        await flowDynamic(invalidDocumentNumber);
        await fallBack();
        return;
      }

      await updateUser(phone, { phone, documentNumber });
      await flowDynamic(['Genial!']);
      await gotoFlow(genderStepFlow);
      return;
    }
  );

module.exports = { documentStepFlow };