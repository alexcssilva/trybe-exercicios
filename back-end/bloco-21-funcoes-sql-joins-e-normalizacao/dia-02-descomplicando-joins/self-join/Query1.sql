# 1 . Queremos saber o Nome das pessoas colaboradoras e 
# suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.

SELECT 
CONCAT(colab.FIRST_NAME, ' ', colab.LAST_NAME) AS 'Pessoa Colaboradora',
CONCAT(manag.FIRST_NAME, ' ', manag.LAST_NAME) AS 'Gerente'
FROM hr.employees AS colab
INNER JOIN hr.employees AS manag ON colab.MANAGER_ID = manag.MANAGER_ID
WHERE colab.DEPARTMENT_ID <> manag.DEPARTMENT_ID;