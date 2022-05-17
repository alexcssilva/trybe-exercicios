const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books
};

const getById = async (id) => {
  const booksId = await Book.findByPk(id);

  return booksId;
};

module.exports = {
  getAll,
  getById,
};