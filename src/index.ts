import express, { Request, Response } from "express";
import { ServicesInit } from "./services/servicesInit.js";
import { Config } from "./data/config.js";

const app = express();

const config: Config = ServicesInit();

// Middleware for JSON parsing
app.use(express.json());

// Middleware for serving static files
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Vibe API");
});

app.listen(config.port, () => {
  console.log(`Vibe API Server running at http://localhost:${config.port}`);
});
