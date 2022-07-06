import {Router} from 'express'
import { userController } from '../controller/userController'

const userRoutes = Router()


userRoutes.get('/users',userController.index)
userRoutes.get('/users/:id',userController.show)
userRoutes.post('/users',userController.create)
userRoutes.put('/users',userController.update)
userRoutes.delete('/users',userController.delete)


export  {userRoutes}