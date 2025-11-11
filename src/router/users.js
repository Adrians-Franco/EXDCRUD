import express from 'express'
import ControllerUser from '../controller/users.js'
import authMiddleware from '../middleware/auth.js'
// importar controller

// objetivo da rota é disponibilizar o endpoint e jogar pro controller

const router = express.Router()
//todos eles vão começar com api/v1

router.post('/login', ControllerUser.Login)

router.get('/users', authMiddleware, ControllerUser.FindAll)// pegar todos
router.get('/user/:id', authMiddleware, ControllerUser.FindOne)// pegar um 
router.post('/user', ControllerUser.Create)// cadastrar um
router.put('/user/:id', authMiddleware, ControllerUser.Update)// alterar um 
router.delete('/user/:id', authMiddleware, ControllerUser.Delete)// deletar um

export default router