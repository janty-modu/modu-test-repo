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

/**
 * Returns a goodbye world farewell
 * @returns A string containing the goodbye world message
 */
export function goodbyeWorld(): string {
  return "Goodbye, World!";
}

/**
 * Returns a personalized goodbye farewell
 * @param name - The name to say goodbye to
 * @returns A string containing the personalized farewell
 */
export function goodbyeName(name: string): string {
  return `Goodbye, ${name}!`;
}