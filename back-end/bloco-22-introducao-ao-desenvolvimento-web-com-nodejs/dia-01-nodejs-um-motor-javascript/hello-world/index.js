<<<<<<< HEAD
const readline = require('readline-sync');

// console.log('Hello, world!');

// const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
=======
const { question, questionInt} = require('readline-sync');

const name = question('Qual seu nome? ');
const age = questionInt('Qual sua idade? ');
>>>>>>> b19dd15b68ea4b67e3667e96cc18169c4786b1eb

console.log(`Hello, ${name}! You are ${age} years old!`);