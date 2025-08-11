"use client";

import { useState, useEffect } from "react";
import { helloWorld, helloWorldAsync } from "@/lib/hello";

export default function HelloPage() {
  const [name, setName] = useState("");
  const [asyncGreeting, setAsyncGreeting] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsyncGreeting = async () => {
    setLoading(true);
    try {
      const greeting = await helloWorldAsync(name || undefined);
      setAsyncGreeting(greeting);
    } catch (error) {
      console.error("Error fetching greeting:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load initial async greeting on component mount
    handleAsyncGreeting();
  }, []);

  return (
    <div className="font-sans min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Hello World Demo</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Basic Hello World:</h2>
            <p className="text-lg bg-gray-100 dark:bg-gray-800 p-3 rounded">
              {helloWorld()}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Personalized Greeting:</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full p-2 border border-gray-300 rounded mb-2 dark:bg-gray-800 dark:border-gray-600"
            />
            <p className="text-lg bg-gray-100 dark:bg-gray-800 p-3 rounded">
              {helloWorld(name || undefined)}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Async Hello World:</h2>
            <button
              onClick={handleAsyncGreeting}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded mb-2 mr-2"
            >
              {loading ? "Loading..." : "Get Async Greeting"}
            </button>
            <p className="text-lg bg-gray-100 dark:bg-gray-800 p-3 rounded">
              {asyncGreeting || "Click button to load..."}
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}