const express = require('express');
const BooksController = require('../../controller/BooksController');

const BooksRouter = express.Router();

BooksRouter.get('/', BooksController.getAll);
BooksRouter.get('/:id', BooksController.getById);

BooksRouter.post('/book', BooksController.createBook);

BooksRouter.put('/book/:id', BooksController.updateBook);

BooksRouter.delete('/book/:id', BooksController.removeBook);

module.exports = BooksRouter;