import { initClipsFolder } from "./initClipsFolder.js";
import { initConfig } from "./config.js";

export function ServicesInit() {
  initClipsFolder();
  initConfig();
}
