const request = require('request');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const url = require('url');

const PORT = 3001;

const app = express();
const logger = morgan('tiny');

app.use(logger);

app.use(
  '/api/*',
  cors(),
  (req, res) => {
    const { path } = url.parse(req.baseUrl);
    request(`http://pokeapi.co${path}`).pipe(res);
  }
);

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
