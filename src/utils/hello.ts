/**
 * A simple hello world function
 * @param name - Optional name to greet, defaults to "World"
 * @returns A greeting message
 */
export function helloWorld(name: string = "World"): string {
  return `Hello, ${name}!`;
}

/**
 * A hello world function that logs to console
 * @param name - Optional name to greet, defaults to "World"
 */
export function sayHello(name: string = "World"): void {
  console.log(helloWorld(name));
}