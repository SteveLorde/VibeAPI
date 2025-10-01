import fs from "node:fs";
import path from "node:path";
import { getAppRoot } from "./config.js";

export function InitClipsFolder() {
  const appRoot = getAppRoot();

  const clipsDir = path.join(appRoot, "storage", "clips");

  if (!fs.existsSync(clipsDir)) {
    fs.mkdirSync(clipsDir, { recursive: true });
    console.log("Clips folder created");
    return;
  }

  console.log("Clips folder found");
}

export function UploadClip(clipFile: any) {}
