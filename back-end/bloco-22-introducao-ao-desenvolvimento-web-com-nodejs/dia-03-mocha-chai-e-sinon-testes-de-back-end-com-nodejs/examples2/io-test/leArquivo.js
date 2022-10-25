const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf-8');

    return conteudoDoArquivo;
  } catch (error) {
    return null;
  }
};

module.exports = leArquivo;