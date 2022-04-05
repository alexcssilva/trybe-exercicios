# 2 . Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';