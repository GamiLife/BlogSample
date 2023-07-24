const templateWelcome = (name = '') =>
  `🙌 Hola ${name} bienvenido a *Figura Bot*.Yo me encargare de tu atencion en esta ocacion.`;

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
      'Listo 😃 Hay que conocernos para poder brindarte una atención médica mas personalizada. Te tomará 30 segundos 😃.',
      '1. Presentas fiebre ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  fourthStep: {
    keywords: [],
    questions: [
      '2. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  fifthStep: {
    keywords: [],
    questions: [
      '3. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  sixthStep: {
    keywords: [],
    questions: [
      '4. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  sevenStep: {
    keywords: [],
    questions: [
      '5. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  eighthStep: {
    keywords: [],
    questions: [
      '6. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
  ninethStep: {
    keywords: [],
    questions: [
      '7. Presentas tos ? 🤔',
      ['Escribe 1 si es SI o 2 si es NO', '*1.SI*', '*2.NO*'],
    ],
  },
};

module.exports = {
  conversation,
  templateWelcome,
};
