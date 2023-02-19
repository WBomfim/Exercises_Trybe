SELECT * FROM Pixar.Box_Office;

SELECT * FROM Pixar.Movies;

SELECT * FROM Pixar.Theater;

SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Box_Office AS B
JOIN Pixar.Movies AS M
ON B.movie_id = M.id;

SELECT M.title, (B.domestic_sales + B.international_sales) AS 'Total_Vendas'
FROM Pixar.Box_Office AS B
JOIN Pixar.Movies AS M
ON B.movie_id = M.id
WHERE B.domestic_sales < B.international_sales;

SELECT M.title, B.rating
FROM Pixar.Box_Office AS B
JOIN Pixar.Movies AS M
ON B.movie_id = M.id
ORDER BY B.rating DESC;

SELECT T.*, M.*
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

SELECT T.*, M.*
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

SELECT M.* FROM Pixar.Movies AS M
JOIN Pixar.Box_Office AS B
ON M.id = B.movie_id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;
