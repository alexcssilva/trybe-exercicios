# 2 . Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.

SELECT CONCAT(manag.FIRST_NAME, ' ', manag.LAST_NAME) AS 'Nome gerente',
COUNT(*)
FROM hr.employees AS manag
INNER JOIN hr.employees AS colab ON colab.MANAGER_ID = manag.MANAGER_ID
GROUP BY manag.EMPLOYEE_ID;