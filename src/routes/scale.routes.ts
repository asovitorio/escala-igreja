import {Router} from 'express';
import { scaleController } from '../controller/scaleController';

const scaleRoutes = Router();

scaleRoutes.post('/scales',scaleController.create)


export {scaleRoutes}