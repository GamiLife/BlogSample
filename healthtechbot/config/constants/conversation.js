const linkForThirdVariation1 = {
  1: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
  2: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
  3: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
};

const linkForThirdVariation2 = {
  1: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
  2: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
  3: {
    message: 'https://www.marktechpost.com/',
    doctorName: 'Jose',
  },
};

const missingDocumentNumberMessage = 'Nos falta tener tu dni 😃';
const missingGenderMessage = 'Nos falta tener tu sexo 😃';
const alreadyUserRegistered = 'Genial ya te encuentra registrado!';

const firstFinalMessageToShow = `Agenda un consulta virtual con el doctor {{doctorName}}, aqui.`;
const secondFinalMessageToShow =
  'Una vez programada tu cita, nos contactaremos por aquí para que efectúes el pago.';

const noteForOptions = 'Escribe el numero para seleccionar la opcion';
const optionsForTreatmentToShow = [
  noteForOptions,
  '*1. Mañana*',
  '*2. Tarde*',
  '*3. Noche*',
];

const conversation = {
  welcomeStep: {
    keywords: [
      'hola',
      'ola',
      'buenos',
      'Hola estoy interesado(a) en el servicio!',
    ],
    questions: [`¡Hola{{name}}! *Anna* te da la bienvenida 😃`],
  },
  fullNameStep: {
    keywords: [],
    questions: ['Por favor indícanos tu nombre completo para poder atenderte'],
  },
  documentStep: {
    keywords: ['.'],
    questions: ['Por favor indícanos el número de tu DNI'],
  },
  genderStep: {
    keywords: ['.'],
    questions: [
      'Por favor indícanos tu sexo',
      [noteForOptions, '*1.Masculino*', '*2.Femenino*'],
    ],
  },
  firstSurveyQuestion: {
    keywords: '^[1,2]$',
    questions: [
      '1. ¿Cuántos años tiene usted?',
      [
        noteForOptions,
        '*1. Menos de 45 años*',
        '*2. 45 - 54 años*',
        '*3. 55 - 64 años*',
        '*4. Más de 64 años*',
      ],
    ],
    answerPoints: [0, 2, 3, 4],
  },
  secondSurveyQuestion: {
    keywords: '^[1,2,3,4]$',
    questions: [
      '2. ¿Cuál es su índice de Masa Corporal (IMC)?',
      [
        noteForOptions,
        '*1. Menos de 25 kg/m2*',
        '*2. De 25 - 30 kg/m2*',
        '*3. Más de 30 kg/m2*',
      ],
    ],
    answerPoints: [0, 1, 3],
  },
  thirdSurveyQuestionForMan: {
    keywords: '^[1,2,3]$',
    questions: [
      '3. ¿Cuánto mide su cintura?',
      [
        noteForOptions,
        '*1. Menos de 94 cm*',
        '*2. De 94 cm a 102 cm*',
        '*3. Más de 102 cm*',
      ],
    ],
    answerPoints: [0, 3, 4],
  },
  thirdSurveyQuestionForWoman: {
    keywords: '^[1,2,3]$',
    questions: [
      '3. ¿Cuánto mide su cintura?',
      [
        noteForOptions,
        '*1. Menos de 80 cm*',
        '*2. De 80 cm a 88 cm*',
        '*3. Más de 88 cm*',
      ],
    ],
    answerPoints: [0, 3, 4],
  },
  fourthSurveyQuestion: {
    keywords: '^[1,2,3]$',
    questions: [
      '4. ¿Realiza habitualmente al menos 30 minutos de actividad fisica, en el trabajo y/o en el tiempo libre?',
      [noteForOptions, '*1. Si*', '*2. No*'],
    ],
    answerPoints: [0, 1],
  },
  fifthSurveyQuestion: {
    keywords: '^[1,2]$',
    questions: [
      '5. ¿Con qué frecuencia come verduras o frutas?',
      [noteForOptions, '*1. Todos los días*', '*2. No todos los días*'],
    ],
    answerPoints: [0, 1],
  },
  sixthSurveyQuestion: {
    keywords: '^[1,2]$',
    questions: [
      '6. ¿Toma medicación para la presión alta o padece de Hipertensión Arterial?',
      [noteForOptions, '*1. No*', '*2. Si*'],
    ],
    answerPoints: [0, 2],
  },
  sevenSurveyQuestion: {
    keywords: '^[1,2]$',
    questions: [
      '7. ¿Le han encotrado alguna vez valores de glucosa altos( por ejemplo, en un control médico o durante una enfermedad o durante el embarazo?',
      [noteForOptions, '*1. No*', '*2. Si*'],
    ],
    answerPoints: [0, 5],
  },
  lastSurveyQuestion: {
    keywords: '^[1,2]$',
    questions: [
      '8. ¿Se le ha diagnosticado diabetes (tipo 1 o tipo 2) a alguno de sus familiares o parientes?',
      [
        noteForOptions,
        '*1. No*',
        '*2. Si: abuelos, tía, tío, primo y hermano*',
        '*3. Si: padres, hermanos, hijos*',
      ],
    ],
    answerPoints: [0, 3, 5],
  },
  resultsStepVariation1: {
    keywords: '^[1,2,3]$',
    questions: [
      'Según tu estilo de vida, es probable que tengas un nivel Medio o Alto por ello, te recomendamos tratarte con un profesional de la salud.',
      'Acá tienes disponibilidad de nuestro staff médico inmediato altamente capacidad.  ¿Qué horarios te interesa?',
      optionsForTreatmentToShow,
    ],
  },
  resultsStepVariation2: {
    keywords: '^[1,2,3]$',
    questions: [
      'Según tu estilo de vida, es probable que tengas un nivel Bajo por ello, te recomendamos tratarte con un profesional de la salud.',
      'Acá tienes disponibilidad de nuestro staff médico inmediato altamente capacidad.  ¿Qué horarios te interesa?',
      optionsForTreatmentToShow,
    ],
  },
};

module.exports = {
  conversation,
  missingDocumentNumberMessage,
  missingGenderMessage,
  alreadyUserRegistered,
  linkForThirdVariation1,
  linkForThirdVariation2,
  firstFinalMessageToShow,
  secondFinalMessageToShow,
};
