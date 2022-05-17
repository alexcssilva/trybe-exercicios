const express = require('express');
const router = require('../exercicios_24.1/src/routers/index');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));