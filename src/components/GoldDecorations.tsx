"use client";

import React from "react";

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C6A15B] to-[#E6CC8A] opacity-70" />
      <div className="flex items-center gap-1.5 text-[#C6A15B]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C6A15B] opacity-75" />
        <span className="w-2.5 h-2.5 rotate-45 bg-[#E6CC8A] shadow-[0_0_8px_rgba(230,204,138,0.8)]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C6A15B] opacity-75" />
      </div>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C6A15B] to-[#E6CC8A] opacity-70" />
    </div>
  );
};

export const CornerOrnament: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  className?: string;
}> = ({ position, size = 36, className = "" }) => {
  const rotation =
    position === "top-left"
      ? ""
      : position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : "-rotate-90";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`text-[#C6A15B] opacity-80 ${rotation} ${className}`}
    >
      {/* Outer corner line */}
      <path
        d="M 2 38 L 2 12 C 2 6.5, 6.5 2, 12 2 L 38 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Inner corner line */}
      <path
        d="M 6 36 L 6 14 C 6 9.5, 9.5 6, 14 6 L 36 6"
        stroke="#E6CC8A"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      {/* Corner leaf / diamond motif */}
      <circle cx="12" cy="12" r="2.5" fill="#E6CC8A" />
      <path d="M 2 2 L 6 6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
};

export const ArabesqueHeader: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-3 ${className}`}>
      <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
        <path
          d="M 10 12 L 60 12 C 70 12, 75 4, 85 4 C 88 4, 90 8, 90 12 C 90 8, 92 4, 95 4 C 105 4, 110 12, 120 12 L 170 12"
          stroke="url(#arabesqueGold)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="90" cy="12" r="3.5" fill="url(#arabesqueGold)" />
        <circle cx="80" cy="8" r="1.5" fill="#E6CC8A" opacity="0.8" />
        <circle cx="100" cy="8" r="1.5" fill="#E6CC8A" opacity="0.8" />
        <defs>
          <linearGradient id="arabesqueGold" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C6A15B" stopOpacity="0" />
            <stop offset="25%" stopColor="#C6A15B" />
            <stop offset="50%" stopColor="#FFF4D0" />
            <stop offset="75%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
