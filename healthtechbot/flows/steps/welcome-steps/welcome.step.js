const { addKeyword } = require('@bot-whatsapp/bot');

const {
  conversation,
  alreadyUserRegistered,
} = require('../../../config/constants/conversation');
const { findUserByPhone } = require('../../../services');
const { delay } = require('../../../helpers');

const { genderStepFlow } = require('./gender.step');
const { documentStepFlow } = require('./document.step');
const { fullNameStepFlow } = require('./fullname.step');

const { menuStepFlow } = require('../menu-steps/menu.step');

const { welcomeStep } = conversation;
const { keywords, questions } = welcomeStep;
const [question1] = questions;

const surveyEntry = addKeyword([])
  .addAnswer('')
  .addAnswer(
    'Ok',
    null,
    async (ctx, { fallBack, flowDynamic, gotoFlow }) => {
      const phone = ctx.from;

      try {
        const user = await findUserByPhone(phone);

        if (!user.documentNumber) {
          gotoFlow(documentStepFlow);
          return;
        }
        if (!user.genderId) {
          gotoFlow(genderStepFlow);
          return;
        }

        gotoFlow(menuStepFlow);
        return;
      } catch (error) {}
    },
    [menuStepFlow, documentStepFlow, genderStepFlow]
  );

const welcomeStepFlow = addKeyword(keywords).addAnswer(
  'Hey!',
  null,
  async (ctx, { gotoFlow, flowDynamic }) => {
    const phone = ctx.from;

    await delay(1000);

    try {
      const user = await findUserByPhone(phone);
      const question1Template = question1.replaceAll(
        '{{name}}',
        !user ? '' : ` ${user.fullName}`
      );

      if (user) {
        await flowDynamic([question1Template, alreadyUserRegistered]);
        gotoFlow(surveyEntry);
        return;
      }

      await flowDynamic([question1Template]);
      gotoFlow(fullNameStepFlow);
      return;
    } catch (error) {}
  },
  [fullNameStepFlow, surveyEntry]
);

module.exports = {
  welcomeStepFlow,
};
