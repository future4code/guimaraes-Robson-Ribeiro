import express, { Request, Response } from "express";

import { AddressInfo } from 'net'
import { Produto } from './data'

const app = express();

app.use(express.json())


app.get('/test', (req: Request, res: Response ) =>{
    res.status(200).send(`Dona Alice é Linda`)
})

app.post('/produto/create', (req: Request, res: Response)=>{
    const { name, price } = req.body

    Produto.push({
        id: Math.random().toString(),
        name: name,
        price: 0
    })

    res.status(200).send({ message: 'Produto criado com sucesso', doc: Produto }
    )
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
})