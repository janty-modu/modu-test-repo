/**
 * Returns a hello world greeting message
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting string
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * Returns a hello world greeting as a React-friendly JSX string
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting string formatted for display
 */
export function helloWorldMessage(name?: string): string {
  if (name) {
    return `👋 Hello, ${name}! Welcome to the world! 🌍`;
  }
  return "👋 Hello, World! 🌍";
}