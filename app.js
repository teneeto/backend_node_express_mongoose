const express = require('express');

// Allows us set color on our error or console messages
const chalk = require('chalk');

// debug runs only when you're running in debug mode,
// It won't spill anything to console when project is deployed
const debug = require('debug')('app');

// log to the console anything that has to do with web traffic
const morgan = require('morgan');

const path = require('path');

const app = express();

// use "combined" for much info and "tiny" for less info
app.use(morgan('tiny'));

// telling express to serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, './node_modules/jquery/dist')));

// sending response when requested from a browser
app.get('/', (req, res) => {
  res.send('Hello from My Library app');
});

// serving up files (e.g index.html)
app.get('/index', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`); // if you miss the "/" before 'views', you'll have issues
});

// path.join helps eliminate "concatenation" and and the "/" before and after 'views'
app.get('/index2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.green('3000')}`);
});
