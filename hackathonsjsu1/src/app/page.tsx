"use client";

import { useState } from "react";

export default function SJHopeHub() {
  const [question, setQuestion] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="w-full flex justify-between items-center mb-12">
        <h1 className="text-xl font-bold">SJ HOPE HUB</h1>
        <select className="border rounded p-2">
          <option>English</option>
        </select>
      </header>

      <main className="text-center w-full">
        <h2 className="text-2xl font-bold mb-12">
          Helping San Jose residents <br /> find immediate help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24">
          <ServiceCard title="Find a Place to Sleep Tonight" icon="🛏️" />
          <ServiceCard title="Find Free Meals Today" icon="🍲" />
          <ServiceCard title="Find Showers and Laundry" icon="🚿" />
          <ServiceCard title="Find Medical Help" icon="➕" />
        </div>

        {/* Centered Chatbot Section */}
        <div className="flex items-center justify-center min-h-screen bg-white p-6">
          <div className="w-full max-w-md text-center">
            <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
            <p className="mb-8 text-gray-600">Ask your question below and we’ll guide you!</p>
            <div className="border rounded-lg p-6 bg-blue-50 shadow-lg">
              <input
                type="text"
                placeholder="Type your question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3 rounded border mb-4"
              />
              <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ServiceCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}
