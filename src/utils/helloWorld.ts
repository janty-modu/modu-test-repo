/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to personalize the greeting
 * @returns A greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * Logs a hello world message to the console
 * @param name - Optional name to personalize the greeting
 */
export function logHelloWorld(name?: string): void {
  console.log(helloWorld(name));
}