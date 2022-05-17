const BookService = require('../services/BooksService');

const getAll = async () => {
  const books = await BookService.getAll();

  return books;
};

const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.createBook({ title, author, pageQuantity });

  res.status(201).json(book);
};

module.exports = {
  getAll,
  getById,
  createBook,
};