const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(bicho) {
  if (bicho === undefined) {
    const list = {};

    species.forEach((elemento) => {
      list[elemento.name] = elemento.residents.length;
    });
    return list;
  }

  const { sex, specie } = bicho;
  if (sex) {
    return species.find((element) => element.name === specie)
      .residents.filter((resident) => resident.sex === sex).length;
  }
  return species.find((elemento) => elemento.name === specie).residents.length;
}

module.exports = countAnimals;
