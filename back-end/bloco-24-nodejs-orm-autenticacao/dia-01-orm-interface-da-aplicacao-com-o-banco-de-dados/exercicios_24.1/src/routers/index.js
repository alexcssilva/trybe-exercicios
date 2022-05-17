const express = require('express');
const BooksRouter = require('./books/BooksRouter');

const router = express();

router.use('/books', BooksRouter);

module.exports = router;