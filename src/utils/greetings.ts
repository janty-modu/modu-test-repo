/**
 * Utility functions for greetings
 */

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