import fs from "node:fs";
import path from "node:path";
import { getAppRoot } from "./config.js";
import { log } from "./logger.js";
import { seedData } from "../data/seed.js";

export function InitClipsFolder() {
  const appRoot = getAppRoot();

  const clipsDir = path.join(appRoot, "storage", "clips");

  if (!fs.existsSync(clipsDir)) {
    fs.mkdirSync(clipsDir, { recursive: true });

    for (let i = 0; i < seedData.length; i++) {
      const clip = seedData[i];
      if (clip) {
        fs.mkdirSync(path.join(clipsDir, clip.id), { recursive: true });
      } else {
        return;
      }
    }

    return;
  }

  log("Clips folder found");
}

export function SaveClip(clipFile: any) {}
