import express from 'express';
import {userRoutes } from './routes/user.routes';
import dotenv from 'dotenv';
import { membersRoutes } from './routes/members.routes';
import { postRoutes } from './routes/post.routes';
import { taskRoutes } from './routes/task.routes';
import bodyParser from "body-parser"
import path from 'path';
import { scheduleRoutes } from './routes/schedule.routes';
import { scaleRoutes } from './routes/scale.routes';
import cors from 'cors';
dotenv.config();
const baseUrl = process.env.END_POINT_API;

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join('src','uploads')))
app.use(`/${baseUrl}`,userRoutes)
app.use(`/${baseUrl}`,membersRoutes)
app.use(`/${baseUrl}`,postRoutes)
app.use(`/${baseUrl}`,taskRoutes)
app.use(`/${baseUrl}`,scheduleRoutes)
app.use(`/${baseUrl}`,scaleRoutes)
app.get('/',(req,res) =>{
    res.send({api:'esta api está funcionando corretamente!'})
})



export default app