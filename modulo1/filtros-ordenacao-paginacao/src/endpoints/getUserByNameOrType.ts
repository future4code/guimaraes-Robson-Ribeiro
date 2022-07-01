import { Request, Response } from 'express'
import { connection } from '../data/connection'


export async function getUserByNameOrType (req: Request, res: Response ): Promise<void>{
    const name = req.query.name as string
    const type = req.query.type as string
    let result = [{}]

    try {
        if(name && type){
            result = await connection("aula48_exercicio")
            .select('*')
            .where({ name: name }).andWhere({ type: type})
            .orderBy([ { column: 'name', order: 'asc'}, { column: 'type', order: 'asc'}])
            res.status(200).send(result)
        }   
        
        if(name || type){
            result = await connection("aula48_exercicio")
            .select('*')
            .where({name: name}).orWhere({type: type })
            .orderBy([ { column: 'name', order: 'asc'}, { column: 'type', order: 'asc'}])
            res.status(200).send(result)
        }

        if(!name && !type){
            result = await connection("aula48_exercicio")
            .select('*')
            .orderBy('email', 'asc')
            res.status(200).send(result)
        }
    } catch (error) {
        res.status(500).send(`Ocorreu um error: ${error}`)
    }
}