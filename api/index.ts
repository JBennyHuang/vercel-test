import express from "express";
import { healthRouter } from "./routes/diagnostics";

const app = express();

app.use("/health", healthRouter);

app.get("/api", (_req, res) => {
  res.send("Hello world!");
});

export default app;
