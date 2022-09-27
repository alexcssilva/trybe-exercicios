# 8 .  Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, SUM(salary) 
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

