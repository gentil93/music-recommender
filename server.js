
var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 5000

const DIST_DIR = path.join(__dirname, './dist'),
      HTML_FILE = path.join(DIST_DIR, "../public/index.html");
app.use(express.static(DIST_DIR));
app.set('port', port);
app.get("/", (req, res) => res.sendFile(HTML_FILE));

var server = app.listen(port,"0.0.0.0", function() {
  console.log('listening on port ', server.address().port);
});