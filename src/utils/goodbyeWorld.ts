/**
 * A simple goodbye world function that returns a farewell message
 * @param name - Optional name to include in the farewell
 * @returns A goodbye world farewell message
 */
export function goodbyeWorld(name?: string): string {
  if (name) {
    return `Goodbye, ${name}! Thanks for visiting the world!`;
  }
  return "Goodbye, World!";
}