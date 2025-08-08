/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting
 * @returns A hello world greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world! 🌍`;
  }
  return "Hello, World! 🌍";
}

/**
 * An async version of hello world that simulates a delayed response
 * @param name - Optional name to include in the greeting
 * @param delay - Delay in milliseconds (default: 100ms)
 * @returns A promise that resolves to a hello world greeting message
 */
export async function helloWorldAsync(name?: string, delay: number = 100): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, delay));
  return helloWorld(name);
}

/**
 * A simple goodbye world function that returns a farewell message
 * @param name - Optional name to include in the goodbye
 * @returns A goodbye world farewell message
 */
export function goodbyeWorld(name?: string): string {
  if (name) {
    return `Goodbye, ${name}! Thanks for visiting our world! 👋`;
  }
  return "Goodbye, World! 👋";
}

/**
 * An async version of goodbye world that simulates a delayed response
 * @param name - Optional name to include in the goodbye
 * @param delay - Delay in milliseconds (default: 100ms)
 * @returns A promise that resolves to a goodbye world farewell message
 */
export async function goodbyeWorldAsync(name?: string, delay: number = 100): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, delay));
  return goodbyeWorld(name);
}

export default helloWorld;