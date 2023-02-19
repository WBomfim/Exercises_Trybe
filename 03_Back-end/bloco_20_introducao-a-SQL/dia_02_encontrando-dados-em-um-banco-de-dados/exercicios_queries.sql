USE Scientists;

SElECT "This is SQL Exercise, Practice and Solution";

SELECT 1 AS Num1, 2 AS Num2, 3 AS Num3;

SELECT 10 + 15;

SELECT (15 * 2) + 20;

SELECT * FROM Scientists;

SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho
FROM Scientists.Projects;

SELECT name
FROM Scientists.Scientists
ORDER BY name;

SELECT name
FROM Scientists.Projects
ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
AS Infrormation
FROM Scientists.Projects;

SELECT name, hours
FROM Scientists.Projects
ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT project
FROM Scientists.AssignedTo;

SELECT name
FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1;

SELECT name
FROM Scientists.Projects
ORDER BY hours
LIMIT 1
OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY hours
LIMIT 5;

SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists')
AS Information
FROM Scientists.Scientists;