const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
    strings.forEach((string) => console.log(string));
  });
}
// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  readAll();
}

main();
