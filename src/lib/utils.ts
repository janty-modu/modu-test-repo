/**
 * A simple hello world function that returns a greeting message
 * @returns A hello world greeting string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello world function that greets a specific person
 * @param name - The name of the person to greet
 * @returns A personalized greeting string
 */
export function helloWorldPersonalized(name: string): string {
  return `Hello, ${name}!`;
}