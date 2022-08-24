import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./routes/user.routes";
import { membersRoutes } from "./routes/members.routes";
import { postRoutes } from "./routes/post.routes";
import { taskRoutes } from "./routes/task.routes";
import { scheduleRoutes } from "./routes/schedule.routes";
import { scaleRoutes } from "./routes/scale.routes";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
dotenv.config();
const baseUrl = process.env.END_POINT_API;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join("src", "uploads")));
app.use(`/${baseUrl}`, userRoutes);
app.use(`/${baseUrl}`, membersRoutes);
app.use(`/${baseUrl}`, postRoutes);
app.use(`/${baseUrl}`, taskRoutes);
app.use(`/${baseUrl}`, scheduleRoutes);
app.use(`/${baseUrl}`, scaleRoutes);
app.get("/", (req, res) => {
  res.send({ api: "esta api está funcionando corretamente!" });
});

export default app;
