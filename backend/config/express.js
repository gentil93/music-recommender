const express = require('express');
const consign = require('consign');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const path = require('path')
const webpack = require("webpack")
const webpackHotMiddleware = require("webpack-hot-middleware")
const config = require("../../frontend/webpack.config")

const app = express();
const router = express.Router()


const DIST_DIR      = path.join(__dirname, '../../frontend/dist'),
      HTML_FILE     = path.join(DIST_DIR, "../../frontend/public/index.html");

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
	app.use(compress());
}

app.use(express.static(DIST_DIR));

app.get("/", (req, res) => res.sendFile(HTML_FILE));
// app.get("/clients", (req, res) => res.sendFile(HTML_FILE));
// app.get("/management", (req, res) => res.sendFile(HTML_FILE));



app.set('json spaces', 2);
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));
app.use('/api', router)

consign({cwd: 'app', verbose: false})
	.include('controllers')
	.then('routes')
	.into(app);


require('../routes/routerManager')(app)

module.exports = app;
