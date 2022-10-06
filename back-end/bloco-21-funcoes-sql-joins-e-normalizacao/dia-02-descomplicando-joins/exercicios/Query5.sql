# 5 . Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes,
# mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
# Retorne os nomes dos cinemas em ordem alfabética.

USE Pixar;

SELECT
	m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location
FROM 
	Pixar.Movies AS m
RIGHT JOIN 
	Pixar.Theater AS t ON m.id = t.id
ORDER BY t.name;