# 2 . Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Jessica', 'Alencar', 5, NULL, 1, 1, 'Jessica', NULL),
	('Ana', 'Carolina', 6, NULL, 2, 1, 'Ana', NULL);

