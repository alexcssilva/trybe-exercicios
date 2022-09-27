# 3 . Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

SELECT * FROM sakila.film_text;

DELETE FROM sakila.film_text
WHERE description = '%saga%';