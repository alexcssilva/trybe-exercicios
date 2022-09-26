# 4 . Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, 
# mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
# Retorne os nomes dos cinemas em ordem alfabética.

USE Pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM 
	Pixar.Theater AS t
LEFT JOIN 
	Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY 
	t.name;