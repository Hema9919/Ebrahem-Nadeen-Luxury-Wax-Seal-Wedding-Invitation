"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Monogram from "./Monogram";
import { GoldDivider, CornerOrnament, ArabesqueHeader } from "./GoldDecorations";

interface InvitationCardProps {
  className?: string;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({ className = "" }) => {
  return (
    <section
      id="invitation-card"
      className={`relative w-full max-w-3xl mx-auto px-4 py-8 md:py-16 ${className}`}
      dir="rtl"
    >
      {/* Outer Card Glow & Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C6A15B]/10 via-transparent to-[#C6A15B]/5 blur-3xl pointer-events-none" />

      {/* Main Luxury Invitation Card Surface */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#131313] border border-[#C6A15B]/40 rounded-2xl p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        {/* Subtle Luxury Paper Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#E6CC8A 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Inner Gold Foil Frame */}
        <div className="absolute inset-3 sm:inset-5 border border-[#C6A15B]/30 rounded-xl pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 border border-[#E6CC8A]/15 rounded-lg pointer-events-none" />

        {/* Four Corner Royal Ornaments */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <CornerOrnament position="top-left" size={32} />
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <CornerOrnament position="top-right" size={32} />
        </div>
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <CornerOrnament position="bottom-left" size={32} />
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <CornerOrnament position="bottom-right" size={32} />
        </div>

        {/* Header Monogram & Arabesque */}
        <div className="flex flex-col items-center justify-center mb-6">
  <Image
                src="/assets/EN.png"
                alt="إبراهيم & نادين"
                width={45}
                height={60}
                className="w-full h-auto object-cover object-top max-h-[460px] filter contrast-[1.02] brightness-95 hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />          <ArabesqueHeader className="opacity-80 mt-1" />
        </div>

        {/* Fathers' Names Section (Groom's father first, Bride's father second, NO father labels) */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-arabic font-semibold text-[#F8F5EF] tracking-wide leading-relaxed">
            الأستاذ محمد إبراهيم الدسوقي
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-arabic font-semibold text-[#F8F5EF] tracking-wide leading-relaxed">
            الأستاذ محمود سامي صالح
          </h2>
        </div>

        {/* Invitation Sentence */}
        <div className="text-center my-6">
          <p className="text-base sm:text-lg md:text-xl font-arabic text-[#E6CC8A] tracking-wider font-light">
            يتشرفان بدعوتكم لحضور حفل زفاف
          </p>
        </div>

        {/* Couple Names - Main Visual Highlight */}
        <div className="my-8 py-4 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            {/* Groom's Name */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-arabic font-bold tracking-tight bg-gradient-to-b from-[#FFF5DA] via-[#E6CC8A] to-[#C6A15B] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(198,161,91,0.3)]">
              إبراهيم
            </span>

            {/* Ampersand in royal styling */}
            <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#C6A15B] opacity-90 select-none px-2">
              &
            </span>

            {/* Bride's Name */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-arabic font-bold tracking-tight bg-gradient-to-b from-[#FFF5DA] via-[#E6CC8A] to-[#C6A15B] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(198,161,91,0.3)]">
              نادين
            </span>
          </div>

          <GoldDivider className="mt-8 mb-6 max-w-sm mx-auto" />
        </div>

        {/* Official Couple Photo from Assets */}
        <div className="relative mt-8 mb-4 max-w-md mx-auto">
          {/* Decorative Arch / Royal Photo Frame */}
          <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#C6A15B]/40 via-[#222222] to-[#C6A15B]/30 shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
            <div className="relative overflow-hidden rounded-xl bg-[#191919] border border-[#E6CC8A]/25">
              <Image
                src="/assets/couple.png"
                alt="إبراهيم & نادين"
                width={500}
                height={650}
                className="w-full h-auto object-cover object-top max-h-[460px] filter contrast-[1.02] brightness-95 hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />

              {/* Subtle Warm Gradient Vignette at bottom of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Small Gold Seal Emblem on bottom border of photo frame */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#131313] px-3 py-1 rounded-full border border-[#C6A15B]/60 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              <span className="text-xs font-serif italic text-[#E6CC8A] tracking-widest uppercase">
                E & N • 2026
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationCard;
