const { question, questionInt, questionFloat } = require("readline-sync");

const pesoPessoal = questionFloat('Qual é seu peso? ')

const alturaPessoal = questionInt('Qual é sua altura? ');

function IMC(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaMetro = altura / 100;
  const alturaQuadrado = alturaMetro ** 2; 

  const imc = (peso / alturaQuadrado );

  return imc;
}

function main() {
  const imc = IMC(pesoPessoal, alturaPessoal);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if(imc >= 18 && imc < 24.9) {
    console.log('Situação: Peso normal');
    return;
  }

  if(imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if(imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if(imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  if(imc > 40) {
    console.log('Situação: Obesidade grau III e IV');
    return;
  }

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();