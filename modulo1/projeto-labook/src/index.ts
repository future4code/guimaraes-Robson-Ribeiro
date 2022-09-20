/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "../src/routers/userRouter"
import { postRouter } from "../src/routers/postRouter"
import { amizadeRouter } from "./routers/AmizadeRoute"
import { AddressInfo } from "net";

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

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://${address.address}:${address.port}`);
   } else {
       console.error(`Failure upon starting server.`);
   }
});