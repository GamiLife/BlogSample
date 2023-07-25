const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../../../config/constants/conversation');
const { db } = require('../../../../config/db/Singleton.db');

const { tenthStepVariation2 } = conversation;
const { keywords, questions } = tenthStepVariation2;
const [question1, question2, question3] = questions;

const tenthStepVar2 = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(question2)
  .addAnswer(question3, { capture: true }, async (ctx, { gotoFlow }) => {}, []);

module.exports = { tenthStepVar2 };
