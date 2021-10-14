// Exercicios 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lessNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < lessNumber) {
    lessNumber = numbers[i];
  }
}

console.log(lessNumber);