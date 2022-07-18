SELECT * FROM Pixar.Movies;

INSERT INTO Pixar.Movies (title, director, `year`, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
	   ('Procurando Nemo', 'John Lasseter', 2003, 107),
       ('Os Incríveis', 'Brand Bird', 2004, 116),
       ('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM Pixar.BoxOffice;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
	   (10, 7.4, 460000000, 510000000),
	   (11, 9.9, 290000000, 280000000);

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE id = 11;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (
SELECT id FROM Pixar.Movies
WHERE director = 'Andrew Staton'
);

DELETE FROM Pixar.Movies
WHERE id = 2 OR id = 9;
