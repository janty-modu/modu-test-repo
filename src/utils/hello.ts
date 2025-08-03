/**
 * Returns a friendly hello world greeting
 * @returns A hello world message string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * Returns a personalized hello greeting
 * @param name - The name to include in the greeting
 * @returns A personalized hello message string
 */
export function helloPersonalized(name: string): string {
  return `Hello, ${name}!`;
}