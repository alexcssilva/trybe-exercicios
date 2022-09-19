/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const infoPerson = (nomeCompleto) => { // função criada com um parametro
  const email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`; // variavel criado para receber um template literals com o mesmo valor da chave do objeto retornado na linha 6
  
  return {nomeCompleto, email: email}; // retorno de objeto com duas chaves
};

// console.log(infoPerson('Alex Silva'));

const newEmployees = (callback) => { // HOF - Higher Order Functions chamando  minha função infoPerson
  const employees = { //callback (que é a infoPerson) com parametro desejado que é nome completo
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees; // retorno do objeto integrando a função infoPerson
};

// console.log(newEmployees(infoPerson));