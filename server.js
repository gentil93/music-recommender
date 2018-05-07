
var path = require('path');
var express = require('express');

var app = express();

const DIST_DIR = path.join(__dirname, './dist'),
      HTML_FILE = path.join(DIST_DIR, "../public/index.html");
app.use(express.static(DIST_DIR));
app.set('port', process.env.PORT || 8080);
app.get("/", (req, res) => res.sendFile(HTML_FILE));

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});