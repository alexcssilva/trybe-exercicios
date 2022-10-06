# 5. Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE name LIKE '%F%';