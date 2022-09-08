SELECT * FROM sakila.film;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;