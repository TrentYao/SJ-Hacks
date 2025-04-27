"use client";

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

const translations = {
  "🇺🇸 English": {
   title: "Find Free and Affordable Medical Care in San José",
   intro: "San José offers free and low-cost medical services for individuals and families experiencing homelessness, low income, or lack of insurance.",
   emergencyTitle: "Emergency Medical Help",
   emergencyText: "If you are experiencing a medical emergency, call 911 immediately. For urgent non-emergency health help, call the Valley Connection Line at 1-800-704-0900.",
   resource1: "Gardner Health Services",
   resource1Text: "Community clinics offering primary medical care, dental care, and behavioral health services to low-income individuals and families.",
   resource1Button: "Visit Gardner",
   resource2: "Valley Homeless Healthcare Program (VHHP)",
   resource2Text: "Mobile clinics providing urgent medical care, mental health services, and referrals to homeless individuals across Santa Clara County.",
   resource2Button: "Visit VHHP",
   resource3: "Healthier Kids Foundation",
   resource3Text: "Connects low-income families and children with free medical, dental, and vision screening services across Santa Clara County.",
   resource3Button: "Visit Healthier Kids",
   resource4: "Valley Medical Center Downtown Clinic",
   resource4Text: "Provides urgent care, mental health support, and case management for homeless and uninsured residents at 777 East Santa Clara Street, San José.",
   resource4Button: "Visit Downtown Clinic",
   fullSiteButton: "Explore Santa Clara County Health Services",
   homeButton: "Home",
 },
 "🇪🇸 Español": {
   title: "Encuentra Atención Médica Gratuita y Asequible en San José",
   intro: "San José ofrece servicios médicos gratuitos y de bajo costo para individuos y familias que experimentan falta de vivienda, bajos ingresos o falta de seguro médico.",
   emergencyTitle: "Ayuda Médica de Emergencia",
   emergencyText: "Si está experimentando una emergencia médica, llame al 911 de inmediato. Para ayuda médica urgente no de emergencia, llame a la Línea de Conexión del Valle al 1-800-704-0900.",
   resource1: "Servicios de Salud Gardner",
   resource1Text: "Clínicas comunitarias que ofrecen atención médica primaria, atención dental y servicios de salud mental para individuos y familias de bajos ingresos.",
   resource1Button: "Visitar Gardner",
   resource2: "Programa de Atención Médica para Personas sin Hogar del Valle (VHHP)",
   resource2Text: "Clínicas móviles que brindan atención médica urgente, servicios de salud mental y referencias a personas sin hogar en todo el Condado de Santa Clara.",
   resource2Button: "Visitar VHHP",
   resource3: "Fundación Healthier Kids",
   resource3Text: "Conecta a familias y niños de bajos ingresos con servicios gratuitos de detección médica, dental y visual en todo el Condado de Santa Clara.",
   resource3Button: "Visitar Healthier Kids",
   resource4: "Clínica del Centro de Salud del Valle en el Centro de la Ciudad",
   resource4Text: "Ofrece atención urgente, apoyo de salud mental y gestión de casos para personas sin hogar y sin seguro en 777 East Santa Clara Street, San José.",
   resource4Button: "Visitar Clínica Downtown",
   fullSiteButton: "Explorar Servicios de Salud del Condado de Santa Clara",
   homeButton: "Inicio"
 },
 "🇻🇳 Tiếng Việt": {
   title: "Tìm Dịch Vụ Y Tế Miễn Phí và Giá Rẻ tại San José",
   intro: "San José cung cấp dịch vụ y tế miễn phí và chi phí thấp cho cá nhân và gia đình có hoàn cảnh vô gia cư, thu nhập thấp hoặc không có bảo hiểm.",
   emergencyTitle: "Trợ Giúp Y Tế Khẩn Cấp",
   emergencyText: "Nếu bạn đang gặp tình trạng khẩn cấp về y tế, hãy gọi 911 ngay lập tức. Để được trợ giúp y tế không khẩn cấp, hãy gọi Đường dây Kết nối Valley theo số 1-800-704-0900.",
   resource1: "Dịch Vụ Y Tế Gardner",
   resource1Text: "Các phòng khám cộng đồng cung cấp chăm sóc y tế cơ bản, chăm sóc nha khoa và dịch vụ sức khỏe tâm thần cho cá nhân và gia đình thu nhập thấp.",
   resource1Button: "Ghé Thăm Gardner",
   resource2: "Chương Trình Y Tế Cho Người Vô Gia Cư Valley (VHHP)",
   resource2Text: "Các phòng khám di động cung cấp chăm sóc y tế khẩn cấp, dịch vụ sức khỏe tâm thần và giới thiệu cho người vô gia cư ở Hạt Santa Clara.",
   resource2Button: "Ghé Thăm VHHP",
   resource3: "Tổ Chức Healthier Kids",
   resource3Text: "Kết nối các gia đình và trẻ em thu nhập thấp với dịch vụ kiểm tra y tế, nha khoa và thị lực miễn phí trên toàn Hạt Santa Clara.",
   resource3Button: "Ghé Thăm Healthier Kids",
   resource4: "Phòng Khám Trung Tâm Valley Medical Center",
   resource4Text: "Cung cấp chăm sóc khẩn cấp, hỗ trợ sức khỏe tâm thần và quản lý hồ sơ cho người vô gia cư và không có bảo hiểm tại 777 East Santa Clara Street, San José.",
   resource4Button: "Ghé Thăm Phòng Khám Downtown",
   fullSiteButton: "Khám Phá Dịch Vụ Y Tế của Hạt Santa Clara",
   homeButton: "Trang Chủ"
 },
 "🇨🇳 中文": {
   title: "在圣荷西找到免费的和负担得起的医疗服务",
   intro: "圣荷西为经历无家可归、低收入或缺乏保险的个人和家庭提供免费的和低成本的医疗服务。",
   emergencyTitle: "紧急医疗帮助",
   emergencyText: "如果您正在经历医疗紧急情况，请立即拨打911。对于紧急非紧急健康帮助，请拨打Valley Connection Line，电话是1-800-704-0900。",
   resource1: "Gardner健康服务",
   resource1Text: "为低收入个人和家庭提供初级医疗护理、牙科护理和心理健康服务的社区诊所。",
   resource1Button: "访问Gardner",
   resource2: "山谷无家可归者医疗保健计划（VHHP）",
   resource2Text: "为圣克拉拉县的无家可归者提供紧急医疗护理、心理健康服务和转介的流动诊所。",
   resource2Button: "访问VHHP",
   resource3: "更健康儿童基金会",
   resource3Text: "将低收入家庭和儿童与圣克拉拉县各地的免费医疗、牙科和视力筛查服务连接起来。",
   resource3Button: "访问更健康儿童",
   resource4: "山谷医疗中心市中心诊所",
   resource4Text: "为无家可归者和没有保险的居民提供777 East Santa Clara Street, San José的紧急护理、心理健康支持和个案管理。",
   resource4Button: "访问市中心诊所",
   fullSiteButton: "探索圣克拉拉县卫生服务",
   homeButton: "主页"
 },

};

export default function MedicalPage() {
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
              <path d="M12 11v4" />
              <path d="M14 13h-4" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M18 6v14" />
              <path d="M6 6v14" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            {t.emergencyTitle}
          </h2>
          <p className="text-gray-700 text-base">
            {t.emergencyText}
          </p>
        </div>

        {/* Medical Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Gardner Health Services */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource1}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource1Text}
            </p>
            <a
              href="https://gardnerhealthservices.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource1Button}
            </a>
          </div>

          {/* VHHP */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource2}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource2Text}
            </p>
            <a
              href="https://scvmc.scvh.org/hospitals-clinics/valley-homeless-health-care-program-vhhp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource2Button}
            </a>
          </div>

          {/* Healthier Kids */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource3}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource3Text}
            </p>
            <a
              href="https://hkidsf.org/our-programs/screenings/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition transform hover:scale-105"
            >
              {t.resource3Button}
            </a>
          </div>

          {/* Downtown Clinic */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-inner hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {t.resource4}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.resource4Text}
            </p>
            <a
              href="https://scvmc.scvh.org/hospitals-clinics/valley-health-center-downtown-san-jose"
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
            href="https://health.sccgov.org/"
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
