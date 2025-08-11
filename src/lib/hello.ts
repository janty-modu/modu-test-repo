/**
 * Simple hello world function that returns a greeting message
 * @param name Optional name to personalize the greeting
 * @returns A hello world greeting string
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * Async version of hello world function (useful for API calls or other async operations)
 * @param name Optional name to personalize the greeting
 * @returns Promise resolving to a hello world greeting string
 */
export async function helloWorldAsync(name?: string): Promise<string> {
  // Simulate some async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(helloWorld(name));
    }, 100);
  });
}