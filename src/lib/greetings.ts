/**
 * Greeting utilities for the application
 */

/**
 * Returns a friendly hello world greeting
 * @returns A hello world message
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * Returns a warm goodbye message
 * @param name Optional name to personalize the goodbye
 * @returns A goodbye message
 */
export function goodbye(name?: string): string {
  if (name) {
    return `Goodbye, ${name}! Until we meet again! ✨`;
  }
  return "Goodbye! Until we meet again! ✨";
}

/**
 * Returns a complete greeting cycle
 * @param name Optional name to personalize the messages
 * @returns Object with both hello and goodbye messages
 */
export function greetingCycle(name?: string) {
  return {
    hello: name ? `Hello, ${name}! Welcome! ✨` : helloWorld(),
    goodbye: goodbye(name)
  };
}