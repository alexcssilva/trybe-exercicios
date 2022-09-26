# 4 . O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .

SELECT * FROM Pixar.Movies;

UPDATE Pixar.Movies 
SET title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui';