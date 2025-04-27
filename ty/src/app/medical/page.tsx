export default function MedicalPage() {
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <section className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">
          
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">
            Find Free and Affordable Medical Care in San José
          </h1>
  
          {/* Intro Text */}
          <p className="text-gray-600 mb-10 text-center text-lg">
            San José offers free and low-cost medical services for individuals and families experiencing homelessness, low income, or lack of insurance.
          </p>
  
          {/* Emergency Help Banner (no pulse) */}
          <div className="bg-red-100 p-6 rounded-2xl shadow-md mb-12 text-center">
            <h2 className="text-xl font-bold text-red-700 mb-2">
              🚨 Emergency Medical Help
            </h2>
            <p className="text-gray-700 text-base">
              If you are experiencing a medical emergency, <span className="font-bold">call 911</span> immediately.<br />
              For urgent non-emergency health help, call the Valley Connection Line at <span className="font-bold">1-800-704-0900</span>.
            </p>
          </div>
  
          {/* Medical Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gardner Health Services */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">Gardner Health Services</h2>
              <p className="text-gray-600 mb-6">
                Community clinics offering primary medical care, dental care, and behavioral health services to low-income individuals and families.
              </p>
              <a
                href="https://gardnerhealthservices.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Gardner
              </a>
            </div>
  
            {/* Valley Homeless Healthcare Program (VHHP) */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">Valley Homeless Healthcare Program (VHHP)</h2>
              <p className="text-gray-600 mb-6">
                Mobile clinics providing urgent medical care, mental health services, and referrals to homeless individuals across Santa Clara County.
              </p>
              <a
                href="https://scvmc.scvh.org/hospitals-clinics/valley-homeless-health-care-program-vhhp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit VHHP
              </a>
            </div>
  
            {/* Healthier Kids Foundation */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">Healthier Kids Foundation</h2>
              <p className="text-gray-600 mb-6">
                Connects low-income families and children with free medical, dental, and vision screening services across Santa Clara County.
              </p>
              <a
                href="https://hkidsf.org/our-programs/screenings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Healthier Kids
              </a>
            </div>
  
            {/* Valley Medical Center Downtown Clinic */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">Valley Medical Center Downtown Clinic</h2>
              <p className="text-gray-600 mb-6">
                Provides urgent care, mental health support, and case management for homeless and uninsured residents at 777 East Santa Clara Street, San José.
              </p>
              <a
                href="https://scvmc.scvh.org/hospitals-clinics/valley-health-center-downtown-san-jose"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
              >
                Visit Downtown Clinic
              </a>
            </div>
  
          </div>
  
          {/* Additional Help Button */}
          <div className="mt-14 text-center">
            <a
              href="https://health.sccgov.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Explore Santa Clara County Health Services
            </a>
          </div>
  
        </section>
      </main>
    );
  }