"use client";


import { useState, useEffect, useRef } from "react";


export default function ChatBot() {
 const [question, setQuestion] = useState("");
 const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
 const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
 const bottomRef = useRef<HTMLDivElement>(null);
 const [isTyping, setIsTyping] = useState(false);


 const handleSend = async () => {
   const trimmedQuestion = question.trim();
   if (!trimmedQuestion) return;


   // Immediately show user's message
   setMessages((prev) => [...prev, { sender: "user", text: trimmedQuestion }]);
   setHistory((prev) => [...prev, { role: "user", content: trimmedQuestion }]);
   setQuestion("");
   setIsTyping(true);


   try {
     const response = await fetch("/api/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         message: trimmedQuestion,
         history: history,
       }),
     });


     const data = await response.json();
     const botReply = data.reply || "Sorry, I couldn't find an answer.";


     // Add bot's reply
     setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
     setHistory((prev) => [...prev, { role: "assistant", content: botReply }]);
   } catch (error) {
     console.error("Error sending message:", error);
     setMessages((prev) => [...prev, { sender: "bot", text: "Server error. Please try again." }]);
   } finally {
     setIsTyping(false);
   }
 };


 useEffect(() => {
   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
 }, [messages]);


 return (
   <div className="flex flex-col items-center justify-center w-full p-6 min-h-screen bg-gray-100">
     <div className="w-full max-w-2xl text-center">
       <h1 className="text-3xl font-bold mb-6 text-blue-600">San Jose Help Chatbot</h1>
       <p className="text-gray-600 mb-8">Ask about food 🍽️, shelter 🛏️, medical 🏥, mental health 🧠, and more!</p>


       {/* Chat Messages */}
       <div className="border rounded-lg p-4 bg-white shadow-md mb-6 h-96 overflow-y-auto flex flex-col gap-3">
         {messages.map((msg, index) => (
           <div
             key={index}
             className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
           >
             <div
               className={`px-4 py-3 rounded-xl max-w-[70%] ${
                 msg.sender === "user"
                   ? "bg-blue-600 text-white"
                   : "bg-gray-300 text-gray-800"
               }`}
             >
               {msg.text}
             </div>
           </div>
         ))}
         {isTyping && (
           <div className="flex justify-start">
             <div className="px-4 py-3 rounded-xl bg-gray-300 text-gray-600 italic animate-pulse max-w-[70%]">
               AI is typing...
             </div>
           </div>
         )}
         <div ref={bottomRef} />
       </div>


       {/* Input Area */}
       <div className="w-full flex items-center gap-3">
         <input
           type="text"
           placeholder="Type your question..."
           value={question}
           onChange={(e) => setQuestion(e.target.value)}
           onKeyDown={(e) => e.key === "Enter" && handleSend()}
           className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
         />
         <button
           onClick={handleSend}
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
         >
           Send
         </button>
       </div>
     </div>
   </div>
 );
}
