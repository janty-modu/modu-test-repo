/**
 * A simple hello world function that returns a greeting message
 * @returns {string} A hello world greeting message
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello world function that greets a specific person
 * @param {string} name - The name of the person to greet
 * @returns {string} A personalized greeting message
 */
export function helloWorldPersonalized(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Default export for the basic hello world function
 */
export default helloWorld;