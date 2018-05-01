let app = require('./config/express');
let db = require('./config/database');

db.on('error', console.error);
db.once('open', () => {
  console.log('Conectado ao MongoDB.')
  app.listen(app.get('port'), () => {
		console.log(`Server running at ${app.get('port')}.`);
	});
});