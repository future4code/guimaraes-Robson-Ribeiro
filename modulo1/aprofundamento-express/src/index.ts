
import express, { Request, Response } from 'express'

import { AddressInfo } from 'net'
import cors from 'cors'
import { Users,  UserTypes } from './data'

const app = express()

app.use(express.json())
app.use(cors({ origin: "*" , credentials: true }))


app.get('/ping', (req: Request, res: Response )=>{
    res.status(200).send({ message: 'Pong! 🏓'})
})

app.get('/todos', (req: Request, res: Response)=>{
    let userTodo = Users.filter( u => u.completed === false )
    res.status(200).send(userTodo)
})

app.post('/createTudo', (req: Request, res: Response )=>{
    const { userId, title, completed } = req.body

    const newUser :UserTypes ={
        userId, 
        id: Math.random(), 
        title, 
        completed
    }

    Users.push(newUser)
    
    res.status(200).send(Users)

})

app.put('/editTodo/:id', (req: Request, res: Response)=>{
    const { id } = req.params
    
    Users.forEach((u)=>{
        if(u.id === Number(id)){
            u.completed === !u.completed
        }
    })

})

app.delete('/delete/:id', (req: Request, res: Response)=>{
    const { id } = req.params
    const userFindIndex = Users.findIndex((u)=> u.id === Number(id) )
    
    if(userFindIndex >= 0){
        Users.splice(userFindIndex, 1)
        res.status(200).send(Users)
    }
})

app.get('/getTodoById/:id', (req: Request, res: Response )=>{
    const { id } = req.params
    const newTudo = Users.filter((u)=>{ u.userId === Number(id) })
    res.status(200).send(newTudo)
})

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhos:${address.port}`)
    }else{
        console.log(`Failure upon starting server. `)
    }
})

