import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"
import exercicios from "./exercicios.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula49_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS aula49_recipes (
         id VARCHAR(255) PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description TEXT(1023),
         user_id VARCHAR(255),
         created_at BIGINT,
         FOREIGN KEY(user_id) REFERENCES aula49_users(id) 
      );

      CREATE TABLE IF NOT EXISTS aula48_exercicio(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula49_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertRecipes = () => connection("aula49_recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const insertExercicios = () => connection("aula48_exercicio")
   .insert(exercicios)
   .then(() => { console.log("Exercicos criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

   createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .then(insertExercicios)
   .finally(closeConnection)