import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";

import { registerRouter } from "./routers/register-router";
import { questionRouter } from "./routers/question-router";

loadEnv();

import { handleApplicationErrors } from "./middlewares/error-handling-middleware";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.status(200).send("Okay!"))
  .use("/register", registerRouter)
  .use("/question", questionRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
