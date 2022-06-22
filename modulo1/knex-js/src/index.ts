require('dotenv').config();
import express, { Express, Request, Response } from "express"
import cors from 'cors'
import { AddressInfo } from "net"
import dotenv from 'dotenv'
import { 
    getActorById, 
    searchActor, 
    countActors,
    updateActor

} from "./endpoints/actor"

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())


app.get('/getActorById/:id', async (req: Request, res: Response) =>{
    try {
        const id = req.params.id 
        const result = await getActorById(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/searchActor/:name', async (req: Request, res: Response) => {
    try {
        const name: string = req.params.name 
        const result = await searchActor(name)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})


app.get('/countActors/:gender', async (req: Request, res: Response)=>{
    try {
        const gender = req.params.gender 
        let result = await countActors(gender)
        res.status(200).send(result.toString())
    } catch (error) {
        res.status(500).send(error)
    }
})


app.put('/updateActor/:id/:salary', async (req: Request, res: Response )=>{
    try {
        const salary: number = parseInt(req.params.salary)
        const id = req.params.id
        let result = await updateActor(id, salary )

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error) 
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is ruining in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})