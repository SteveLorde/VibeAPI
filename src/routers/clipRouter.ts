import { Router } from "express";
import path from "node:path";
import { getAppRoot, getConfig } from "../services/config.js";
import fs from "node:fs";
import { log } from "../services/logger.js";

const clipRouter = Router();

const appRoot = getAppRoot();
const config = getConfig();

const clipStoragePath = path.join(appRoot, config.clipsDir);

clipRouter.get("/explore", (req, res) => {});

clipRouter.get("/:clipId", (req, res) => {
  const { clipId } = req.params;

  const clipPath = path.join(appRoot, clipStoragePath, clipId, "master.m3u8");

  if (!fs.existsSync(clipPath)) {
    res.status(404).send("Clip not found");
    return;
  }

  res.sendFile(clipPath);

  log(`Served Clip: {clipId}`);
});
