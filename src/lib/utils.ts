/**
 * A simple hello world function that returns a greeting message
 * @returns A friendly greeting string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello function that greets a specific person
 * @param name - The name of the person to greet
 * @returns A personalized greeting string
 */
export function hello(name: string): string {
  return `Hello, ${name}!`;
}