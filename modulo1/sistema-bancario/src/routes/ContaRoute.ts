import express from "express";
const routes = express.Router()
import * as Controller from '../controller/ContaController'

routes.get('/all', Controller.all)
routes.post('/create', Controller.create)
routes.get('/balance/:name/:cpf', Controller.balance)
routes.post('/addBalance/:name/:cpf', Controller.addBalance)


export default routes