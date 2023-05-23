import { router as diagnostics } from "./routes/diagnostics";
import express from "express";

const app = express();

app.use("/api/diagnostics", diagnostics);

app.get("/api", (_req, res) => {
  res.send("Hello world!");
});

export default app;
