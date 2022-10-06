const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
    strings.forEach((string) => console.log(string));
  });
}
function main() {
  readAll();
}


main();
