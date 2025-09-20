import fs from "node:fs";
import path from "node:path";

export function initClipsFolder() {
  const appRoot = process.cwd();

  if (!fs.existsSync(path.join(appRoot, "storage","clips"))) {
      fs.mkdirSync(path.join(appRoot, "storage", "clips"));
      console.log("Clips folder created");
      return;
  }

  console.log("Clips folder found");
}
