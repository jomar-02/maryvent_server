import prisma from "../lib/prisma.js";

export const QueryListOfEvents = async (agency) => {
  try {
    const eventList = await prisma.event.findMany({});

    return eventList;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const AddEvent = async (eventData) => {
  try {
    return await prisma.event.create({
      data: eventData,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
