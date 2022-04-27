import {Router} from 'express'
import { postController } from '../controller/postController'

const postRoutes = Router()


postRoutes.get('/posts',postController.index)


export  {postRoutes}