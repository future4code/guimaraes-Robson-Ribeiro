import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const port = 3003

app.listen(port, ()=>{
    console.log(`My server is running ${port}`)
})

export default app