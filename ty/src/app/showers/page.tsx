export default function ShowersPage() {
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <section className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">
          
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">
            Find Free Showers and Laundry Services in San José
          </h1>
  
          {/* Intro Text */}
          <p className="text-gray-600 mb-10 text-center text-lg">
            Access to showers and clean laundry is available through several programs in San José. Here’s where you can find free hygiene services to stay clean and healthy.
          </p>
  
          {/* Emergency Help Banner (no pulse) */}
          <div className="bg-red-100 p-6 rounded-2xl shadow-md mb-12 text-center">
            <h2 className="text-xl font-bold text-red-700 mb-2">
              🚿 Emergency Hygiene Help
            </h2>
            <p className="text-gray-700 text-base">
              If you urgently need access to showers or hygiene support, visit the <span className="font-bold">Boccardo Reception Center</span> or call <span className="font-bold">(408) 539-2100</span> for assistance.
            </p>
          </div>
  
          {/* Hygiene Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
            {/* Boccardo Reception Center */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Boccardo Reception Center (HomeFirst)
              </h2>
              <p className="text-gray-600 mb-6">
                Offers free showers, meals, and emergency shelter services year-round. Located at 2011 Little Orchard Street, San José.
              </p>
              <a
                href="https://www.homefirstscc.org/emergency-shelters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Boccardo Center
              </a>
            </div>
  
            {/* Downtown Streets Team */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Downtown Streets Team (DST)
              </h2>
              <p className="text-gray-600 mb-6">
                Provides free access to hygiene kits, mobile showers, and sometimes limited laundry services at various pop-up sites across San José.
              </p>
              <a
                href="https://www.streetsteam.org/sanjose"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Downtown Streets Team
              </a>
            </div>
  
            {/* Safe Parking & Hope Village */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Safe Parking Sites & Hope Village
              </h2>
              <p className="text-gray-600 mb-6">
                Some Safe Parking sites and transitional tiny home communities provide access to bathrooms, portable showers, and hygiene services for vehicle residents.
              </p>
              <a
                href="https://www.mercurynews.com/2024/10/03/map-where-the-new-round-of-tiny-homes-will-be-built-in-san-jose/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                View Housing Resources
              </a>
            </div>
  
            {/* Dignity on Wheels (Project WeHOPE) */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Dignity on Wheels – Mobile Showers & Laundry
              </h2>
              <p className="text-gray-600 mb-6">
                Free mobile shower and laundry services for the homeless community, operating throughout San José. Weekly schedules posted online.
              </p>
              <a
                href="https://www.findhelp.org/wehope--east-palo-alto-ca--dignity-on-wheels/4878300779642880?postal=95101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Dignity on Wheels
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
              Explore More San José Services
            </a>
          </div>
  
        </section>
      </main>
    );
  }