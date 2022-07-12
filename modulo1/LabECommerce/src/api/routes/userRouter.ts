import express, { Request, Response } from 'express'
const userRouters = express.Router()


userRouters.get('/user/create', (req: Request, res: Response) => {
    res.status(200).send('Deu certo')
})

export default userRouters