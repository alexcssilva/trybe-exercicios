# 1 . Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e
# internacionais ( international_sales ) de cada filme.
USE Pixar;

SELECT 
	m.title, b.domestic_sales, b.international_sales
FROM
	Pixar.Movies AS m
INNER JOIN 
	Pixar.BoxOffice AS b ON b.movie_id = m.id;