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
  const book = await Book.createBook({ title, author, pageQuantity });
  return book;
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.updateBook(
    { 
      title, 
      author, 
      pageQuantity, 
    }, 
    { where: { id } },
  );

  return updated;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};