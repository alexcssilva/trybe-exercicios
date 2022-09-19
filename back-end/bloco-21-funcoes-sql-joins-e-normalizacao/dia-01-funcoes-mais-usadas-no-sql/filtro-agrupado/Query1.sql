SELECT * FROM sakila.customer;

SELECT active, COUNT(*) 
FROM sakila.customer
GROUP BY active;