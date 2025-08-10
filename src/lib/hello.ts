/**
 * A simple hello world function that returns a greeting message
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
 * An async version of hello world with a delay
 * @param name - Optional name to include in the greeting
 * @param delay - Delay in milliseconds before returning the greeting
 * @returns Promise that resolves to a hello world greeting message
 */
export async function helloWorldAsync(name?: string, delay: number = 1000): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, delay));
  return helloWorld(name);
}