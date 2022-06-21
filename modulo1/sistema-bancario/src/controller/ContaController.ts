import { Request, Response } from "express"
import * as ContaServices from '../Services/ContaServices'

export const all = (req: Request, res: Response )=>{
    try {
        const usersAccount = ContaServices.all()
        res.status(200).send(usersAccount)
    } catch (error) {
        res.status(500).send(`Não foi possível processar sua requisição, ${error}`)
    }
    
}

export const create = (req: Request, res: Response) =>{
    try {
        ContaServices.create(req.body)
        res.status(200).send('Create')
    } catch (error) {
        res.status(500).send(`Não foi possível processar sua requisição, ${error}`)
    }
   
}

export const balance = (req: Request, res: Response) =>{
    const { name, cpf } = req.params    

    try {
        const userFind = ContaServices.balance(name, cpf);
        res.status(200).send(userFind)
    } catch (error) {
        res.status(500).send(`Não foi possível processar sua requisição, ${error}`)
    }
    
}

export const addBalance = (req: Request, res: Response ) =>{
    const { name, cpf } = req.params
    const { saldo } = req.body
    
    try {
        const userBalance = ContaServices.addBalance(name, cpf, saldo)
        res.status(200).send(userBalance) 
    } catch (error) {
        res.status(500).send(`Não foi possível processar sua requisição,  ${error}`)
    }
}
