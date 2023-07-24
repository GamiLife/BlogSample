const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const JSONAdapter = require('@bot-whatsapp/database/json');

const { client } = require('./config/db/Singleton.db');
const { first } = require('./flows/steps/first.step');

const main = async () => {
  const adapterDB = new JSONAdapter();
  const adapterFlow = createFlow([first]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
  await client();
};

main();
