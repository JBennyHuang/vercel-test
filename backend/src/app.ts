import api from "./api";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", api);

export default app;
