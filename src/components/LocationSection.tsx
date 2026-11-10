"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { GoldDivider, CornerOrnament } from "./GoldDecorations";

export const LocationSection: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=31.493752515202,31.826334";
  const embedMapUrl =
    "https://maps.google.com/maps?q=31.493752515202,31.826334&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      id="location-section"
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
          Venue & Location
        </span>
        <h2 className="text-2xl sm:text-3xl font-arabic font-bold text-[#F8F5EF] mt-1">
          موقع الحفل
        </h2>
        <GoldDivider className="max-w-xs mx-auto mt-3" />
      </motion.div>

      {/* Main Location Box */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#141414] border border-[#C6A15B]/35 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Corner Ornaments */}
        <div className="absolute top-3 left-3 pointer-events-none opacity-50">
          <CornerOrnament position="top-left" size={24} />
        </div>
        <div className="absolute top-3 right-3 pointer-events-none opacity-50">
          <CornerOrnament position="top-right" size={24} />
        </div>

        {/* Venue Info Banner */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F1F1F] border border-[#C6A15B]/40 mb-3 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <MapPin className="w-6 h-6 text-[#E6CC8A]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-arabic font-bold text-[#F8F5EF]">
            سولتير - نادي القضاة
          </h3>
          <p className="text-sm sm:text-base font-arabic text-[#E6CC8A] mt-1">
            الجربي، رأس البر، دمياط
          </p>
        </div>

        {/* Embedded Google Map Frame */}
        <div className="relative w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden border border-[#C6A15B]/30 shadow-inner bg-[#1A1A1A]">
          <iframe
            title="موقع حفل زفاف إبراهيم & نادين"
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Action Button: عرض الموقع على الخريطة */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#E6CC8A] to-[#C6A15B] text-[#0B0B0B] font-arabic font-bold text-base shadow-[0_4px_25px_rgba(198,161,91,0.35)] hover:shadow-[0_6px_35px_rgba(198,161,91,0.5)] active:scale-98 transition-all duration-300"
          >
            <Navigation className="w-5 h-5 fill-current group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>عرض الموقع على الخريطة</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
