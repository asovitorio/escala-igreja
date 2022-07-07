import {Router} from 'express'
import { postController } from '../controller/postController'

const postRoutes = Router()


postRoutes.get('/posts',postController.index)
postRoutes.get('/posts/:id',postController.show)
postRoutes.post('/posts',postController.create)


export  {postRoutes}