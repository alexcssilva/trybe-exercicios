SELECT * FROM sakila.customer;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;