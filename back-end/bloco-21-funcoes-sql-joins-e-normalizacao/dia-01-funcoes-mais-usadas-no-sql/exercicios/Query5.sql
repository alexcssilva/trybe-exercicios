# 5 .  Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT 
	MAX(salary), 
	MIN(salary), 
    SUM(salary), 
    ROUND(AVG(salary), 2) FROM hr.employees;