// Exercicios 2 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let asterisk = '*';
let spaceLine = '';

for (let i = 1; i < n; i += 1) {

  for (let j = 0; j < n; j += 1) {
    let espaco = ' ';
    if (asterisk.length < n) {
      spaceLine = spaceLine + asterisk
      console.log(spaceLine);
    }
  }
}