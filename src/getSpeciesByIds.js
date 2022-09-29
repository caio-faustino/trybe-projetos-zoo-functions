const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // code here
  if (ids.length === 0) return [];
  return data.species.filter((elemento) => ids.find((id) => elemento.id === id));
}

module.exports = getSpeciesByIds;
