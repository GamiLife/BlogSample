const MONGO_USER = 'root';
const MONGO_PASS = 'UIXFR8uDOzICJzyW';
const MONGO_DB_NAME = 'bot_db';
const MONGO_CLUSTER_NAME = 'cluster0.7j6v4tt.mongodb.net';

const MONGO_DB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER_NAME}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  MONGO_USER,
  MONGO_PASS,
  MONGO_DB_NAME,
  MONGO_CLUSTER_NAME,
  MONGO_DB_URI,
};
