
// Exercícios 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 3;

const adicao = a + b;
console.log(adicao);

const subtracao = a - b;
console.log(subtracao);

const multiplicacao = a * b;
console.log(multiplicacao);

const divisao = a / b;
console.log(divisao);

const modulo = a % b;
console.log(modulo);

// Exercícios 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 12;
const b = 8;

if (a > b) {
  console.log("Variável A é maior que B");
}
else {
  console.log("Variável B é maior que A")
}

// Exercícios 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 3;
const b = 2;
const c = 6;

if (a > b && a > c) {
  console.log("Variável A é maior que B e C");
}
else if (b > a && b > a) {
  console.log("Variável B é maior que A e C");
}
else {
  console.log("Variável C é maior que A e B");
}
