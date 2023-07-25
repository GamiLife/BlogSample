const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../../config/constants/conversation');
const { db } = require('../../../../config/db/Singleton.db');

const { tenthStepVariation1 } = conversation;
const { keywords, questions } = tenthStepVariation1;
const [question1, question2, question3] = questions;

const tenthStepVar1 = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(question2)
  .addAnswer(question3, { capture: true }, async (ctx, { gotoFlow }) => {}, []);

module.exports = { tenthStepVar1 };
