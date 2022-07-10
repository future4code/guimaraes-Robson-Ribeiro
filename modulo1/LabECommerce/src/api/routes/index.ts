import express from 'express'
import userRouters from './userRouter'

const app = express()
const versionAPI = 'v1'

const router = () => {
    app.use(`/${versionAPI}`, userRouters)
}

export default app

