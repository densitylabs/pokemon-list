const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3001;

const app = express();
const logger = morgan('tiny');

app.use(logger);
app.use(cors());

const pokemons = require('./data/pokedex.json');
const types = require('./data/types.json');

const firstGen = pokemons.slice(0, 151);

app.get(
  '/api/pokemon',
  (req, res) => {
    res.json(firstGen);
  }
);

app.get(
  '/api/types',
  (req, res) => {
    res.json(types);
  }
);

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
