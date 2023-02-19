SELECT * FROM Pecas_Fornecedores.Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Pecas_Fornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

SELECT peca, Preco, fornecedor FROM Pecas_Fornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

SELECT * FROM Pecas_Fornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(name) FROM Pecas_Fornecedores.Fornecedores
WHERE name LIKE '%F%';

SELECT * FROM Pecas_Fornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

SELECT COUNT(*) FROM Pecas_Fornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';