/**
 * Returns a hello world greeting
 * @param name - Optional name to include in the greeting
 * @returns A hello world message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}