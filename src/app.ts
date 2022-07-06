import express from 'express';
import {userRoutes } from './routes/user.routes';
import dotenv from 'dotenv';
import { membersRoutes } from './routes/members.routes';
import { postRoutes } from './routes/post.routes';
import { taskRoutes } from './routes/task.routes';
import bodyParser from "body-parser"
import path from 'path';
dotenv.config();

const app = express();
const urlApi = process.env.END_POINT_API;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join('src','uploads')))
app.use(`/${urlApi}`,userRoutes)
app.use(`/${urlApi}`,membersRoutes)
app.use(`/${urlApi}`,postRoutes)
app.use(`/${urlApi}`,taskRoutes)
app.get('/',(req,res) =>{
    res.send({api:'esta api está funcionando corretamente!'})
})
console.log(path.join('src','uploads'));


export default app