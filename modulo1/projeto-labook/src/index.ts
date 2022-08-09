/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "../src/routers/userRouter"
import { postRouter } from "../src/routers/postRouter"
import { amizadeRouter } from "./routers/AmizadeRoute"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/

/**************************** SERVICES ******************************/

/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter)
app.use('/post', postRouter )
app.use('/amizade', amizadeRouter )


/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})

/*function connection(arg0: string) {
   throw new Error("Function not implemented.")
}*/
