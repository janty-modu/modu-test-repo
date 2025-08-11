/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting
 * @returns A greeting string
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * An async version of the hello world function
 * @param name - Optional name to include in the greeting
 * @returns A promise that resolves to a greeting string
 */
export async function helloWorldAsync(name?: string): Promise<string> {
  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return helloWorld(name);
}