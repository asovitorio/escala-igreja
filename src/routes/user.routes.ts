import {Router} from 'express'
import { userController } from '../controller/userController'

const userRoutes = Router()


userRoutes.get('/users',userController.index)


export  {userRoutes}