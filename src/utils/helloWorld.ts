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

/**
 * Returns a cheerful goodbye world message
 * @returns A goodbye world greeting string
 */
export function goodbyeWorld(): string {
  return "Goodbye, World!";
}

/**
 * Returns a personalized goodbye message
 * @param name - The name to bid farewell to
 * @returns A personalized goodbye string
 */
export function goodbyePersonalized(name: string): string {
  return `Goodbye, ${name}!`;
}