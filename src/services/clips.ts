import fs from "node:fs";
import path from "node:path";
import { getAppRoot } from "./config.js";

export function InitClipsFolder() {
  const appRoot = getAppRoot();

  if (!fs.existsSync(path.join(appRoot, "storage", "clips"))) {
    fs.mkdirSync(path.join(appRoot, "storage", "clips"));
    console.log("Clips folder created");
    return;
  }

  console.log("Clips folder found");
}

export function UploadClip(clipFile: any) {}
