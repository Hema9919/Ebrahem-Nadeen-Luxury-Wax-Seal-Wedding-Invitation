"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoldDivider, CornerOrnament } from "./GoldDecorations";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const CountdownTimer: React.FC = () => {
  // Target: November 18, 2026 at 6:30 PM Africa/Cairo time (UTC+2)
  const targetDateMs = new Date("2026-11-18T18:30:00+02:00").getTime();

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeRemaining => {
      const now = new Date().getTime();
      const difference = targetDateMs - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateMs]);

  const units = [
    { label: "يوم", value: timeLeft.days, en: "Days" },
    { label: "ساعة", value: timeLeft.hours, en: "Hours" },
    { label: "دقيقة", value: timeLeft.minutes, en: "Minutes" },
    { label: "ثانية", value: timeLeft.seconds, en: "Seconds" },
  ];

  return (
    <section
      id="countdown-section"
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
          Countdown
        </span>
        <h2 className="text-2xl sm:text-3xl font-arabic font-bold text-[#F8F5EF] mt-1">
          العد التنازلي للموعد المنتظر
        </h2>
        <GoldDivider className="max-w-xs mx-auto mt-3" />
      </motion.div>

      {/* Countdown Card Box */}
      <div className="relative bg-[#141414] border border-[#C6A15B]/35 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,161,91,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="absolute top-3 left-3 pointer-events-none opacity-60">
          <CornerOrnament position="top-left" size={24} />
        </div>
        <div className="absolute top-3 right-3 pointer-events-none opacity-60">
          <CornerOrnament position="top-right" size={24} />
        </div>
        <div className="absolute bottom-3 left-3 pointer-events-none opacity-60">
          <CornerOrnament position="bottom-left" size={24} />
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none opacity-60">
          <CornerOrnament position="bottom-right" size={24} />
        </div>

        {timeLeft.isExpired ? (
          <div className="text-center py-8">
            <h3 className="text-2xl sm:text-3xl font-arabic font-bold text-[#E6CC8A] mb-2">
              اليوم نلتقي لنحتفل معاً!
            </h3>
            <p className="text-base font-arabic text-[#F8F5EF]/80">
              أهلاً بكم في حفل زفاف إبراهيم & نادين
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {units.map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1B1B1B] border border-[#C6A15B]/25 shadow-inner"
              >
                {/* Number Display */}
                <div className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DA] via-[#E6CC8A] to-[#C6A15B] tracking-tight">
                  {mounted ? String(unit.value).padStart(2, "0") : "00"}
                </div>

                {/* Unit Labels in Arabic & English */}
                <span className="font-arabic font-semibold text-sm sm:text-base text-[#F8F5EF] mt-2">
                  {unit.label}
                </span>
                <span className="font-serif italic text-[11px] text-[#C6A15B]/70 tracking-widest uppercase">
                  {unit.en}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-6 text-xs text-[#E6CC8A]/75 font-arabic">
          18 نوفمبر 2026 • 6:30 مساءً بتوقيت القاهرة
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
