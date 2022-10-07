# 7 . Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2 , 9);

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';
