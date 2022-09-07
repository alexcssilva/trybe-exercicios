SELECT * FROM sakila.film;

SELECT film_id, title, IF (title = 'ACE GOLDFINGER ', 'Já assisti a esse filme', 'Não conheço o filme')
FROM sakila.film;