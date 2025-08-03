/**
 * Utility functions for greetings
 */

/**
 * Returns a hello world message
 * @returns A hello world string
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * Returns a personalized hello message
 * @param name - The name to include in the hello message
 * @returns A personalized hello string
 */
export function helloMessage(name?: string): string {
  return name ? `Hello, ${name}!` : helloWorld();
}

/**
 * Returns a goodbye world message
 * @returns A goodbye world string
 */
export function goodbyeWorld(): string {
  return "Goodbye, World!";
}

/**
 * Returns a personalized goodbye message
 * @param name - The name to include in the goodbye message
 * @returns A personalized goodbye string
 */
export function goodbyeMessage(name?: string): string {
  return name ? `Goodbye, ${name}!` : goodbyeWorld();
}