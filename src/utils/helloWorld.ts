/**
 * A simple hello world function that returns a greeting message
 * @param name Optional name to include in the greeting
 * @returns A friendly hello world message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello World, ${name}! 🌍`;
  }
  return "Hello World! 🌍";
}

/**
 * A console-logging version of hello world
 * @param name Optional name to include in the greeting
 */
export function sayHelloWorld(name?: string): void {
  console.log(helloWorld(name));
}