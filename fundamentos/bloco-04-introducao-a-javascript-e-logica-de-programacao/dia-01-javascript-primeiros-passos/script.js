
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
} else {
  console.log("Variável B é maior que A")
}

// Exercícios 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 3;
const b = 2;
const c = 6;

if (a > b && a > c) {
  console.log("Variável A é maior que B e C");
} else if (b > a && b > a) {
  console.log("Variável B é maior que A e C");
} else {
  console.log("Variável C é maior que A e B");
}

// Exercícios 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor= 0;

if (valor > 0) {
  console.log("Positivo");
} else if (valor == 0){
  console.log("Zero");
} else {
  console.log("Negativo");
}

// Exercícios 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 90;
const angulo2 = 35;
const angulo3 = 70;

let soma = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (soma === 180) {
    console.log(true);
  } else {
  console.log(false);
  };
} else {
  console.log("erro");
}