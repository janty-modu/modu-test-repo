/**
 * A simple hello world function that returns a friendly greeting
 * @param name - Optional name to include in the greeting
 * @returns A hello world message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world! 🌍`;
  }
  return "Hello, World! 🌍";
}

/**
 * A hello world function that logs to console
 * @param name - Optional name to include in the greeting
 */
export function logHelloWorld(name?: string): void {
  console.log(helloWorld(name));
}