/**
 * A combined greeting function that can say hello or goodbye
 * @param type - The type of greeting: 'hello' or 'goodbye'
 * @param name - Optional name to include in the greeting
 * @returns A greeting message based on the type specified
 */
export function greetingWorld(type: 'hello' | 'goodbye', name?: string): string {
  if (type === 'hello') {
    if (name) {
      return `Hello, ${name}! Welcome to the world!`;
    }
    return "Hello, World!";
  } else {
    if (name) {
      return `Goodbye, ${name}! Thanks for visiting the world!`;
    }
    return "Goodbye, World!";
  }
}