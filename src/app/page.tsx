"use client";

import Image from "next/image";
import { useState } from "react";
import { helloWorld, goodbyeWorld, greetingWorld, addNumbers } from "@/utils";

interface CodeBlockProps {
  code: string;
  title: string;
}

function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{title}</h4>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-200">{code}</code>
      </pre>
    </div>
  );
}

interface FunctionCardProps {
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}

function FunctionCard({ title, description, color, children }: FunctionCardProps) {
  return (
    <div className={`mb-8 p-6 ${color} rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm`}>
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      {children}
    </div>
  );
}

export default function Home() {
  const [helloName, setHelloName] = useState("");
  const [goodbyeName, setGoodbyeName] = useState("");
  const [greetingName, setGreetingName] = useState("");
  const [greetingType, setGreetingType] = useState<'hello' | 'goodbye'>('hello');
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <Image
            className="mx-auto mb-6 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🚀 Utility Functions Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interactive demonstrations of our TypeScript utility functions with live examples and code snippets.
          </p>
        </header>

        {/* Hello World Function */}
        <FunctionCard
          title="👋 Hello World Function"
          description="A simple greeting function that accepts an optional name parameter"
          color="bg-blue-50 dark:bg-blue-950/50"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Interactive Demo</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter your name (optional)"
                  value={helloName}
                  onChange={(e) => setHelloName(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <div className="p-3 bg-white dark:bg-gray-800 rounded-md border">
                  <strong>Result:</strong> {helloWorld(helloName || undefined)}
                </div>
              </div>
            </div>
            <div>
              <CodeBlock
                title="Usage Examples"
                code={`import { helloWorld } from '@/utils';

// Basic usage
helloWorld(); // "Hello, World!"

// With name parameter
helloWorld("Developer"); // "Hello, Developer! Welcome to the world!"`}
              />
            </div>
          </div>
        </FunctionCard>

        {/* Goodbye World Function */}
        <FunctionCard
          title="👋 Goodbye World Function"
          description="A farewell function that accepts an optional name parameter"
          color="bg-green-50 dark:bg-green-950/50"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Interactive Demo</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter your name (optional)"
                  value={goodbyeName}
                  onChange={(e) => setGoodbyeName(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <div className="p-3 bg-white dark:bg-gray-800 rounded-md border">
                  <strong>Result:</strong> {goodbyeWorld(goodbyeName || undefined)}
                </div>
              </div>
            </div>
            <div>
              <CodeBlock
                title="Usage Examples"
                code={`import { goodbyeWorld } from '@/utils';

// Basic usage
goodbyeWorld(); // "Goodbye, World!"

// With name parameter
goodbyeWorld("Developer"); // "Goodbye, Developer! Thanks for visiting the world!"`}
              />
            </div>
          </div>
        </FunctionCard>

        {/* Combined Greeting Function */}
        <FunctionCard
          title="🎉 Combined Greeting Function"
          description="A versatile greeting function that can say hello or goodbye with type safety"
          color="bg-purple-50 dark:bg-purple-950/50"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Interactive Demo</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setGreetingType('hello')}
                    className={`px-4 py-2 rounded-md ${greetingType === 'hello' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  >
                    Hello
                  </button>
                  <button
                    onClick={() => setGreetingType('goodbye')}
                    className={`px-4 py-2 rounded-md ${greetingType === 'goodbye' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  >
                    Goodbye
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name (optional)"
                  value={greetingName}
                  onChange={(e) => setGreetingName(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <div className="p-3 bg-white dark:bg-gray-800 rounded-md border">
                  <strong>Result:</strong> {greetingWorld(greetingType, greetingName || undefined)}
                </div>
              </div>
            </div>
            <div>
              <CodeBlock
                title="Usage Examples"
                code={`import { greetingWorld } from '@/utils';

// Hello greetings
greetingWorld('hello'); // "Hello, World!"
greetingWorld('hello', 'Developer'); // "Hello, Developer! Welcome to the world!"

// Goodbye greetings
greetingWorld('goodbye'); // "Goodbye, World!"
greetingWorld('goodbye', 'Developer'); // "Goodbye, Developer! Thanks for visiting the world!"`}
              />
            </div>
          </div>
        </FunctionCard>

        {/* Add Numbers Function */}
        <FunctionCard
          title="🔢 Add Numbers Function"
          description="A mathematical utility function that adds two numbers together with type safety"
          color="bg-orange-50 dark:bg-orange-950/50"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Interactive Demo</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="First number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                  <input
                    type="number"
                    placeholder="Second number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded-md border">
                  <strong>Result:</strong> {num1} + {num2} = {addNumbers(num1, num2)}
                </div>
              </div>
            </div>
            <div>
              <CodeBlock
                title="Usage Examples"
                code={`import { addNumbers } from '@/utils';

// Basic addition
addNumbers(5, 3); // 8
addNumbers(10, 25); // 35
addNumbers(100, 200); // 300

// Works with decimals too
addNumbers(1.5, 2.7); // 4.2`}
              />
            </div>
          </div>
        </FunctionCard>

        {/* Summary Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">📋 Function Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Available Functions</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">helloWorld(name?)</code> - Basic greeting function</li>
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">goodbyeWorld(name?)</code> - Farewell function</li>
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">greetingWorld(type, name?)</code> - Combined greeting/farewell</li>
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">addNumbers(a, b)</code> - Mathematical addition</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Full TypeScript support with type safety</li>
                <li>• Comprehensive JSDoc documentation</li>
                <li>• Clean barrel exports for easy imports</li>
                <li>• Interactive demonstrations with live examples</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-md">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Import All Functions</h4>
            <code className="text-sm text-gray-600 dark:text-gray-400">
              import &#123; helloWorld, goodbyeWorld, greetingWorld, addNumbers &#125; from &apos;@/utils&apos;;
            </code>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🚀 Get Started</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Try out these functions in your own project or continue building on this foundation.</p>
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}  
      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </div>
  );
}
