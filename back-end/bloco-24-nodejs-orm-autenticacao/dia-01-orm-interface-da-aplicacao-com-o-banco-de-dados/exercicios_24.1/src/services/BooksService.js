const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books
};

const getById = async (id) => {
  const booksId = await Book.findByPk(id);

  return booksId;
};

const createBook = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
};