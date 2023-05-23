import * as express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.get("/health", (_req, res) => {
  res.send("Hello world!");
});

export default app;
