const { question, questionInt } = require('readline-sync');


const weight = question('Qual seu peso? ');
const height = questionInt('Qual sua altura? ');

function calculaImc () {

  console.log(`Peso: ${weight}, altura: ${height}`);

  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc();
