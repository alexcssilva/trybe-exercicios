# 12 . Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;