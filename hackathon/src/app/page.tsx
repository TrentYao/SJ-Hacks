import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      {/* Header */}
      <header className="w-full">
  <div className="absolute top-8 left-8 text-xl font-bold text-blue-500">
    SJ HOPE HUB
  </div>
  <div className="absolute top-8 right-8">
    <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-blue-500 hover:bg-blue-50 transition">
      🇺🇸 English ▼
    </button>
  </div>
</header>


      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-12 text-blue-500">
        Helping San Jose Residents<br />Find Immediate Help
      </h1>

      {/* Resource Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Image src="/icons/sleep.png" alt="Sleep" width={40} height={40} className="mb-4" />
          <p className="font-semibold text-center">Find a Place<br />to Sleep Tonight</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Image src="/icons/meal.png" alt="Meals" width={40} height={40} className="mb-4" />
          <p className="font-semibold text-center">Find Free<br />Meals Today</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Image src="/icons/shower.png" alt="Showers" width={40} height={40} className="mb-4" />
          <p className="font-semibold text-center">Find Showers<br />and Laundry</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Image src="/icons/medical.png" alt="Medical" width={40} height={40} className="mb-4" />
          <p className="font-semibold text-center">Find Medical<br />Help</p>
        </div>
      </div>

      {/* Chatbot Section */}
      <section className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Need more help?</h2>
        <p className="text-gray-600 mb-6 text-center">Ask your question below and we&apos;ll guide you!</p>

        <div className="w-full">
          <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
            <p className="text-sm text-gray-700 mb-2 font-semibold">AI Assistant</p>
            <input 
              type="text" 
              placeholder="Type your question..." 
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
              Send
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
