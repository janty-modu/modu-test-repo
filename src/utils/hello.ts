/**
 * A simple hello world function
 * @returns A greeting message
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello function
 * @param name - The name to greet
 * @returns A personalized greeting message
 */
export function hello(name: string): string {
  return `Hello, ${name}!`;
}