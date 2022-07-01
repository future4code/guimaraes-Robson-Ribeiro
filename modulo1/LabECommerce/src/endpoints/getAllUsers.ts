import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { user } from '../types'

export async function getAllUsers( req: Request, res: Response ): Promise<void> {
    
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send(`Ocorreu um erro: ${error}`)
    }
}