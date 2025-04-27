"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("🇺🇸 English");
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = ["🇺🇸 English", "🇪🇸 Español", "🇻🇳 Tiếng Việt", "🇨🇳 中文"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    }

    if (languageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">

      {/* Header */}
      <header className="w-full">
        <div className="absolute top-8 left-8 text-xl font-bold text-blue-500">
          SJ HOPE HUB
        </div>

        <div className="absolute top-8 right-8">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-lg transition"
            >
              {selectedLanguage}
              <span className={`transition-transform duration-200 ${languageMenuOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out">
                {languages
                  .filter(lang => lang !== selectedLanguage)
                  .map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setSelectedLanguage(lang); setLanguageMenuOpen(false); }}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-100"
                    >
                      {lang}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-12 text-blue-500">
        Helping San Jose Residents<br />Find Immediate Help
      </h1>

      {/* Resource Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

        {/* Sleep */}
        <Link href="/sleep">
          <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-500 group-hover:text-white transform group-hover:scale-120 transition-transform duration-200 ease-in-out mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
              <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
              <path d="M12 4v6" />
              <path d="M2 18h20" />
            </svg>
            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              Find a Place<br />to Sleep Tonight
            </p>
          </div>
        </Link>

        {/* Meals */}
        <Link href="/meals">
          <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-500 group-hover:text-white transform group-hover:scale-120 transition-transform duration-200 ease-in-out mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              Find Free<br />Meals Today
            </p>
          </div>
        </Link>

        {/* Showers */}
        <Link href="/showers">
          <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-500 group-hover:text-white transform group-hover:scale-120 transition-transform duration-200 ease-in-out mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 4 8 6" />
              <path d="M17 19v2" />
              <path d="M2 12h20" />
              <path d="M7 19v2" />
              <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            </svg>
            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              Find Showers<br />and Laundry
            </p>
          </div>
        </Link>

        {/* Medical */}
        <Link href="/medical">
          <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-500 group-hover:text-white transform group-hover:scale-120 transition-transform duration-200 ease-in-out mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 11v4" />
              <path d="M14 13h-4" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M18 6v14" />
              <path d="M6 6v14" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              Find Medical<br />Help
            </p>
          </div>
        </Link>

      </div>

      {/* Chatbot Section */}
      <section className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Need more help?</h2>
        <p className="text-gray-600 mb-6 text-center">Ask your question below and we'll guide you!</p>

        <div className="w-full">
          <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
            <p className="text-sm text-gray-700 mb-2 font-semibold">AI Assistant</p>
            <input
              type="text"
              placeholder="Type your question..."
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 text-gray-700"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
              Send
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}