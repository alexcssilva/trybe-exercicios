SELECT * FROM sakila.address;

SELECT district, COUNT(district) AS count_district
FROM sakila.address
GROUP BY district
ORDER BY count_district DESC;
