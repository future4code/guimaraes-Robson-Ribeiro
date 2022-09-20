import express from "express";

import { RecipeController } from "./RecipeController";

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post('/create', recipeController.createRecipe)
recipeRouter.get('/findRecipeById/:id', recipeController.findRecipeById)

