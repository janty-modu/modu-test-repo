/**
 * A simple hello world function that returns a greeting message
 * @returns A hello world greeting string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello world function that accepts a name parameter
 * @param name - The name to include in the greeting
 * @returns A personalized greeting string
 */
export function helloWorldPersonalized(name: string = "World"): string {
  return `Hello, ${name}!`;
}