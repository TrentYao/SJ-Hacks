"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("🇺🇸 English");
  const menuRef = useRef<HTMLDivElement>(null);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "👋 Hi there! How can I assist you today in San Jose?" }
  ]);
  const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const languages = ["🇺🇸 English", "🇪🇸 Español", "🇻🇳 Tiếng Việt", "🇨🇳 中文"];

  const translations = {
    "🇺🇸 English": {
      titleLine1: "Helping San Jose Residents",
      titleLine2: "Find Immediate Help",
      sleep: "Find a Place to Sleep Tonight",
      meals: "Find Free Meals Today",
      showers: "Find Showers and Laundry",
      medical: "Find Medical Help",
      chatbotTitle: "Need more help?",
      chatbotSub: "Ask your question below and we'll guide you!",
      chatbotPlaceholder: "Type your question...",
      chatbotButton: "Send",
      chatbotTyping: "AI is typing...",
      chatbotGreeting: "👋 Hi there! How can I assist you today in San Jose?",
    },
    "🇪🇸 Español": {
      titleLine1: "Ayudando a los residentes de San José", 
      titleLine2: "a encontrar ayuda inmediata",
      sleep: "Encuentra un lugar para dormir esta noche",
      meals: "Encuentra comidas gratuitas hoy",
      showers: "Encuentra duchas y lavandería",
      medical: "Encuentra ayuda médica",
      chatbotTitle: "¿Necesitas más ayuda?",
      chatbotSub: "Haz tu pregunta a continuación y te guiaremos!",
      chatbotPlaceholder: "Escribe tu pregunta...",
      chatbotButton: "Enviar",
      chatbotTyping: "IA está escribiendo...",
      chatbotGreeting: "👋 ¡Hola! ¿Cómo puedo ayudarte hoy en San José?",
    },
    "🇻🇳 Tiếng Việt": {
      titleLine1: "Giúp cư dân San Jose", 
      titleLine2: "tìm kiếm sự trợ giúp ngay lập tức",
      sleep: "Tìm chỗ ngủ đêm nay",
      meals: "Tìm bữa ăn miễn phí hôm nay",
      showers: "Tìm vòi sen và giặt ủi",
      medical: "Tìm kiếm sự trợ giúp y tế",
      chatbotTitle: "Cần thêm trợ giúp?",
      chatbotSub: "Đặt câu hỏi của bạn bên dưới và chúng tôi sẽ hướng dẫn bạn!",
      chatbotPlaceholder: "Nhập câu hỏi của bạn...",
      chatbotButton: "Gửi",
      chatbotTyping: "AI đang gõ...",
    },
    "🇨🇳 中文": {
      titleLine1: "帮助圣何塞居民",
      titleLine2: "寻找即时帮助",
      sleep: "找到今晚可以睡觉的地方",
      meals: "找到今天的免费餐食",
      showers: "找到淋浴和洗衣",
      medical: "寻找医疗帮助",
      chatbotTitle: "需要更多帮助？",
      chatbotSub: "在下面提出您的问题，我们将指导您！",
      chatbotPlaceholder: "输入你的问题...",
      chatbotButton: "发送",
      chatbotTyping: "AI正在输入...",
    },
  };

  const t = translations[selectedLanguage];

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
 
 
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 
 
  const handleSend = async () => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;
 
 
    setMessages((prev) => [...prev, { sender: "user", text: trimmedQuestion }]);
    setHistory((prev) => [...prev, { role: "user", content: trimmedQuestion }]);
    setQuestion("");
    setIsTyping(true);
 
 
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedQuestion, history: history }),
      });
 
 
      const data = await response.json();
      const botReply = data.reply || "Sorry, I couldn't find an answer.";
 
 
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setHistory((prev) => [...prev, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "There was a server error. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };
 

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
        {t.titleLine1} <br />{t.titleLine2}
      </h1>

      {/* Resource Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

        {/* Sleep */}
        <Link href="/sleep">
          <div className="group flex flex-col items-center justify-center p-6 min-h-[220px] bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 group-hover:text-white transition-transform duration-200 ease-in-out mb-4 group-hover:scale-120 group-hover:animate-bounceOnce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
              <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
              <path d="M12 4v6" />
              <path d="M2 18h20" />
            </svg>

            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              {t.sleep}
            </p>
          </div>
        </Link>

        {/* Meals */}
        <Link href="/meals">
          <div className="group flex flex-col items-center justify-center p-6 min-h-[220px] bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 group-hover:text-white transition-all duration-200 ease-in-out mb-4 group-hover:scale-120 group-hover:animate-bounceOnce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>

            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              {t.meals}
            </p>
          </div>
        </Link>

        {/* Showers */}
        <Link href="/showers">
          <div className="group flex flex-col items-center justify-center p-6 min-h-[220px] bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 group-hover:text-white transition-all duration-200 ease-in-out mb-4 group-hover:scale-120 group-hover:animate-bounceOnce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 4 8 6" />
              <path d="M17 19v2" />
              <path d="M2 12h20" />
              <path d="M7 19v2" />
              <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            </svg>

            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              {t.showers}
            </p>
          </div>
        </Link>

        {/* Medical */}
        <Link href="/medical">
          <div className="group flex flex-col items-center justify-center p-6 min-h-[220px] bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 group-hover:text-white transition-all duration-200 ease-in-out mb-4 group-hover:scale-120 group-hover:animate-bounceOnce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 11v4" />
              <path d="M14 13h-4" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M18 6v14" />
              <path d="M6 6v14" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>

            <p className="font-semibold text-center text-gray-500 group-hover:text-white">
              {t.medical}
            </p>
          </div>
        </Link>

      </div>

      {/* Chatbot Section */}
     {/* SMALLER, CLEANER */}
     <section className="flex flex-col items-center w-full max-w-xl p-6 bg-white rounded-2xl shadow-md">
       <h2 className="text-2xl font-bold text-blue-500 mb-2"
       >
          {t.chatbotTitle}
        </h2>
       <p className="text-gray-600 mb-6 text-center"
       >
          {t.chatbotSub}
        </p>


       {/* Chat messages */}
       <div className="w-full bg-blue-50 p-4 rounded-xl shadow-inner mb-6 h-64 overflow-y-auto">
         {messages.map((msg, index) => (
           <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
             <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}>
               {msg.text}
             </span>
           </div>
         ))}
         {isTyping && (
           <div className="text-left text-gray-400 italic animate-pulse"
           >
            {t.chatbotTyping}
            </div>
         )}
         <div ref={bottomRef} />
       </div>


       {/* Input and Send */}
       <div className="w-full flex gap-2">
         <input
           type="text"
           placeholder={t.chatbotPlaceholder}
           value={question}
           onChange={(e) => setQuestion(e.target.value)}
           onKeyDown={(e) => e.key === "Enter" && handleSend()}
           className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
         />
         <button
           onClick={handleSend}
           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
         >
           {t.chatbotButton}
         </button>
       </div>
     </section>
   </main>
 );
}

