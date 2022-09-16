const { soma, subtracao, multiplicacao, divisao } = require('./calculo');

const calculadora = (valorA, valorB, operacao) => {
    switch (operacao) {
      case "soma":
        soma(valorA, valorB);
        break;
      case "subtracao":
        subtracao(valorA, valorB);
        break;
      case "multiplicacao":
        multiplicacao(valorA, valorB);
        break;
      case "divisao":
        divisao(valorA, valorB);
        break;
      default:
        break;
    }
}

module.exports = {
  calculadora,
};