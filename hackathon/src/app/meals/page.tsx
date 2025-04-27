"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

const translations = {
  "🇺🇸 English": {
    title: "Find Free and Affordable Meals in San José",
    intro: "If you or someone you know is facing hunger, San José offers many free meal services, soup kitchens, and food distribution programs available daily across the city.",
    emergencyTitle: "Emergency Meal Assistance",
    emergencyText: "If you need immediate food support, call the Santa Clara County Emergency Assistance Line at (408) 385-2400 or visit a local shelter.",
    resource1: "Loaves & Fishes Family Kitchen",
    resource1Text: "Provides free hot meals daily at various sites across San José. No questions asked.",
    resource1Button: "Visit Loaves & Fishes",
    resource2: "Sacred Heart Community Service",
    resource2Text: "Distributes free groceries and essential supplies weekly to individuals and families in need across San José.",
    resource2Button: "Visit Sacred Heart",
    resource3: "Second Harvest of Silicon Valley",
    resource3Text: "Free groceries available at multiple food distribution sites throughout San José. Call or search online to find the nearest site.",
    resource3Button: "Find Food Near You",
    resource4: "Salvation Army San José",
    resource4Text: "Serves free meals to homeless individuals and families. Also offers emergency housing and shelter referrals.",
    resource4Button: "Visit Salvation Army",
    fullSiteButton: "Explore More San José Housing & Food Services",
    homeButton: "Home"
  },
  "🇪🇸 Español": {
    title: "Encuentra alimentos gratuitos en San José",
    intro: "Si usted o alguien que conoce enfrenta hambre, San José ofrece muchos servicios de comidas gratuitas, comedores y programas de distribución de alimentos disponibles diariamente en toda la ciudad.",
    emergencyTitle: "Asistencia de Comida de Emergencia",
    emergencyText: "Si necesita apoyo alimentario inmediato, llame a la Línea de Asistencia de Emergencia del Condado de Santa Clara al (408) 385-2400 o visite un refugio local.",
    resource1: "Cocina Familiar Loaves & Fishes",
    resource1Text: "Proporciona comidas calientes gratuitas todos los días en varios sitios de San José. Sin hacer preguntas.",
    resource1Button: "Visitar Loaves & Fishes",
    resource2: "Servicio Comunitario Sacred Heart",
    resource2Text: "Distribuye comestibles gratuitos y suministros esenciales semanalmente a individuos y familias necesitadas en San José.",
    resource2Button: "Visitar Sacred Heart",
    resource3: "Second Harvest del Valle de Silicon",
    resource3Text: "Comestibles gratuitos disponibles en varios sitios de distribución en San José. Llame o busque en línea para encontrar el sitio más cercano.",
    resource3Button: "Encontrar Comida Cercana",
    resource4: "Ejército de Salvación de San José",
    resource4Text: "Sirve comidas gratuitas a personas y familias sin hogar. También ofrece alojamiento de emergencia y derivaciones.",
    resource4Button: "Visitar Ejército de Salvación",
    fullSiteButton: "Explorar Más Servicios de Vivienda y Alimentos de San José",
    homeButton: "Inicio"
  },
  "🇻🇳 Tiếng Việt": {
    title: "Tìm kiếm bữa ăn miễn phí và giá rẻ tại San José",
    intro: "Nếu bạn hoặc ai đó bạn biết đang đối mặt với tình trạng đói, San José cung cấp nhiều dịch vụ bữa ăn miễn phí, nhà ăn và chương trình phân phát thực phẩm hàng ngày trên toàn thành phố.",
    emergencyTitle: "Hỗ trợ bữa ăn khẩn cấp",
    emergencyText: "Nếu bạn cần hỗ trợ thực phẩm khẩn cấp, hãy gọi Đường dây hỗ trợ khẩn cấp Quận Santa Clara theo số (408) 385-2400 hoặc ghé thăm một nơi trú ẩn địa phương.",
    resource1: "Nhà bếp Gia đình Loaves & Fishes",
    resource1Text: "Cung cấp các bữa ăn nóng miễn phí hàng ngày tại nhiều địa điểm ở San José. Không cần thủ tục.",
    resource1Button: "Ghé thăm Loaves & Fishes",
    resource2: "Dịch vụ Cộng đồng Sacred Heart",
    resource2Text: "Phân phối thực phẩm miễn phí và các nhu yếu phẩm hàng tuần cho cá nhân và gia đình có nhu cầu tại San José.",
    resource2Button: "Ghé thăm Sacred Heart",
    resource3: "Second Harvest của Silicon Valley",
    resource3Text: "Có thực phẩm miễn phí tại nhiều điểm phân phối thực phẩm ở San José. Gọi hoặc tìm kiếm trực tuyến để tìm địa điểm gần nhất.",
    resource3Button: "Tìm Thực Phẩm Gần Bạn",
    resource4: "Đội Cứu Thế Quân San José",
    resource4Text: "Phục vụ bữa ăn miễn phí cho những người vô gia cư và các gia đình. Cũng cung cấp nơi ở khẩn cấp và giới thiệu dịch vụ.",
    resource4Button: "Ghé thăm Đội Cứu Thế Quân",
    fullSiteButton: "Khám Phá Thêm Dịch Vụ Nhà Ở Và Thực Phẩm Tại San José",
    homeButton: "Trang Chủ"
  },
  "🇨🇳 中文": {
    title: "在圣何塞寻找免费和实惠的餐食",
    intro: "如果您或您认识的人面临饥饿问题，圣何塞每天在全市范围内提供许多免费的餐食服务、施粥所和食品分发计划。",
    emergencyTitle: "紧急膳食援助",
    emergencyText: "如果您需要紧急食品支持，请拨打圣克拉拉县紧急援助热线 (408) 385-2400 或访问当地庇护所。",
    resource1: "Loaves & Fishes 家庭厨房",
    resource1Text: "在圣何塞多个地点每天提供免费的热餐。不问身份。",
    resource1Button: "访问 Loaves & Fishes",
    resource2: "Sacred Heart 社区服务",
    resource2Text: "每周向圣何塞有需要的个人和家庭分发免费杂货和必需品。",
    resource2Button: "访问 Sacred Heart",
    resource3: "硅谷 Second Harvest",
    resource3Text: "在圣何塞多个食品分发点提供免费杂货。请致电或在线查找最近的地点。",
    resource3Button: "寻找附近的食物",
    resource4: "救世军圣何塞",
    resource4Text: "为无家可归者及家庭提供免费餐食，同时提供紧急住房和转介服务。",
    resource4Button: "访问救世军",
    fullSiteButton: "探索更多圣何塞住房与食品服务",
    homeButton: "主页"
  }
};

export default function MealsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("🇺🇸 English");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = ["🇺🇸 English", "🇪🇸 Español", "🇻🇳 Tiếng Việt", "🇨🇳 中文"];
  const t = translations[selectedLanguage];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <section className="relative w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">

        {/* Small Language Button */}
        <div className="absolute top-5 right-5" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition"
          >
            🌐
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50">
              {languages
                .filter(lang => lang !== selectedLanguage)
                .map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setSelectedLanguage(lang); setMenuOpen(false); }}
                    className="block w-full px-3 py-2 text-left text-gray-700 hover:bg-blue-100"
                  >
                    {lang}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">
          {t.title}
        </h1>

        {/* Intro Text */}
        <p className="text-gray-600 mb-10 text-center text-lg">
          {t.intro}
        </p>

        {/* Emergency Help Banner */}
        <div className="bg-red-100 p-6 rounded-2xl shadow-md mb-12 text-center">
          <h2 className="text-xl font-bold text-red-700 mb-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
            {t.emergencyTitle}
          </h2>
          <p className="text-gray-700 text-base">
            {t.emergencyText}
          </p>
        </div>

        {/* Meal Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Loaves & Fishes */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource1}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource1Text}
            </p>
            <a
              href="https://www.loavesfishes.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource1Button}
            </a>
          </div>

          {/* Sacred Heart */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource2}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource2Text}
            </p>
            <a
              href="https://www.sacredheartcs.org/programs-food-clothing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource2Button}
            </a>
          </div>

          {/* Second Harvest */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource3}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource3Text}
            </p>
            <a
              href="https://www.shfb.org/get-food/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource3Button}
            </a>
          </div>

          {/* Salvation Army */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource4}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource4Text}
            </p>
            <a
              href="https://siliconvalley.salvationarmy.org/silicon_valley/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource4Button}
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
            {t.fullSiteButton}
          </a>
        </div>

        {/* Home Button */}
        <div className="mt-10 text-center">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition transform hover:scale-105">
              {t.homeButton}
            </button>
          </Link>
        </div>

      </section>
    </main>
  );
}
