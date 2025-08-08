/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to personalize the greeting
 * @returns A hello world greeting string
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * A hello world function that logs to console and returns the message
 * @param name - Optional name to personalize the greeting
 * @returns A hello world greeting string
 */
export function helloWorldConsole(name?: string): string {
  const message = helloWorld(name);
  console.log(message);
  return message;
}

export default helloWorld;