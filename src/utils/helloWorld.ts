/**
 * Returns a cheerful hello world message
 * @returns A hello world greeting string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * Returns a personalized hello message
 * @param name - The name to greet
 * @returns A personalized greeting string
 */
export function helloPersonalized(name: string): string {
  return `Hello, ${name}!`;
}