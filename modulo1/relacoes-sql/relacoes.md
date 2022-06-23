## EXERCICIO 1 

```
CREATE TABLE Rating(
	id VARCHAR(25) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(225),
    FOREIGN KEY (movie_id) REFERENCES Movie (id)
);
```

a) Explique o que é uma chave estrangeira
R: Nada mais é que um identificador da tabela relacionada.

```
CREATE TABLE Movie(
	id VARCHAR(25) PRIMARY KEY,
    filme VARCHAR(225) NOT NULL,
    rating VARCHAR(225) NOT NULL
);
INSERT INTO Movie (id, filme) VALUES('001', 'Gente Grande Um'), ('002', 'Gente Grande Dois'), ('003','Homem Aranha'), ('004','Homem de Ferro');
```

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```
INSERT INTO Rating (id, comment, rate, movie_id) VALUES('001', 'Esse filme foi um dos melhores que já assisti', 5, '001');
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query
R: Ao executar o comando de insert é aprentado erro de constraint devido ao ID 005 que não existe na tabela Movie
```
INSERT INTO Rating (id, comment, rate, movie_id) VALUES('001', 'Esse filme foi um dos melhores que já assisti', 5, '005');
```
d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
R: Não é possível pois não existe uma coluna rating na tabela Movie
R: Na tabela Reting existem 
```
ALTER TABLE Movie DROP COLUMN filme;
```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
R: Não é possível pois existe um relacionamento com a tabela Reating
```
DELETE FROM Movie WHERE id = '001';
```
### EXERCICIO 2

a) Explique, com as suas palavras, essa tabela
R: Essa tabela representa a relação entre a tabela de Movie e Actor
```
CREATE TABLE MovieCast(
	movie_id VARCHAR(225),
    actor_id VARCHAR(225),
    FOREIGN KEY (movie_id) REFERENCES Movie (id),
    FOREIGN KEY (actor_id) REFERENCES Actor (id)
);
```

b) Crie, ao menos, 6 relações nessa tabela 
```
INSERT INTO MovieCast (movie_id, actor_id) VALUES('001','001'),('001','002'),('002','002'),('003','003'),('004','004'),('004','005');
```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
```
SELECT
	ac.id AS id_Actor,
    ac.name AS Actor_Name,
    m.filme AS Filme
FROM Actor AS ac
INNER JOIN MovieCast AS mc ON mc.actor_id = ac.id
INNER JOIN Movie AS m ON m.id = mc.movie_id;
```

d) Tente apagar um actor que possua uma relação nessa tabela. Anote e explique o resultado da query
R: Não é possível devido a relação da FOREIGN que existe


### EXERCICIO 3
```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

a) Explique, com suas palavras, a query acima. O que é o operador ON?
R: A query acima possui uma relação FK entre Movie e Rating onde é listado somente os itens que tem referencia, o ON  informa a condição somente o ID que seja igual ao ID tal.

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```
SELECT
	ac.id AS id_Actor,
    ac.name AS Actor_Name,
    m.filme AS Filme,
    r.rate AS Nota
FROM Actor AS ac
INNER JOIN MovieCast AS mc ON mc.actor_id = ac.id
INNER JOIN Movie AS m ON m.id = mc.movie_id
INNER JOIN Rating AS r ON r.movie_id = mc.movie_id
```