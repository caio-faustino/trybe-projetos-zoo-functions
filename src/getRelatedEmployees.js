const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const listEmployees = employees.filter((elemento) => elemento.managers.includes(managerId));
    const notes = listEmployees.map((gerente) => `${gerente.firstName} ${gerente.lastName}`);
    return notes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
