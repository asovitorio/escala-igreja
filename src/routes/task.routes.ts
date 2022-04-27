import {Router} from 'express'
import { taskController } from '../controller/taskController'

const taskRoutes = Router()


taskRoutes.get('/tasks',taskController.index)


export  {taskRoutes}