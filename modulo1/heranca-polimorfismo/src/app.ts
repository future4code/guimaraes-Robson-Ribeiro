import express from 'express'
import { AddressInfo }  from 'net'

const app = express()
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address =  server.address()  as AddressInfo
        console.log("Server is running");
    }else{
        (console.log("Has a erro when start the server"));
    }
})


export default app