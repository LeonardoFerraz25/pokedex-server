const pokemonsService = require('../services/pokemonsService');
const { CREATED, OK, DELETED, NOT_FOUND } = require('../utils/statusDictionary');

const create = async (req, res) => {
  const { name, type, height, weight, image } = req.body;
  const pokemon = await pokemonsService.create(name, type, height, weight, image);
  return res.status(CREATED).json({ id: pokemon.id, name });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonsService.getById(id);
  if (pokemon === undefined) return res.status(NOT_FOUND).json({ message: 'Product not found' });
  return res.status(OK).json(pokemon);
};

const getAll = async (_req, res) => {
  const pokemons = await pokemonsService.getAll();
  return res.status(OK).json(pokemons);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const getPokemonId = await pokemonsService.getById(id);
  if (getPokemonId === undefined) {
    return res.status(NOT_FOUND).json({ message: 'Pokemon not found' });
  } 
  const pokemon = await pokemonsService.remove(id);
  return res.status(DELETED).json(pokemon);
};

module.exports = {
  create,
  getById,
  getAll,
  remove,
};