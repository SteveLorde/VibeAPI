export function log(message: string) {
  const time = new Date().toLocaleTimeString();

  console.log(`${time} ${message}`);
}

export function error(message: string) {
  const time = new Date().toLocaleTimeString();

  console.error(`${time} ${message}`);
}
