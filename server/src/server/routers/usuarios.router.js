import { Router } from 'express'
import * as usuariosController from '../controllers/usuarios.controller.js'
import { authToken } from '../middlewares/usuarios.middleware.js'

const router = Router()

router.post('/usuarios', usuariosController.register)
router.get('/usuarios', authToken, usuariosController.findUser)
router.post('/login', usuariosController.login)

export default router

