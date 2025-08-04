/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to personalize the greeting
 * @returns A hello world greeting string
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world! 🌍`;
  }
  return "Hello, World! 🌍";
}

/**
 * A hello world function that logs to console
 * @param name - Optional name to personalize the greeting
 */
export function sayHelloWorld(name?: string): void {
  console.log(helloWorld(name));
}