SELECT * FROM HR.employees;

SELECT MAX(salary) FROM HR.employees;

SELECT (MAX(salary) - MIN(salary)) FROM HR.employees;

SELECT job_id, AVG(salary) AS 'avg_salary'
FROM HR.employees
GROUP BY job_id
ORDER BY `avg_salary` DESC;

SELECT SUM(salary) FROM HR.employees;

SELECT ROUND(MAX(salary), 2),
       ROUND(MIN(salary), 2),
       ROUND(SUM(salary), 2), 
       ROUND(AVG(salary), 2)
FROM HR.employees;

SELECT COUNT(job_id) FROM HR.employees
WHERE job_id = 'it_prog';

SELECT job_id, SUM(salary) AS 'total'
FROM HR.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) AS 'total'
FROM HR.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, AVG(salary) AS 'total'
FROM HR.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY `total` DESC;

SELECT department_id,
       AVG(salary) AS 'avg_salary',
       COUNT(employee_id) AS 'employees'
FROM HR.employees
GROUP BY department_id
HAVING `employees` > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE HR.employees
SET phone_number = REPLACE(phone_number, '515.', '777.')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM HR.employees
WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) AS 'hire_year'
FROM HR.employees;

SELECT employee_id, first_name, DAY(hire_date) AS 'hire_day'
FROM HR.employees;

SELECT employee_id, first_name, MONTH(hire_date) AS 'hire_month'
FROM HR.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM HR.employees;

SELECT last_name, hire_date FROM HR.employees
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS 'date_diff'
FROM HR.employees;

