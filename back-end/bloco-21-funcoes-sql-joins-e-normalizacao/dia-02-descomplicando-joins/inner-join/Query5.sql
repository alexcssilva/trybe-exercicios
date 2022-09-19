# 5 . Exiba o nome e a quantidade de endereços dos clientes cadastrados. 
# Ordene seus resultados por nomes de forma decrescente. 
# Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

SELECT c.first_name, COUNT(a.address) AS `quantidade de endereço`
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;
