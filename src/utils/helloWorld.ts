/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}