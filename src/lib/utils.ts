/**
 * Utility functions for the application
 */

/**
 * A simple hello world function that returns a greeting message
 * @returns A friendly hello world message
 */
export function helloWorld(): string {
  return "Hello, World! 🌍";
}

/**
 * A personalized hello function that greets a specific person
 * @param name - The name of the person to greet
 * @returns A personalized greeting message
 */
export function helloUser(name: string): string {
  return `Hello, ${name}! Welcome to our amazing Next.js app! ✨`;
}