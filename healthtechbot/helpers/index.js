const {
  insertQuestionWithAnswer,
  insertExam,
  findLastExamIdByPhone,
} = require('../services');

const { invalidOption } = require('../config/constants/messages');
const { isCorrectRange } = require('../validators');
const { cache } = require('../config/cache');

const handleQuestionProcess = async ({
  question,
  optionTyped,
  phone,
  fallBack,
  flowDynamic,
  isFirstQuestion = false,
}) => {
  const isValid = isCorrectRange([1, 2], Number(optionTyped));

  if (!isValid) {
    await flowDynamic(invalidOption);
    await fallBack();
    return false;
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

  return examId;
};

const isUserSickBasedInAnswers = (answers) => {
  if (!answers) return false;

  try {
    const answersMarkedWithYes = answers.filter(({ answer }) => answer == '1');

    const isHighSignalOfSickness = answersMarkedWithYes.length > 5;
    return isHighSignalOfSickness;
  } catch (error) {
    throw new Error('Error analyzing answers');
  }
};

module.exports = {
  handleQuestionProcess,
  isUserSickBasedInAnswers,
};
