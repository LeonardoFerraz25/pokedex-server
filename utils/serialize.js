module.exports = (quary) => quary.map((quary) => ({
  id: quary.pokemon_id,
  name: quary.pokemon_name,
  type: quary.pokemon_type,
  height: quary.pokemon_height,
  weight: quary.pokemon_weight,
  image: quary.pokemon_img,
}));