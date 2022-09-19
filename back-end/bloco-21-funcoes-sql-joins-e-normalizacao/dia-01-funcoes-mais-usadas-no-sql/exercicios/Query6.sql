# 6 . Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT job_id, COUNT(*) AS 'total'
FROM hr.employees
WHERE job_id = 'IT_PROG';