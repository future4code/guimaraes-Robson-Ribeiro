import { Request, Response } from "express"
import * as ContaServices from '../Services/ContaServices'

export const all = (req: Request, res: Response )=>{
    const usersAccount = ContaServices.all()
    res.status(200).send(usersAccount)
}

export const create = (req: Request, res: Response) =>{
    ContaServices.create(req.body)
    res.status(200).send('Create')
}

export const balance = (req: Request, res: Response) =>{
    const { name, cpf } = req.params    
    const userFind = ContaServices.balance(name, cpf);
    res.status(200).send(userFind)
}

export const addBalance = (req: Request, res: Response ) =>{
    const { name, cpf } = req.params
    const { saldo } = req.body
    console.log("saldo --", saldo)
    const userBalance = ContaServices.addBalance(name, cpf, saldo)
    res.status(200).send(userBalance)
}
