"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Building2, CalendarPlus } from "lucide-react";
import { GoldDivider, CornerOrnament } from "./GoldDecorations";

export const WeddingDetails: React.FC = () => {
  // Calendar event helpers
  const handleAddToCalendar = () => {
    // Wedding start: 2026-11-18 18:30 Cairo (UTC+2) -> 16:30 UTC
    // Wedding end: 2026-11-18 23:00 Cairo (UTC+2) -> 21:00 UTC
    const startTime = "20261118T163000Z";
    const endTime = "20261118T210000Z";
    const title = encodeURIComponent("حفل زفاف إبراهيم & نادين");
    const details = encodeURIComponent(
      "يتشرف الأستاذ محمد إبراهيم الدسوقي والأستاذ محمود سامي صالح بدعوتكم لحضور حفل زفاف إبراهيم & نادين في قاعة سولتير - نادي القضاة، الجربي، رأس البر، دمياط."
    );
    const location = encodeURIComponent("سولتير - نادي القضاة، الجربي، رأس البر، دمياط");

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  const detailsList = [
    {
      icon: <Calendar className="w-6 h-6 text-[#E6CC8A]" />,
      title: "التاريخ",
      highlight: "الأربعاء 18 نوفمبر 2026",
      // sub: "18 . 11 . 2026",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E6CC8A]" />,
      title: "الموعد",
      highlight: "الساعة 6:30 مساءً",
      // sub: "بتوقيت القاهرة",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#E6CC8A]" />,
      title: "المكان والقاعة",
      highlight: "سولتير - نادي القضاة",
      // sub: "قاعة سولتير الكبرى",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#E6CC8A]" />,
      title: "العنوان",
      highlight: "الجربي، رأس البر",
      // sub: "دمياط، جمهورية مصر العربية",
    },
  ];

  return (
    <section
      id="wedding-details"
      className="relative w-full max-w-4xl mx-auto px-4 py-12 md:py-16"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <span className="font-serif italic text-sm text-[#C6A15B] tracking-[0.25em] uppercase">
          Wedding Details
        </span>
        <h2 className="text-2xl sm:text-3xl font-arabic font-bold text-[#F8F5EF] mt-1">
          تفاصيل حفل الزفاف
        </h2>
        <GoldDivider className="max-w-xs mx-auto mt-3" />
      </motion.div>

      {/* Grid of Details Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {detailsList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#141414] border border-[#C6A15B]/30 hover:border-[#E6CC8A]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(198,161,91,0.15)] flex flex-col items-center text-center overflow-hidden"
          >
            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <CornerOrnament position="top-left" size={20} />
            </div>
            <div className="absolute bottom-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <CornerOrnament position="bottom-right" size={20} />
            </div>

            {/* Icon Bubble */}
            <div className="w-14 h-14 rounded-full bg-[#1F1F1F] border border-[#C6A15B]/40 flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <span className="text-xs font-arabic text-[#C6A15B] tracking-wider uppercase mb-1">
              {item.title}
            </span>
            <h3 className="text-lg sm:text-xl font-arabic font-bold text-[#F8F5EF] mb-1">
              {item.highlight}
            </h3>
            {/* <p className="text-xs sm:text-sm font-arabic text-[#F8F5EF]/60">
              {item.sub}
            </p> */}
          </motion.div>
        ))}
      </div>

      {/* Add to Calendar Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <button
          type="button"
          onClick={handleAddToCalendar}
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] border border-[#C6A15B]/50 hover:border-[#E6CC8A] text-[#F8F5EF] font-arabic text-sm sm:text-base font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_25px_rgba(198,161,91,0.25)] active:scale-95 transition-all duration-300"
        >
          <CalendarPlus className="w-4 h-4 text-[#E6CC8A] group-hover:rotate-12 transition-transform duration-300" />
          <span>إضافة الموعد إلى تقويمي</span>
        </button>
      </motion.div>
    </section>
  );
};

export default WeddingDetails;
