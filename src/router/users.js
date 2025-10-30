import express from 'express'
import ControllerUser from '../controller/users.js'
// importar controller

// objetivo da rota é disponibilizar o endpoint e jogar pro controller

const router = express.Router()
//todos eles vão começar com api/v1

router.get('/users' , ControllerUser.FindAll)// pegar todos
 router.get('/user/:id', ControllerUser.FindOne)// pegar um 
 router.post('/user',ControllerUser.Create)// cadastrar um
 router.put('/user/:id',ControllerUser.Update)// alterar um 
 router.delete('/user/:id',ControllerUser.Delete)// deletar um

export default router