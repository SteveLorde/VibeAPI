import { InitClipsFolder } from "./clips.js";
import { initConfig } from "./config.js";

export function ServicesInit() {
  InitClipsFolder();
  initConfig();
}
