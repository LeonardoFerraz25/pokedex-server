const express = require('express');
const bodyParser = require('body-parser');
const pokemonsRoute = require('./routes/pokemonsRoute');

const app = express();

app.use(bodyParser.json());

app.use('/pokemons', pokemonsRoute);

module.exports = app;