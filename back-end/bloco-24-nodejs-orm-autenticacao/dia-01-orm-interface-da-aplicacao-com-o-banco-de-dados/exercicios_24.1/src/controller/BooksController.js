const BookService = require('../services/BooksService');

const getAll = async () => {
  const books = await BookService.getAll();

  return books;
};

module.exports = {
  getAll,
};