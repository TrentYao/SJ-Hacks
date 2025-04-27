"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

const translations = {
  "🇺🇸 English": {
    title: "Find a Safe Place to Sleep in San José",
    intro: "If you're experiencing homelessness, the City of San José and its partners provide emergency shelters, interim housing, safe parking programs, and supportive services to help you find safe overnight options.",
    emergencyTitle: "Emergency Shelter Help",
    emergencyText: "If you need immediate shelter, call (408) 539-2100 for 24/7 access to emergency beds through HomeFirst.",
    resource1: "Emergency Beds and Shelter Access",
    resource1Text: "HomeFirst offers year-round emergency shelters, including the Boccardo Reception Center and seasonal Overnight Warming Locations (OWLs).",
    resource1Button: "Visit HomeFirst Website",
    resource2: "Interim Housing Communities",
    resource2Text: "Temporary housing in small private units to help residents transition into permanent housing, with case management and support services.",
    resource2Button: "Learn About Interim Housing",
    resource3: "Safe Parking Program",
    resource3Text: "Secure, designated parking lots for individuals and families living in vehicles, with access to bathrooms, security, and supportive services.",
    resource3Button: "View Safe Parking Info",
    resource4: "Boccardo Reception Center",
    resource4Text: "The largest emergency homeless shelter in Santa Clara County operated by HomeFirst, providing beds, meals, showers, and case management services.",
    resource4Button: "Visit Boccardo Center",
    fullSiteButton: "Explore All San José Housing Programs",
    homeButton: "Home"
  },
  "🇪🇸 Español": {
    title: "Lugares Seguros para Dormir en San José",
    intro: "Si está experimentando falta de vivienda, la Ciudad de San José y sus socios proporcionan refugios de emergencia, viviendas interinas, programas de estacionamiento seguro y servicios de apoyo para ayudarlo a encontrar opciones seguras para pasar la noche.",
    emergencyTitle: "Ayuda de Refugio de Emergencia",
    emergencyText: "Si necesita refugio inmediato, llame al (408) 539-2100 para acceso a camas de emergencia las 24 horas a través de HomeFirst.",
    resource1: "Camas de Emergencia y Acceso a Refugio",
    resource1Text: "HomeFirst ofrece refugios de emergencia todo el año, incluido el Centro de Recepción Boccardo y ubicaciones de calentamiento nocturno (OWLs) en temporada.",
    resource1Button: "Visitar Sitio Web de HomeFirst",
    resource2: "Comunidades de Vivienda Interina",
    resource2Text: "Viviendas temporales en pequeñas unidades privadas para ayudar a los residentes a hacer la transición a una vivienda permanente, con gestión de casos y servicios de apoyo.",
    resource2Button: "Aprender Sobre Vivienda Interina",
    resource3: "Programa de Estacionamiento Seguro",
    resource3Text: "Estacionamientos seguros y designados para personas y familias que viven en vehículos, con acceso a baños, seguridad y servicios de apoyo.",
    resource3Button: "Ver Información de Estacionamiento Seguro",
    resource4: "Centro de Recepción Boccardo",
    resource4Text: "El refugio para personas sin hogar más grande del Condado de Santa Clara operado por HomeFirst, proporcionando camas, comidas, duchas y servicios de gestión de casos.",
    resource4Button: "Visitar Centro Boccardo",
    fullSiteButton: "Explorar Todos los Programas de Vivienda de San José",
    homeButton: "Inicio"
  },
  "🇻🇳 Tiếng Việt": {
    title: "Tìm Nơi An Toàn để Ngủ tại San José",
    intro: "Nếu bạn đang trải qua tình trạng vô gia cư, Thành phố San José và các đối tác cung cấp nơi trú ẩn khẩn cấp, nhà ở tạm thời, chương trình đậu xe an toàn và dịch vụ hỗ trợ để giúp bạn tìm nơi ngủ an toàn qua đêm.",
    emergencyTitle: "Trợ Giúp Nơi Trú Ẩn Khẩn Cấp",
    emergencyText: "Nếu bạn cần nơi trú ẩn khẩn cấp, hãy gọi (408) 539-2100 để được truy cập giường khẩn cấp 24/7 thông qua HomeFirst.",
    resource1: "Giường Khẩn Cấp và Truy Cập Nơi Trú Ẩn",
    resource1Text: "HomeFirst cung cấp nơi trú ẩn khẩn cấp quanh năm, bao gồm Trung tâm Tiếp nhận Boccardo và các Địa điểm Làm Ấm Qua Đêm (OWLs) theo mùa.",
    resource1Button: "Ghé Thăm Website HomeFirst",
    resource2: "Cộng Đồng Nhà Ở Tạm Thời",
    resource2Text: "Nhà ở tạm thời trong các đơn vị nhỏ riêng tư để giúp cư dân chuyển đổi sang nhà ở lâu dài, với quản lý trường hợp và dịch vụ hỗ trợ.",
    resource2Button: "Tìm Hiểu về Nhà Ở Tạm",
    resource3: "Chương Trình Đậu Xe An Toàn",
    resource3Text: "Bãi đậu xe an toàn, được chỉ định cho cá nhân và gia đình sống trong xe, với quyền truy cập vào nhà vệ sinh, an ninh và dịch vụ hỗ trợ.",
    resource3Button: "Xem Thông Tin Đậu Xe An Toàn",
    resource4: "Trung Tâm Tiếp Nhận Boccardo",
    resource4Text: "Trung tâm trú ẩn người vô gia cư lớn nhất Quận Santa Clara được HomeFirst vận hành, cung cấp giường, bữa ăn, tắm rửa và dịch vụ quản lý trường hợp.",
    resource4Button: "Ghé Thăm Trung Tâm Boccardo",
    fullSiteButton: "Khám Phá Tất Cả Các Chương Trình Nhà Ở tại San José",
    homeButton: "Trang Chủ"
  },
  "🇨🇳 中文": {
    title: "在圣何塞找到安全的住宿地点",
    intro: "如果您正在经历无家可归，圣何塞市及其合作伙伴提供紧急避难所、过渡性住房、安全停车项目和支持服务，帮助您找到安全的过夜选择。",
    emergencyTitle: "紧急避难援助",
    emergencyText: "如果您需要立即避难，请拨打 (408) 539-2100，通过 HomeFirst 获得 24/7 的紧急床位。",
    resource1: "紧急床位和避难访问",
    resource1Text: "HomeFirst 全年提供紧急避难服务，包括 Boccardo 接待中心和季节性的夜间取暖地点（OWLs）。",
    resource1Button: "访问 HomeFirst 网站",
    resource2: "过渡性住房社区",
    resource2Text: "提供小型私人单元的临时住房，帮助居民过渡到永久住房，并提供案例管理和支持服务。",
    resource2Button: "了解过渡性住房",
    resource3: "安全停车计划",
    resource3Text: "为居住在车辆中的个人和家庭提供安全指定的停车场，提供洗手间、安全保障和支持服务。",
    resource3Button: "查看安全停车信息",
    resource4: "Boccardo 接待中心",
    resource4Text: "由 HomeFirst 运营的圣克拉拉县最大的紧急无家可归者避难所，提供床位、餐饮、淋浴和案例管理服务。",
    resource4Button: "访问 Boccardo 中心",
    fullSiteButton: "探索圣何塞所有住房计划",
    homeButton: "主页"
  }
};

export default function SleepPage() {
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
              <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
              <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
              <path d="M12 4v6" />
              <path d="M2 18h20" />
            </svg>
            {t.emergencyTitle}
          </h2>
          <p className="text-gray-700 text-base">
            {t.emergencyText}
          </p>
        </div>

        {/* Sleep Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Emergency Beds */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource1}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource1Text}
            </p>
            <a
              href="https://www.homefirstscc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource1Button}
            </a>
          </div>

          {/* Interim Housing */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource2}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource2Text}
            </p>
            <a
              href="https://www.sanjoseca.gov/your-government/departments-offices/housing/homelessness-response/interim-housing-communities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource2Button}
            </a>
          </div>

          {/* Safe Parking */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource3}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource3Text}
            </p>
            <a
              href="https://www.sanjoseca.gov/your-government/departments-offices/housing/homelessness-response/supportive-parking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource3Button}
            </a>
          </div>

          {/* Boccardo Center */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource4}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource4Text}
            </p>
            <a
              href="https://www.homefirstscc.org/emergency-shelters"
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
