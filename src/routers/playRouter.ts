import { Router } from "express";
import path from "node:path";
import { getConfig } from "../services/config.js";

const playRouter = Router();

const config = getConfig();

const clipStoragePath = path.join(process.cwd(), config.clipsDir);

playRouter.get("/:clipId", (req, res) => {});
