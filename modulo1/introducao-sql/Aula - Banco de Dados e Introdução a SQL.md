## Exercício 1
CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY, 		/*Identificado actor*/
    name VARCHAR(255) NOT NULL, 		/*Nome do actor*/
    salary FLOAT NOT NULL DEFAULT (0), 	/*Salário do actor*/
    birth_date DATE NOT NULL,			/*Data de aniversário actor*/
    gender VARCHAR(6) NOT NULL			/*Genero do Actor*/
);

## a)
	- CREATE TABLE: comando para criar a tabela
	- VARCHAR: tipo de dado da coluna em caracter
	- NOT NULL: informa se a coluna pode receber valor NULL
	- FLOAT: tipo de dado da coluna em dicimal
	- DATE: tipo de dado da coluna para Data

## b)
	- SHOW DATABASE: exibe os bancos de dados
	- SHOW TABLE: exibe as tabelas do banco de dados
	
## c)
	- DESCRIBE TABLE_NAME: exibe a arquitetura da tabela 
	
## Exercício 2
	
## a) 
	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES ("002","Glória Pires",1200000,"1963-08-23","female");
	
## b) 
	Informa que já existe um registro com o mesmo ID
	
## c)
	Ocorre um erro pq está faltando duas colunas (irth_date, gender)
	
## d)
	Ocorre um erro pq está faltando a coluna name

## e)
	Ocorre um erro pq a data informação está sendo enviada como número
	
## Exercício 3
	
## a)
	SELECT * FROM Actor WHERE gender LIKE 'female';
	
## b)
	SELECT name AS "Nome", salary as "Salário" FROM Actor WHERE name LIKE 'Tony%';
## c)
	SELECT * FROM Actor WHERE gender LIKE 'invalid';
## d)
	SELECT id, name AS "Nome", salary as "Salário" FROM Actor WHERE salary <= 500000;

## e)	
	SELECT id, name FROM Actor WHERE id = "002";
	
## Desafio

## a)
	SELECT * FROM Actor WHERE (name LIKE 'A%' OR name lIKE 'J%') AND salary > 300000
	ORDER BY name ASC;
	
	SELECT * FROM Actor WHERE (name LIKE 'A%' OR name lIKE 'J%') AND salary BETWEEN 300000 AND 400000
	ORDER BY name ASC;
	
	SELECT * FROM Actor WHERE (name LIKE 'A%' OR name lIKE 'J%') AND salary NOT BETWEEN 300000 AND 400000
	ORDER BY name ASC;

	SELECT * FROM Actor WHERE (name LIKE 'A%' OR name lIKE 'J%') AND salary NOT LIKE 300001 
	ORDER BY name ASC;
	
## b)
	SELECT * FROM Actor WHERE name NOT LIKE 'A%' AND salary > 350000;
	
## c)
	SELECT * FROM Actor WHERE name LIKE '%G%' OR name LIKE '%g%';
	
## d)
	SELECT * FROM Actor WHERE (name LIKE '%G%' OR name LIKE '%g%' OR name LIKE '%A%' OR name LIKE '%a%')
	AND salary BETWEEN 350000 AND 900000