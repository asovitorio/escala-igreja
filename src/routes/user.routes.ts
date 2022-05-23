import {Router} from 'express'
import { userController } from '../controller/userController'

const userRoutes = Router()


userRoutes.get('/users',userController.index)
userRoutes.post('/users',userController.create)


export  {userRoutes}