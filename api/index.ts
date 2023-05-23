import { router as diagnostics } from "./routes/diagnostics";
import express from "express";

const app = express();

app.get("/api", (_req, res) => {
  res.send("Hello world!");
});

app.use("/api/diagnostics", diagnostics);

export default app;
