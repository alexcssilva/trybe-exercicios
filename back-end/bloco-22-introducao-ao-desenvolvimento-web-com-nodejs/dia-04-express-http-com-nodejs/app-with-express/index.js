
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world')
});

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionado com sucesso!`)
});

app.delete('/langs', (req, res) => {
  const { name } = req.body
  res.send(`Linguagem ${name} excluida com sucesso!`);
});

app.listen(3002, () => console.log('App rodando na porta 3002!'));