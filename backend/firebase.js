const admin = require('firebase-admin');
const serviceAccount = require(process.env.PATH_TO_SERVICE_ACCOUNT);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.DB_URL,
});

const db = admin.database();
module.exports = db;
