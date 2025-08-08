/**
 * A simple hello world function
 * @returns A greeting message
 */
export function helloWorld(): string {
  return "Hello, World!";
}

/**
 * A personalized hello function
 * @param name - The name to greet
 * @returns A personalized greeting message
 */
export function hello(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * A simple goodbye world function
 * @returns A farewell message
 */
export function goodbyeWorld(): string {
  return "Goodbye, World!";
}

/**
 * A personalized goodbye function
 * @param name - The name to bid farewell to
 * @returns A personalized farewell message
 */
export function goodbye(name: string): string {
  return `Goodbye, ${name}!`;
}