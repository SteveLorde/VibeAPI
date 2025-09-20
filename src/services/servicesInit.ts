import { initClipsFolder } from "./initClipsFolder.js";
import { getConfig, initConfig } from "./config.js";

export function ServicesInit() {
  initClipsFolder();
  initConfig();

  return getConfig();
}
