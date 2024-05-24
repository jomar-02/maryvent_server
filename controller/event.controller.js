import { AddEvent, QueryListOfEvents } from "../services/event.services.js";

export const getAllEventsController = async (req, res) => {
  try {
    const events = await QueryListOfEvents();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const addEventController = async (req, res) => {
  try {
    const eventData = req.body;
    console.log(eventData);

    const newEvent = await AddEvent(eventData);
    return res.status(201).json(newEvent);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
