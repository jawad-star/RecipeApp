import express from "express";
import { ENV } from "./config/env.js";

const app = express();
const PORT = ENV.PORT || 5001;

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log("server is running123 in port :", PORT);
});
