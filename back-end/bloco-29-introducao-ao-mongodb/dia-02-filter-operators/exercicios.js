use("class");


// Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

db.superheroes.find();

// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.

db.superheroes.find(
  { "aspects.height": { $lt: 180} }
  ).pretty();

// Exercício 3: Retorne o total de super-heróis menores que 1.80m.

db.superheroes.countDocuments(
  { "aspects.height": { $lt: 180 } }
  );

// Exercício 4: Retorne o total de super-heróis com até 1.80m.

db.superheroes.countDocuments(
  { "aspects.height": { $lte: 180 } }
  );

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.

db.superheroes.find(
  { "aspects.height": { $gte: 200 } }
  );

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.

db.superheroes.countDocuments(
  { "aspects.height": { $gte: 200 } }
);

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.

db.superheroes.find(
  { "aspects.eyeColor": { $eq: "green" } }
).pretty();

// Exercício 8: Retorne o total de super-heróis com olhos azuis.

db.superheroes.find(
  { "aspects.eyeColor": { $eq: "blue" } }
).pretty();

// Exercício 9: Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").

db.superheroes.find(
  { "aspects.hairColor": { $in:["black", "No hair"] } }
).pretty();

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").

db.superheroes.countDocuments(
  { "aspects.hairColor": { $in:["black", "No hair"] } }
);

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

db.superheroes.countDocuments(
  { "aspects.hairColor": { $nin:["black", "No hair"] } }
);

// Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

db.superheroes.countDocuments(
  { "aspects.height": { $not:{ $lte: 180} } }
);

// Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.

db.superheroes.find(
  {
      $nor: [
          { race: "Human" },
          { "aspects.height": { $gt: 180 } }
      ]
  }
).pretty();

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.

db.superheroes.find(
  {
      $and: [
          {
              $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
          },
          {
              publisher: "Marvel Comics"
          }
      ]
  }
).pretty();

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.

db.superheroes.find(
  {
      $and: [
          {
              "aspects.weight": { $gte: 80, $lte: 100 }
          },
          {
      $or: [{ race: "Human" }, { race: "Mutant" }]
          },
          {
              publisher: { $ne: "DC Comics" }
          }
      ]
  }
).pretty();

// Exercício 16: Retorne o total de documentos que não contêm o campo race.

db.superheroes.countDocuments(
  { race: { $exists: 0 } }
);

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor.

db.superheroes.countDocuments(
  { "aspects.hairColor": { $exists: true } }
);

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures.

db.superheroes.deleteOne(
  { publisher: "Sony Pictures" }
);

// Exercício 19: Remova todos os documentos publicados pelo George Lucas.

db.superheroes.deleteMany(
  { publisher: "George Lucas" }
);

