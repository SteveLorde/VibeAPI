import fs from "node:fs";
import path from "node:path";
import { Config } from "../data/config.js";

const appRoot = process.cwd();

let config: Config = {} as Config;

export function initConfig() {
  if (!fs.existsSync(path.join(appRoot, "config.json"))) {
    fs.writeFileSync(
      path.join(appRoot, "config.json"),
      JSON.stringify({
        databaseDir: "storage/database",
        clipsDir: "storage/clips",
        port: 3000,
        host: "localhost",
      }),
    );
  }
}

export function getConfig() {
  if (!fs.existsSync(path.join(appRoot, "config.json"))) {
    throw new Error("No config file found");
  }

  const configVars = fs.readFileSync(
    path.join(appRoot, "config.json"),
    "utf-8",
  );

  config = JSON.parse(configVars) as Config;

  return config;
}
