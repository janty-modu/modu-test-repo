/**
 * A simple hello world function
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * A React-friendly hello world function that returns JSX-ready content
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting message formatted for display
 */
export function getHelloWorldMessage(name?: string): string {
  const message = helloWorld(name);
  return `🌟 ${message} 🌟`;
}