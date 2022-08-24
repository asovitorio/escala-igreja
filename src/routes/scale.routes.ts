import {Router} from 'express';
import { scaleController } from '../controller/scaleController';

const scaleRoutes = Router();

scaleRoutes.get('/scales',scaleController.index)
scaleRoutes.get('/scales/:id',scaleController.show)
scaleRoutes.post('/scales',scaleController.create)


export {scaleRoutes}