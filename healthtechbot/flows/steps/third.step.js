const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');
const { conversation } = require('../../config/constants/conversation');
const { db } = require('../../config/db/Singleton.db');

const { thirdStep } = conversation;
const { keywords, questions } = thirdStep;
const [question1, question2, question3] = questions;

const third = addKeyword(keywords)
  .addAnswer(question1)
  .addAnswer(question2)
  .addAnswer(question3, null, async (ctx, { gotoFlow }) => {}, []);

module.exports = { third };
