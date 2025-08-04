/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world! 🌟`;
  }
  return "Hello, World! 🌟";
}

/**
 * An async version of hello world for demonstration
 * @param name - Optional name to include in the greeting
 * @returns A promise that resolves to a hello world greeting message
 */
export async function helloWorldAsync(name?: string): Promise<string> {
  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 10));
  
  if (name) {
    return `Hello, ${name}! Welcome to the async world! ✨`;
  }
  return "Hello, Async World! ✨";
}