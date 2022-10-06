SELECT rating, SUM(replacement_cost) AS custo_substituicao
FROM sakila.film
GROUP by rating
HAVING custo_substituicao > 3950.50
ORDER BY custo_substituicao;