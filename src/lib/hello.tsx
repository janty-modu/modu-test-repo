/**
 * A simple hello world function
 * @param name - Optional name to include in the greeting
 * @returns A greeting message
 */
export function helloWorld(name?: string): string {
  if (name) {
    return `Hello, ${name}! Welcome to the world!`;
  }
  return "Hello, World!";
}

/**
 * A hello world function that returns JSX for React components
 * @param name - Optional name to include in the greeting
 * @returns JSX element with the greeting
 */
export function HelloWorldComponent({ name }: { name?: string }) {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold text-blue-600">
        {helloWorld(name)}
      </h1>
    </div>
  );
}