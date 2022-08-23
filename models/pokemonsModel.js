const connection = require('./connection');
const serialize = require('../utils/serialize');

const create = async (name, type, height, weight, image) => {
  const query = 'INSERT INTO pokedex.pokemon (pokemon_name, pokemon_type, pokemon_height, pokemon_weight, pokemon_img) VALUES (?, ?, ?, ?, ?)';
  const [pokemon] = await connection.execute(query, [name, type, height, weight, image]);
  return { id: pokemon.insertId };
};

const getById = async (id) => {
  const query = 'SELECT * FROM pokedex.pokemon WHERE pokemon_id = ?';
  const [pokemon] = await connection.execute(query, [id]);
  return serialize(pokemon);
};

const getAll = async () => {
  const query = 'SELECT * FROM pokedex.pokemon';
  const [pokemons] = await connection.execute(query);
  return serialize(pokemons);
};

const remove = async (id) => {
  const query = 'DELETE FROM pokedex.pokemon WHERE pokemon_id = ?';
  const [pokemon] = await connection.execute(query, [id]);
  return  { affectedRows: pokemon.affectedRows };
};

module.exports = {
  create,
  getById,
  getAll,
  remove,
};