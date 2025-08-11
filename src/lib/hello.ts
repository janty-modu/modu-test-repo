/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to greet, defaults to "World"
 * @returns A hello world greeting string
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