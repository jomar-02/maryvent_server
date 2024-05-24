import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./router/auth.router.js";
import eventsRouter from "./router/event.router.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT_NUM || 3000;

app.use(cors());
app.use(express.json());

// app.use('/api/auth', verifyUser, authRouter)
app.use("/api/auth", authRouter);

app.use("/api/event", eventsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
