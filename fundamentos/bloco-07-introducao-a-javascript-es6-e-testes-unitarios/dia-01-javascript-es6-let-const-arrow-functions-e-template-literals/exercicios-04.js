// Exercicios 04 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const largerWord = (phrase) => {
  let wordPhrase = phrase.split(' ')
  let wordLength = 0;
  let res = ''

  for (let word of wordPhrase) {
    wordPhrase = wordLength;
    res = `A maior pavra da frase é: ${word}`;
  }
  return res;
}

console.log(largerWord('Antônio foi no banheiro e não sabemos o que aconteceu'));