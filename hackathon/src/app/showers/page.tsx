"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

const translations = {
  "🇺🇸 English": {
    title: "Find Free Showers & Laundry Services in San José",
    intro: "Access to showers and clean laundry is available through several programs in San José. Here’s where you can find free hygiene services to stay clean and healthy.",
    emergencyTitle: "Emergency Hygiene Help",
    emergencyText: "If you urgently need access to showers or hygiene support, visit the Boccardo Reception Center or call (408) 539-2100 for assistance.",
    resource1: "Boccardo Reception Center (HomeFirst)",
    resource1Text: "Offers free showers, meals, and emergency shelter services year-round. Located at 2011 Little Orchard Street, San José.",
    resource1Button: "Visit Boccardo Center",
    resource2: "Downtown Streets Team (DST)",
    resource2Text: "Provides free access to hygiene kits, mobile showers, and sometimes limited laundry services at various pop-up sites across San José.",
    resource2Button: "Visit Downtown Streets Team",
    resource3: "Safe Parking Sites & Hope Village",
    resource3Text: "Some Safe Parking sites and transitional tiny home communities provide access to bathrooms, portable showers, and hygiene services for vehicle residents.",
    resource3Button: "View Housing Resources",
    resource4: "Dignity on Wheels – Mobile Showers & Laundry",
    resource4Text: "Free mobile shower and laundry services for the homeless community, operating throughout San José. Weekly schedules posted online.",
    resource4Button: "Visit Dignity on Wheels",
    fullSiteButton: "Explore More San José Services",
    homeButton: "Home"
  },
  "🇪🇸 Español": {
    title: "Servicios de Higiene Gratuitos en San José",
    intro: "El acceso a duchas y lavandería gratuita está disponible a través de varios programas en San José. Aquí es donde puedes encontrar servicios de higiene gratuitos.",
    emergencyTitle: "Ayuda de Higiene de Emergencia",
    emergencyText: "Si necesitas acceso urgente a duchas o apoyo de higiene, visita el Centro de Recepción Boccardo o llama al (408) 539-2100 para asistencia.",
    resource1: "Centro de Recepción Boccardo (HomeFirst)",
    resource1Text: "Ofrece duchas gratuitas, comidas y servicios de refugio de emergencia durante todo el año. Ubicado en 2011 Little Orchard Street, San José.",
    resource1Button: "Visitar Boccardo Center",
    resource2: "Downtown Streets Team (DST)",
    resource2Text: "Proporciona acceso gratuito a kits de higiene, duchas móviles y algunos servicios limitados de lavandería en varios sitios emergentes en San José.",
    resource2Button: "Visitar Downtown Streets Team",
    resource3: "Sitios de Estacionamiento Seguro & Hope Village",
    resource3Text: "Algunos sitios de estacionamiento seguro y comunidades de casas pequeñas de transición brindan acceso a baños, duchas portátiles y servicios de higiene para residentes en vehículos.",
    resource3Button: "Ver Recursos de Vivienda",
    resource4: "Dignity on Wheels – Duchas y Lavandería Móviles",
    resource4Text: "Servicios gratuitos de duchas y lavandería móviles para la comunidad sin hogar, operando en todo San José. Horarios semanales publicados en línea.",
    resource4Button: "Visitar Dignity on Wheels",
    fullSiteButton: "Explorar Más Servicios de San José",
    homeButton: "Inicio"
  },
  "🇻🇳 Tiếng Việt": {
    title: "Tìm Dịch Vụ Tắm và Giặt Ủi Miễn Phí tại San José",
    intro: "Truy cập dịch vụ tắm và giặt ủi miễn phí có sẵn thông qua một số chương trình tại San José. Đây là nơi bạn có thể tìm thấy dịch vụ vệ sinh miễn phí để giữ sạch và khỏe mạnh.",
    emergencyTitle: "Hỗ Trợ Vệ Sinh Khẩn Cấp",
    emergencyText: "Nếu bạn cần gấp dịch vụ tắm hoặc hỗ trợ vệ sinh, hãy đến Trung tâm Tiếp nhận Boccardo hoặc gọi (408) 539-2100 để được hỗ trợ.",
    resource1: "Trung Tâm Tiếp Nhận Boccardo (HomeFirst)",
    resource1Text: "Cung cấp dịch vụ tắm miễn phí, bữa ăn và dịch vụ tạm trú khẩn cấp quanh năm. Tọa lạc tại 2011 Little Orchard Street, San José.",
    resource1Button: "Ghé thăm Boccardo Center",
    resource2: "Đội Downtown Streets (DST)",
    resource2Text: "Cung cấp miễn phí bộ dụng cụ vệ sinh, dịch vụ tắm di động và đôi khi giặt ủi tại nhiều địa điểm tạm ở San José.",
    resource2Button: "Ghé thăm Downtown Streets Team",
    resource3: "Bãi Đậu Xe An Toàn & Hope Village",
    resource3Text: "Một số bãi đậu xe an toàn và cộng đồng nhà nhỏ chuyển tiếp cung cấp nhà vệ sinh, tắm lưu động và dịch vụ vệ sinh cho cư dân sống trên xe.",
    resource3Button: "Xem Thêm Nguồn Tài Nguyên Nhà Ở",
    resource4: "Dignity on Wheels – Dịch Vụ Tắm và Giặt Ủi Di Động",
    resource4Text: "Dịch vụ tắm và giặt ủi di động miễn phí cho cộng đồng người vô gia cư hoạt động khắp San José. Lịch trình hàng tuần đăng trực tuyến.",
    resource4Button: "Ghé thăm Dignity on Wheels",
    fullSiteButton: "Khám Phá Thêm Dịch Vụ San José",
    homeButton: "Trang Chủ"
  },
  "🇨🇳 中文": {
    title: "在圣何塞寻找免费淋浴和洗衣服务",
    intro: "通过圣何塞的多个项目可以获得免费淋浴和干净的洗衣服务。以下是您可以找到免费卫生服务的地方。",
    emergencyTitle: "紧急卫生援助",
    emergencyText: "如果您需要紧急使用淋浴或卫生支持，请访问Boccardo接待中心或拨打(408) 539-2100寻求帮助。",
    resource1: "Boccardo接待中心 (HomeFirst)",
    resource1Text: "全年提供免费的淋浴、膳食和紧急庇护服务。地址：2011 Little Orchard Street, San José。",
    resource1Button: "访问Boccardo Center",
    resource2: "市区街道队 (DST)",
    resource2Text: "在圣何塞的多个临时站点提供免费的卫生用品、流动淋浴和有限的洗衣服务。",
    resource2Button: "访问Downtown Streets Team",
    resource3: "安全停车场 & 希望村",
    resource3Text: "某些安全停车场和过渡性小型住宅社区为车辆居民提供洗手间、流动淋浴和卫生服务。",
    resource3Button: "查看住房资源",
    resource4: "Dignity on Wheels – 移动淋浴和洗衣",
    resource4Text: "为无家可归者社区提供的免费移动淋浴和洗衣服务，在整个圣何塞运营。每周时间表在线发布。",
    resource4Button: "访问Dignity on Wheels",
    fullSiteButton: "探索更多圣何塞服务",
    homeButton: "主页"
  }
};

export default function ShowersPage() {
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

        {/* Language Button */}
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

        {/* Intro */}
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
              <path d="M10 4 8 6" />
              <path d="M17 19v2" />
              <path d="M2 12h20" />
              <path d="M7 19v2" />
              <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            </svg>
            {t.emergencyTitle}
          </h2>
          <p className="text-gray-700 text-base">
            {t.emergencyText}
          </p>
        </div>

        {/* Hygiene Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Boccardo Reception Center */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource1}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource1Text}
            </p>
            <a
              href="https://www.homefirstscc.org/emergency-shelters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource1Button}
            </a>
          </div>

          {/* Downtown Streets Team */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource2}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource2Text}
            </p>
            <a
              href="https://www.streetsteam.org/sanjose"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource2Button}
            </a>
          </div>

          {/* Safe Parking & Hope Village */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource3}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource3Text}
            </p>
            <a
              href="https://www.mercurynews.com/2024/10/03/map-where-the-new-round-of-tiny-homes-will-be-built-in-san-jose/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource3Button}
            </a>
          </div>

          {/* Dignity on Wheels */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource4}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource4Text}
            </p>
            <a
              href="https://www.findhelp.org/wehope--east-palo-alto-ca--dignity-on-wheels/4878300779642880?postal=95101"
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
