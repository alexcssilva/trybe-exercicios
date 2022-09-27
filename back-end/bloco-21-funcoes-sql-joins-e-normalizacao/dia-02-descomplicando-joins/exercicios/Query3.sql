# 3 . Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

USE Pixar;

SELECT 
	m.title, b.rating
FROM 
	Pixar.Movies AS m
INNER JOIN 
	Pixar.BoxOffice AS b ON b.movie_id = m.id
ORDER BY 
	b.rating DESC;