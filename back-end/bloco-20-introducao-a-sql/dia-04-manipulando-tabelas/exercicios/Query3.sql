# 3 . O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .

SELECT * FROM Pixar.Movies;

UPDATE Pixar.Movies
SET director = 'Andrew Station'
WHERE title = 'Procurando Nemo';