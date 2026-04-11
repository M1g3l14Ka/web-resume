'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Bug, Terminal } from "lucide-react";

const funnyErrors = [
  { code: "404", title: "Not Found", message: "I tried to fetch this page, but it returned undefined. Looks like I'm not a FullStack today." },
  { code: "500", title: "Server Error", message: "console.log('It works on my machine!') ...but not here." },
  { code: "403", title: "Forbidden", message: "403: Access Denied. Even I can't get in. And I built this." },
];

export default function NotFoundPage() {
  const randomError = funnyErrors[Math.floor(Math.random() * funnyErrors.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl"
      >
        {/* Animated Bug Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-8xl mb-8"
        >
          <Bug className="w-24 h-24 mx-auto text-purple-500" />
        </motion.div>

        {/* Error Code */}
        <div className="font-mono text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 mb-4">
          {randomError.code}
        </div>

        <h2 className="font-mono text-2xl text-white mb-2">{randomError.title}</h2>

        <p className="text-gray-400 text-lg mb-8 font-mono">
          {randomError.message}
        </p>

        {/* Code Block Decoration */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-4 mb-8 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-purple-500" />
            <span className="text-gray-500">terminal</span>
          </div>
          <code className="text-green-400">
            $ git checkout main<br />
            <span className="text-red-400">error: path not found</span><br />
            <span className="text-yellow-400">hint: maybe try going back?</span>
          </code>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-600 rounded-xl font-mono text-white hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
