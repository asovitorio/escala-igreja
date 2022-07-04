import {Router} from 'express'
import { membersController } from '../controller/membersController'

const membersRoutes = Router()


membersRoutes.get('/members',membersController.index);
membersRoutes.get('/members/:id',membersController.showById);
membersRoutes.post('/members',membersController.create);
membersRoutes.put('/members',membersController.update);
membersRoutes.delete('/members',membersController.delete);


export  {membersRoutes}