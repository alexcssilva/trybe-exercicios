
// Exercícios 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 3;

const addition = a + b;
console.log(addition);

const subtraction = a - b;
console.log(subtraction);

const multiplies = a * b;
console.log(multiplies);

const share = a / b;
console.log(share);

const modules = a % b;
console.log(modules);

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

const value;

if (value > 0) {
  console.log("Positivo");
} else if (value == 0){
  console.log("Zero");
} else {
  console.log("Negativo");
}

// Exercícios 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angle1 = 90;
const angle2 = 35;
const angle3 = 70;

let sum = angle1 + angle2 + angle3;

if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
  if (soma === 180) {
    console.log(true);
  } else {
  console.log(false);
  };
} else {
  console.log("erro");
}

// Exercícios 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let gameOfChess = "cavalo";

switch(gameOfChess.toLowerCase()) {
  case "rei":
    console.log("andar em qualquer direção, mas apenas de casa em casa");
    break;
  case "rainha":
    console.log("Andar na horizontal, vertical e diagonal");
    break;
  case "torre":
    console.log("Andar frente, trás, direita e esquerda"); 
    break;
  case "bispo":
    console.log("Andar na diagonal");
    break;
  case "cavalo":
    console.log("Movimentos em 'L'");
    break;
  case "peao":
    console.log("Andar apenas para frente");
    break;
  default:
    console.log("Peça informada não existe!");
    break;
}

// Exercícios 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let score;

if (score > 100) {
  console.log("error");
} else if (score >= 90) {
  console.log("A");
} else if (score => 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 50) {
  console.log("E");
} else if (score > 0) {
  console.log("F");
} else {
  console.log("error");
}


// Exercícios 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const numberA = 5;
const numberB = 3;
const numberC = 8;

if (numberA % 2 == 0 || numberB % 2 == 0 || numberC % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercícios 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const numberA = 5;
const numberB = 3;
const numberC = 8;

if (numberA % 2 != 0 || numberB % 2 != 0 || numberC % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercícios 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const productCost = 2;
const saleCost = 5;

let incomeTax = 0.2;

if (productCost >= 0 && saleCost >= 0) {
  const totalCost = productCost * incomeTax;
  const profitProduct = (saleCost - totalCost) * 1000;
  console.log(profitProduct)
} else {
  console.log("erro");
}
