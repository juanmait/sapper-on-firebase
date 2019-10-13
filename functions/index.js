const functions = require('firebase-functions');
const { sapper } = require('./__sapper__/build/server/server.js');

const middleware = sapper.middleware();

exports.sapper = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  middleware(req, res);
});
