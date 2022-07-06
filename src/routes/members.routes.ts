import {Router} from 'express'
import { membersController } from '../controller/membersController'
import { upload } from '../uploads/multer';





const membersRoutes = Router()


membersRoutes.get('/members',membersController.index);
membersRoutes.get('/members/:id',membersController.showById);
membersRoutes.post('/members',upload.single('avatar'), membersController.create);
membersRoutes.put('/members',membersController.update);
membersRoutes.delete('/members',membersController.delete);


export  {membersRoutes}