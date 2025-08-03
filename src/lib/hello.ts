/**
 * Returns a hello world greeting
 * @returns A string containing the hello world message
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * Returns a personalized hello greeting
 * @param name - The name to greet
 * @returns A string containing the personalized greeting
 */
export function helloName(name: string): string {
  return `Hello, ${name}!`;
}