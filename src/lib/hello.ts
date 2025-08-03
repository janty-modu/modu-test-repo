/**
 * Returns "Hello"
 * @returns A string containing "Hello"
 */
export function hello(): string {
  return "Hello";
}

/**
 * Returns "World!"
 * @returns A string containing "World!"
 */
export function world(): string {
  return "World!";
}

/**
 * Calls both hello() and world() functions and combines them
 * @returns A string containing the combined hello world message
 */
export function helloWorld(): string {
  return `${hello()}, ${world()}`;
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