const {
  insertQuestionWithAnswer,
  insertExam,
  findLastExamIdByPhone,
} = require('../services');

const { cache } = require('../config/cache');

const handleQuestionProcess = async ({
  question,
  optionTyped,
  phone,
  fallBack,
  isFirstQuestion = false,
}) => {
  const isValid = isCorrectRange([1, 2], Number(optionTyped));

  if (!isValid) {
    fallBack('Opción Inválida');
    return;
  }

  let examId;
  if (isFirstQuestion) {
    examId = await insertExam(phone);
    cache().set(phone, examId);
  } else {
    const currentExamIdFromCache = cache().get(phone);
    examId =
      currentExamIdFromCache === undefined
        ? await findLastExamIdByPhone(phone)
        : +currentExamIdFromCache;
  }

  await insertQuestionWithAnswer(question, optionTyped, phone, examId);
  return;
};

module.exports = {
  handleQuestionProcess,
};
