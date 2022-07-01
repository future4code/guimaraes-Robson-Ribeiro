import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByType } from './endpoints/getUserByType'
import { getUserByNameOrType } from './endpoints/getUserByNameOrType'

app.get("/recipes", getAllRecipes)
app.get("/getAllUsers", getAllUsers)
app.get("/getUserByType", getUserByType)
app.get("/getUserByNameOrType", getUserByNameOrType)