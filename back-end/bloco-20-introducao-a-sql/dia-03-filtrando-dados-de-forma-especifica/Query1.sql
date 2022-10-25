# 1.Escreva uma query para exibir todas as peças que começam com GR.

USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';