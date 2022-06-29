import { Request, Response } from 'express'
import { connection } from '../data/connection'

export async function getUserByType (req: Request, res: Response ): Promise<void>{
    try {
        console.log(`meu parametro é ${req.query.type}`)
        const type = req.query.type as string
        const result = await connection("aula48_exercicio")
        .select('*')
        .where('type', type)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(`Ocorreu um erro: ${error}`)
    }
 }