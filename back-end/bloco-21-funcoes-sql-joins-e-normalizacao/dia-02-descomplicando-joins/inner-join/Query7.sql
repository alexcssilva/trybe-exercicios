# 7 . Monte uma query que exiba o id do ator , nome , id do filme e título do filme , 
# usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT 
	act.actor_id,
    act.first_name,
    f.film_id,
    f.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fac
	ON act.actor_id = fac.actor_id
INNER JOIN sakila.film AS f
	ON f.film_id = fac.film_id