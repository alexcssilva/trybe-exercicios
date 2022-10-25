# 6 . Exclua da tabela Movies o filme "WALL-E".

SELECT * FROM Pixar.BoxOffice;

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE title = 'WALL-E';