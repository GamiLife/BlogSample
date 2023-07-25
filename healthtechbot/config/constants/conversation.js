const templateWelcome = (name = '') =>
  `🙌 Hola ${name} bienvenido a *Figura Bot*.Yo me encargare de tu atencion en esta ocacion.`;
const missingDocumentNumberMessage = 'Nos falta tener tu dni 😃';
const alreadyUserRegistered = 'Genial ya te encuentra registrado! 😃';

const optionsToShow = ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'];
const optionsForTreatmentToShow = [
  'Escribe 1, 2 o 3',
  '*1. Mañana*',
  '*2. Tarde*',
  '*3. Noche*',
];

const conversation = {
  firstStep: {
    keywords: ['hola', 'ola', 'buenos'],
    questions: [
      templateWelcome(),
      'Dime, *Cual es tu nombre completo* ?',
      '🤔',
    ],
  },
  secondtStep: {
    keywords: [],
    questions: ['Dime. *Cual es tu dni?*', '🤔'],
  },
  thirdStep: {
    keywords: [],
    questions: [
      'Listo ahora hay que conocernos para poder brindarte una atención médica mas personalizada. Te tomará 30 segundos 😃.',
      '1. Presentas fiebre ? 🤔',
      optionsToShow,
    ],
  },
  fourthStep: {
    keywords: [],
    questions: ['2. Presentas tos ? 🤔', optionsToShow],
  },
  fifthStep: {
    keywords: [],
    questions: ['3. Presentas tos ? 🤔', optionsToShow],
  },
  sixthStep: {
    keywords: [],
    questions: ['4. Presentas tos ? 🤔', optionsToShow],
  },
  sevenStep: {
    keywords: [],
    questions: ['5. Presentas tos ? 🤔', optionsToShow],
  },
  eighthStep: {
    keywords: [],
    questions: ['6. Presentas tos ? 🤔', optionsToShow],
  },
  ninethStep: {
    keywords: [],
    questions: ['7. Presentas tos ? 🤔', optionsToShow],
  },
  tenthStepVariation1: {
    keywords: [],
    questions: [
      'Según tu estilo de vida, es probable que tengas un nivel Alto/Medio de Diabetes o tengas Diabetes.',
      'Puedes tener un tratamiento con el doctor endocrinologo. Que horarios te interesan?',
      optionsForTreatmentToShow,
    ],
  },
  tenthStepVariation2: {
    keywords: [],
    questions: [
      'Según tu estilo de vida, es probable que tengas un nivel Bajo de Diabetes pero aún así hay que cuidarse en caso te detecten Pre- Diabetes',
      'Puedes tener un tratamiento con un medico general. Que horarios te interesa?',
      optionsForTreatmentToShow,
    ],
  },
};

module.exports = {
  conversation,
  templateWelcome,
  missingDocumentNumberMessage,
  alreadyUserRegistered,
};
