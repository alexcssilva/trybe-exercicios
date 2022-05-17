const express = require('express');
const BooksController = require('../../controller/BooksController');

const BooksRouter = express.Router();

BooksRouter.get('/', BooksController.getAll);

module.exports = BooksRouter;