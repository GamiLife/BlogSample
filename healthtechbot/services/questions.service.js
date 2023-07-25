const { client } = require('../config/db/Singleton.db');

const findLastExamIdByPhone = async (phone) => {
  try {
    const cl = await client();

    const userExam = await cl
      .collection('user_exam')
      .findOne({ phone })
      .sort({ examId: -1 })
      .limit(1);

    const examId = userExam ? userExam.examId : 1;

    return examId;
  } catch (error) {
    console.log('Error: ', error);
  }
};

const insertExam = async (phone) => {
  try {
    const cl = await client();

    const examId = await findLastExamIdByPhone(phone);

    await cl.collection('user_exam').insert({
      phone,
      examId: +examId + 1,
      date: new Date(),
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

const insertQuestionWithAnswer = async (question, answer, phone, examId) => {
  try {
    const cl = await client();

    await cl.collection('questions_answers').insert({
      question,
      answer,
      phone,
      examId,
      date: new Date(),
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

const findLastQuestionWithAnswersByPhone = async (phone, examId) => {
  try {
    const cl = await client();

    const questionsWithAnswers = await cl
      .collection('questions_answers')
      .find({
        phone,
        examId,
      })
      .sort({
        date: -1,
      });

    return questionsWithAnswers;
  } catch (error) {
    console.log('Error: ', error);
  }
};

module.exports = {
  insertQuestionWithAnswer,
  findLastQuestionWithAnswersByPhone,
  insertExam,
  findLastExamIdByPhone,
};
