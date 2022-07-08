import { Router } from "express";
import { scheduleController } from "../controller/schedule.Controller";

const scheduleRoutes = Router();



scheduleRoutes.get('/schedules',scheduleController.index);
scheduleRoutes.post('/schedules',scheduleController.create);


export {scheduleRoutes}
