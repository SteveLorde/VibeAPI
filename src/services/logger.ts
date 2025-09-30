const logger = console;

export function log(message: string) {
  const time = new Date().toLocaleTimeString();

  logger.log(time + " " + message);
}

export function error(message: string) {
  const time = new Date().toLocaleTimeString();

  logger.error(time + " " + message);
}
