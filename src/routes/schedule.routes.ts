import { Router } from "express";
import { scheduleController } from "../controller/schedule.Controller";

const scheduleRoutes = Router();



scheduleRoutes.get('/schedules',scheduleController.index);
scheduleRoutes.get('/schedules/:id',scheduleController.show);
scheduleRoutes.post('/schedules',scheduleController.create);


export {scheduleRoutes}
