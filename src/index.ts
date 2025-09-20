import express, { Request, Response } from "express";
import { ServicesInit } from "./services/servicesInit.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Vibe API");
});

app.listen(PORT, () => {
  console.log(`Vibe API Server running at http://localhost:${PORT}`);
});

ServicesInit();
