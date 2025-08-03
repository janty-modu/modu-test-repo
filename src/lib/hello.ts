/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting (defaults to "World")
 * @returns A greeting message string
 */
export function helloWorld(name: string = "World"): string {
  return `Hello, ${name}!`;
}

/**
 * A simple hello world function that logs a greeting to console
 * @param name - Optional name to include in the greeting (defaults to "World")
 */
export function sayHello(name: string = "World"): void {
  console.log(`Hello, ${name}!`);
}

/**
 * An async hello world function for demonstration purposes
 * @param name - Optional name to include in the greeting (defaults to "World")
 * @returns A promise that resolves to a greeting message
 */
export async function helloWorldAsync(name: string = "World"): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 100);
  });
}