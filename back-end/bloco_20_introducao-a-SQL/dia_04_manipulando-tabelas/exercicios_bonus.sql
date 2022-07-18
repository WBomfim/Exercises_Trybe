SELECT * FROM Pixar.BoxOffice;

SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.BoxOffice
SET rating = 9
WHERE domestic_sales > 400000000;

UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (
SELECT id FROM Pixar.Movies
WHERE length_minutes < 100
);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;

SET SQL_SAFE_UPDATES = 1;
