import Link from 'next/link';

export default function SleepPage() {
  return (
    <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <section className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">
          Find a Safe Place to Sleep in San José
        </h1>

        {/* Intro Text */}
        <p className="text-gray-600 mb-10 text-center text-lg">
          If you're experiencing homelessness, the City of San José and its partners provide emergency shelters, interim housing, safe parking programs, and supportive services to help you find safe overnight options.
        </p>

        {/* Emergency Help Banner */}
        <div className="bg-red-100 p-6 rounded-2xl shadow-md mb-12 text-center">
          <h2 className="text-xl font-bold text-red-700 mb-2">
            🛏️ Emergency Shelter Help
          </h2>
          <p className="text-gray-700 text-base">
            If you need immediate shelter, call <span className="font-bold">(408) 539-2100</span> for 24/7 access to emergency beds through HomeFirst.
          </p>
        </div>

        {/* Sleep Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Emergency Beds (HomeFirst) */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Emergency Beds and Shelter Access
            </h2>
            <p className="text-gray-600 mb-6">
              HomeFirst offers year-round emergency shelters, including the Boccardo Reception Center and seasonal Overnight Warming Locations (OWLs).
            </p>
            <a
              href="https://www.homefirstscc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              Visit HomeFirst Website
            </a>
          </div>

          {/* Interim Housing Communities */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Interim Housing Communities
            </h2>
            <p className="text-gray-600 mb-6">
              Temporary housing in small private units to help residents transition into permanent housing, with case management and support services.
            </p>
            <a
              href="https://www.sanjoseca.gov/your-government/departments-offices/housing/homelessness-response/interim-housing-communities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              Learn About Interim Housing
            </a>
          </div>

          {/* Safe Parking Program */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Safe Parking Program
            </h2>
            <p className="text-gray-600 mb-6">
              Secure, designated parking lots for individuals and families living in vehicles, with access to bathrooms, security, and supportive services.
            </p>
            <a
              href="https://www.sanjoseca.gov/your-government/departments-offices/housing/homelessness-response/supportive-parking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              View Safe Parking Info
            </a>
          </div>

          {/* Boccardo Reception Center */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Boccardo Reception Center
            </h2>
            <p className="text-gray-600 mb-6">
              The largest emergency homeless shelter in Santa Clara County operated by HomeFirst, providing beds, meals, showers, and case management services.
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

        </div>

        {/* Additional Help Button */}
        <div className="mt-14 text-center">
          <a
            href="https://www.sanjoseca.gov/your-government/departments-offices/housing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Explore All San José Housing Programs
          </a>
        </div>

      </section>
    </main>
  );
}