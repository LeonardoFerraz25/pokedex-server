const pokemonsModel = require('../models/pokemonsModel');

const create = async (name, type, height, weight, image) => {
  const addPokemon = await pokemonsModel.create(name, type, height, weight, image);
  return { id: addPokemon.id };
};

const getById = async (id) => {
  const pokemon = await pokemonsModel.getById(id);
  return pokemon;
};

const getAll = async () => {
  const pokemon = await pokemonsModel.getAll();
  return pokemon;
};

const remove = async (id) => {
  const dellPokemon = await pokemonsModel.remove(id);
  return dellPokemon;
};

module.exports = {
  create,
  getById,
  getAll,
  remove,
};