"use client";

import { useState, useEffect } from "react";
import { helloWorld, helloWorldAsync } from "@/lib/hello-world";

export default function HelloWorldDemo() {
  const [name, setName] = useState("");
  const [asyncMessage, setAsyncMessage] = useState("");

  const handleAsyncGreeting = async () => {
    const message = await helloWorldAsync(name || undefined);
    setAsyncMessage(message);
  };

  useEffect(() => {
    // Demonstrate async function on component mount
    handleAsyncGreeting();
  }, []);

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Hello World Demo
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
            Basic Function:
          </h3>
          <p className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
            {helloWorld()}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
            With Name:
          </h3>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              onClick={handleAsyncGreeting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Greet
            </button>
          </div>
          <p className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
            {name ? helloWorld(name) : helloWorld()}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
            Async Function Result:
          </h3>
          <p className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
            {asyncMessage}
          </p>
        </div>
      </div>
    </div>
  );
}