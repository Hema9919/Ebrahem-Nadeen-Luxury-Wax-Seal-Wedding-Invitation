"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Monogram from "./Monogram";

interface WaxSealProps {
  onClick?: () => void;
  isBroken?: boolean;
  size?: number;
  className?: string;
  disabled?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  onClick,
  isBroken = false,
  size = 110,
  className = "",
  disabled = false,
}) => {
  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <AnimatePresence mode="wait">
        {!isBroken ? (
          <motion.button
            key="intact-seal"
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label="ختم الشمع الملكي لفتح الدعوة"
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.96 }}
            className={`group relative flex items-center justify-center rounded-full transition-shadow duration-300 focus:outline-none ${
              disabled ? "cursor-default" : "cursor-pointer"
            }`}
            style={{
              width: size,
              height: size,
              filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.75)) drop-shadow(0 4px 10px rgba(60,10,18,0.5))",
            }}
          >
            {/* Organic Wax Outer Drips / Irregular Shape via SVG */}
            <svg
              width={size}
              height={size}
              viewBox="0 0 140 140"
              className="absolute inset-0 z-0 overflow-visible"
            >
              <defs>
                {/* Radial gradient for realistic convex wax body */}
                <radialGradient id="waxBodyGradient" cx="38%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#871d2b" />
                  <stop offset="30%" stopColor="#66121f" />
                  <stop offset="65%" stopColor="#430811" />
                  <stop offset="90%" stopColor="#280307" />
                  <stop offset="100%" stopColor="#1a0204" />
                </radialGradient>

                {/* Inner Bevel Gradient */}
                <radialGradient id="waxInnerLip" cx="50%" cy="50%" r="50%">
                  <stop offset="70%" stopColor="#40070f" stopOpacity="0" />
                  <stop offset="85%" stopColor="#250307" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8a1d2d" stopOpacity="0.4" />
                </radialGradient>

                {/* Top Highlight Shine */}
                <linearGradient id="waxSpecularShine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
                </linearGradient>

                {/* Gold Dust Shimmer Filter */}
                <filter id="goldDustGlow">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Organic molten wax seal boundary */}
              <path
                d="M 70 8 
                   C 90 6, 106 14, 120 28 
                   C 134 42, 138 60, 135 80 
                   C 132 100, 122 118, 105 128 
                   C 88 138, 68 137, 50 134 
                   C 32 131, 16 122, 10 102 
                   C 4 82, 8 62, 18 44 
                   C 28 26, 48 10, 70 8 Z"
                fill="url(#waxBodyGradient)"
              />

              {/* Specular curved gloss over top lip */}
              <path
                d="M 30 35 
                   C 45 18, 95 18, 110 35 
                   C 95 24, 45 24, 30 35 Z"
                fill="url(#waxSpecularShine)"
              />

              {/* Raised Circular Rim */}
              <circle
                cx="70"
                cy="70"
                r="50"
                fill="none"
                stroke="url(#waxSpecularShine)"
                strokeWidth="4"
                strokeOpacity="0.6"
              />
              <circle
                cx="70"
                cy="70"
                r="48"
                fill="none"
                stroke="#250307"
                strokeWidth="2.5"
                strokeOpacity="0.8"
              />

              {/* Pressed inner bed */}
              <circle cx="70" cy="70" r="46" fill="#38060e" />
              <circle cx="70" cy="70" r="46" fill="url(#waxInnerLip)" />

              {/* Subtle gold leaf dust flecks */}
              <circle cx="48" cy="38" r="1.2" fill="#E6CC8A" opacity="0.75" />
              <circle cx="92" cy="42" r="1.5" fill="#E6CC8A" opacity="0.6" />
              <circle cx="98" cy="85" r="1" fill="#C6A15B" opacity="0.7" />
              <circle cx="42" cy="98" r="1.3" fill="#E6CC8A" opacity="0.8" />
              <circle cx="68" cy="115" r="1.1" fill="#C6A15B" opacity="0.65" />
              <circle cx="35" cy="65" r="1" fill="#E6CC8A" opacity="0.7" />
            </svg>

            {/* Central Monogram inside the wax bed */}
            <div className="relative z-10 flex items-center justify-center">
              <Monogram variant="seal" size={size * 0.7} />
            </div>

            {/* Hover Gold Aura */}
            <div className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle,rgba(230,204,138,0.3)_0%,transparent_70%)] pointer-events-none" />
          </motion.button>
        ) : (
          /* Broken / Cracking animation state */
          <motion.div
            key="broken-seal"
            className="relative flex items-center justify-center pointer-events-none"
            style={{ width: size, height: size }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.15, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Left Crack Half */}
            <motion.div
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{ x: -28, y: -10, rotate: -18, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 overflow-hidden w-1/2 h-full"
            >
              <div
                className="w-full h-full flex items-center"
                style={{
                  width: size,
                  filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.8))",
                }}
              >
                <div
                  className="rounded-full bg-gradient-to-br from-[#871d2b] via-[#430811] to-[#1a0204] flex items-center justify-center"
                  style={{ width: size, height: size }}
                >
                  <Monogram variant="seal" size={size * 0.7} />
                </div>
              </div>
            </motion.div>

            {/* Right Crack Half */}
            <motion.div
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{ x: 28, y: 12, rotate: 18, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 overflow-hidden w-1/2 h-full"
            >
              <div
                className="w-full h-full flex items-center justify-end"
                style={{
                  width: size,
                  marginLeft: -size / 2,
                  filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.8))",
                }}
              >
                <div
                  className="rounded-full bg-gradient-to-br from-[#871d2b] via-[#430811] to-[#1a0204] flex items-center justify-center"
                  style={{ width: size, height: size }}
                >
                  <Monogram variant="seal" size={size * 0.7} />
                </div>
              </div>
            </motion.div>

            {/* Golden Sparkle Core */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#FFF5D9_0%,#C6A15B_50%,transparent_80%)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WaxSeal;
