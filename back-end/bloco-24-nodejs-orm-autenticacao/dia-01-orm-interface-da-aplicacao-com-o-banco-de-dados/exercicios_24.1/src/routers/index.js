const express = require('express');
const BookRouter = require('../routers/books/BooksRouter');

const router = express();

router.use('/books', BookRouter);

module.exports = router;