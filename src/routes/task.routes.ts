import {Router} from 'express'
import { taskController } from '../controller/taskController'

const taskRoutes = Router()


taskRoutes.get('/tasks',taskController.index);
taskRoutes.get('/tasks/:id',taskController.show);
taskRoutes.post('/tasks',taskController.create);
taskRoutes.put('/tasks',taskController.update);
taskRoutes.delete('/tasks',taskController.delete);
taskRoutes.delete('/tasks/:id',taskController.delete);


export  {taskRoutes}