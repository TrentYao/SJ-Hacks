export default function MealsPage() {
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <section className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">
          
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">
            Find Free and Affordable Meals in San José
          </h1>
  
          {/* Intro Text */}
          <p className="text-gray-600 mb-10 text-center text-lg">
            If you or someone you know is facing hunger, San José offers many free meal services, soup kitchens, and food distribution programs available daily across the city.
          </p>
  
          {/* Emergency Help Banner (no pulse) */}
          <div className="bg-red-100 p-6 rounded-2xl shadow-md mb-12 text-center">
            <h2 className="text-xl font-bold text-red-700 mb-2">
              🍽️ Emergency Meal Assistance
            </h2>
            <p className="text-gray-700 text-base">
              If you need immediate food support, call the Santa Clara County Emergency Assistance Line at <span className="font-bold">(408) 385-2400</span> or visit a local shelter.
            </p>
          </div>
  
          {/* Meal Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Loaves & Fishes Family Kitchen */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Loaves & Fishes Family Kitchen
              </h2>
              <p className="text-gray-600 mb-6">
                Provides free hot meals daily at various sites across San José. No questions asked.
              </p>
              <a
                href="https://www.loavesfishes.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Loaves & Fishes
              </a>
            </div>
  
            {/* Sacred Heart Community Service */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Sacred Heart Community Service
              </h2>
              <p className="text-gray-600 mb-6">
                Distributes free groceries and essential supplies weekly to individuals and families in need across San José.
              </p>
              <a
                href="https://www.sacredheartcs.org/programs-food-clothing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Sacred Heart
              </a>
            </div>
  
            {/* Second Harvest Food Bank */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Second Harvest of Silicon Valley
              </h2>
              <p className="text-gray-600 mb-6">
                Free groceries available at multiple food distribution sites throughout San José. Call or search online to find the nearest site.
              </p>
              <a
                href="https://www.shfb.org/get-food/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Find Food Near You
              </a>
            </div>
  
            {/* Salvation Army Meals */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Salvation Army San José
              </h2>
              <p className="text-gray-600 mb-6">
                Serves free meals to homeless individuals and families. Also offers emergency housing and shelter referrals.
              </p>
              <a
                href="https://siliconvalley.salvationarmy.org/silicon_valley/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Salvation Army
              </a>
            </div>
  
          </div>
  
          {/* Additional Help Button */}
          <div className="mt-14 text-center">
            <a
              href="https://www.sanjoseca.gov/your-government/departments-offices/housing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Explore More San José Housing & Food Services
            </a>
          </div>
  
        </section>
      </main>
    );
  }