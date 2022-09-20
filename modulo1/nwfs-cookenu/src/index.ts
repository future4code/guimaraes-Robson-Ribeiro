import app from "./controller/app"
import { userRouter } from "./controller/userRouter"
import { recipeRouter } from "./controller/recipeRouter"


app.use('/user', userRouter)
app.use('/recipe', recipeRouter)
