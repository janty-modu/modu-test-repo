"use client";

import { useState, useEffect } from "react";
import { helloWorld, helloWorldAsync } from "@/lib/hello-world";

export default function HelloWorldPage() {
  const [name, setName] = useState("");
  const [asyncGreeting, setAsyncGreeting] = useState("");

  useEffect(() => {
    // Demonstrate async version
    helloWorldAsync(name || undefined).then(setAsyncGreeting);
  }, [name]);

  const syncGreeting = helloWorld(name || undefined);

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold text-center">Hello World Function Demo</h1>
        
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name (optional)"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Sync Greeting:</h2>
            <p className="font-mono text-green-600 dark:text-green-400">{syncGreeting}</p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Async Greeting:</h2>
            <p className="font-mono text-blue-600 dark:text-blue-400">{asyncGreeting}</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-lg">
          <p>This page demonstrates the hello world functions:</p>
          <ul className="mt-2 space-y-1">
            <li>• <code className="bg-black/[.05] dark:bg-white/[.06] px-1 rounded">helloWorld(name?)</code> - Synchronous function</li>
            <li>• <code className="bg-black/[.05] dark:bg-white/[.06] px-1 rounded">helloWorldAsync(name?)</code> - Asynchronous function</li>
          </ul>
        </div>
      </main>
    </div>
  );
}