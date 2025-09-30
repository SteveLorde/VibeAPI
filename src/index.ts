import express, { Request, Response } from "express";
import { ServicesInit } from "./services/servicesInit.js";
import { getConfig } from "./services/config.js";
import { log } from "./services/logger.js";

const app = express();

ServicesInit();

const config = getConfig();

// Middleware for JSON parsing
app.use(express.json());

// Middleware for serving static files
app.use(express.static("public"));

app.use((req, res, next) => {
  log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Vibe API");
});

app.listen(config.port, () => {
  log(`Vibe API Server running at http://localhost:${config.port}`);
});
