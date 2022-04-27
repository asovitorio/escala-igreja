import {Router} from 'express'
import { membersController } from '../controller/membersController'

const membersRoutes = Router()


membersRoutes.get('/members',membersController.index)
membersRoutes.get('/members/:id',membersController.showById)
membersRoutes.post('/members',membersController.create)


export  {membersRoutes}