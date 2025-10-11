import { Router } from "express";
import path from "node:path";
import { getAppRoot, getConfig } from "../services/config.js";
import fs from "node:fs";
import { log } from "../services/logger.js";
import { ClipInfo } from "../data/clipInfo.js";
import { seedData } from "../data/seed.js";

const clipRouter = Router();

const appRoot = getAppRoot();
const config = getConfig();

const clipStoragePath = path.join(appRoot, config.clipsDir);

clipRouter.get("/home", (req, res) => {
  const clips: ClipInfo[] = seedData;
});

clipRouter.get("/:clipId", (req, res) => {
  const { clipId } = req.params;

  log(`Served Clip Info: ${clipId}`);
});

clipRouter.get("/:clipId/thumbnail", (req, res) => {
  const { clipId } = req.params;

  const clipThumbnailPath = path.join(
    appRoot,
    clipStoragePath,
    clipId,
    "thumbnail.jpg",
  );

  if (!fs.existsSync(clipThumbnailPath)) {
    res.status(404).send("Clip thumbnail not found");
    return;
  }

  res.sendFile(clipThumbnailPath);
});

clipRouter.get("/:clipId/master", (req, res) => {
  const { clipId } = req.params;

  const clipMasterPath = path.join(
    appRoot,
    clipStoragePath,
    clipId,
    "master.m3u8",
  );

  if (!fs.existsSync(clipMasterPath)) {
    res.status(404).send("Clip not found");
    return;
  }

  res.sendFile(clipMasterPath);

  log(`Served Clip: ${clipId}`);
});
