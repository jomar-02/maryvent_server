import { Router } from "express";
import {
  addEventController,
  getAllEventsController,
} from "../controller/event.controller.js";

const eventsRouter = Router();

eventsRouter.get("/", getAllEventsController);
eventsRouter.post("/", addEventController);

export default eventsRouter;
