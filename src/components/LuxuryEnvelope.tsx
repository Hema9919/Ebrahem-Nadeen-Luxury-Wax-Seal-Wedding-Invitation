"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import WaxSeal from "./WaxSeal";
import Monogram from "./Monogram";
import { CornerOrnament } from "./GoldDecorations";

interface LuxuryEnvelopeProps {
  onOpenStart: () => void;
  onOpenComplete: () => void;
}

export const LuxuryEnvelope: React.FC<LuxuryEnvelopeProps> = ({
  onOpenStart,
  onOpenComplete,
}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isSealBroken, setIsSealBroken] = useState(false);
  const [isOpeningFlap, setIsOpeningFlap] = useState(false);
  const [isSlidingCard, setIsSlidingCard] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenEnvelope = () => {
    if (isStarted) return;
    setIsStarted(true);

    // 1. Immediately notify parent to unlock audio on direct user click gesture
    onOpenStart();

    // 2. Break seal & fire confetti
    setIsSealBroken(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C6A15B", "#E6CC8A", "#FFF4D0", "#5C121D", "#9A7B38"],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.95,
      });
    } catch (e) {
      // Graceful fallback
    }

    // 3. Flap unfolds backward in 3D perspective
    setTimeout(() => {
      setIsOpeningFlap(true);
    }, 450);

    // 4. Invitation card slides gracefully out of envelope pocket
    setTimeout(() => {
      setIsSlidingCard(true);
    }, 950);

    // 5. Complete animation and smoothly transition to full page
    setTimeout(() => {
      setIsDismissed(true);
      onOpenComplete();
    }, 2200);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          key="envelope-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B] p-4 overflow-hidden select-none"
          dir="rtl"
        >
          {/* Ambient Royal Background Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5C121D]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Subtle Calligraphy Crest */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center mb-6 text-center"
          >
            <span className="font-serif italic text-sm tracking-[0.3em] text-[#C6A15B]/80 uppercase">
              Wedding Invitation
            </span>
            <h1 className="text-xl sm:text-2xl font-arabic font-medium text-[#F8F5EF] mt-1 tracking-wide">
              دعوة زفاف إبراهيم & نادين
            </h1>
          </motion.div>

          {/* 3D Envelope Wrapper */}
          <div
            className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[1.5/1] cursor-pointer"
            style={{ perspective: "1400px" }}
            onClick={handleOpenEnvelope}
          >
            {/* The Envelope Base Container */}
            <div className="relative w-full h-full rounded-xl bg-[#141414] border border-[#C6A15B]/35 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(198,161,91,0.15)] overflow-hidden">
              {/* Inner Foil Border Accent */}
              <div className="absolute inset-3 border border-[#E6CC8A]/20 rounded-lg pointer-events-none" />

              {/* Envelope Inner Liner (Warm luxury matte texture) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#181818] to-[#101010]" />

              {/* The Invitation Card inside the Envelope (slides upward out) */}
              <motion.div
                className="absolute inset-x-6 bottom-4 top-4 bg-[#1B1B1B] border border-[#C6A15B]/40 rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 text-center z-10"
                animate={
                  isSlidingCard
                    ? { y: -220, scale: 1.05, opacity: 0.95 }
                    : { y: 0, scale: 1, opacity: 1 }
                }
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="border border-[#C6A15B]/25 rounded p-4 w-full h-full flex flex-col items-center justify-center">
                  <Monogram variant="gold" size={54} />
                  <p className="text-xs font-arabic text-[#E6CC8A] mt-2 tracking-widest">
                    دعوة زفاف ملكية
                  </p>
                  <p className="text-sm font-arabic font-semibold text-[#F8F5EF] mt-1">
                    إبراهيم & نادين
                  </p>
                </div>
              </motion.div>

              {/* Envelope Lower Flaps (Left, Right, Bottom Triangles) */}
              {/* Left Flap */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 50% 55%)",
                  background: "linear-gradient(135deg, #171717 0%, #111111 100%)",
                  boxShadow: "inset -2px 0 10px rgba(0,0,0,0.6)",
                }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none border-l border-t border-[#C6A15B]/25"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 50% 55%)",
                }}
              />

              {/* Right Flap */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 50% 55%)",
                  background: "linear-gradient(-135deg, #171717 0%, #111111 100%)",
                  boxShadow: "inset 2px 0 10px rgba(0,0,0,0.6)",
                }}
              />

              {/* Bottom Flap */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
                  background: "linear-gradient(0deg, #1a1a1a 0%, #121212 100%)",
                  boxShadow: "0 -4px 15px rgba(0,0,0,0.7)",
                }}
              />

              {/* Corner Ornaments on Envelope Pocket */}
              <div className="absolute bottom-2 left-2 z-25 pointer-events-none">
                <CornerOrnament position="bottom-left" size={24} />
              </div>
              <div className="absolute bottom-2 right-2 z-25 pointer-events-none">
                <CornerOrnament position="bottom-right" size={24} />
              </div>

              {/* Top Flap (Triangular flap that opens with 3D rotation) */}
              <motion.div
                className="absolute top-0 inset-x-0 h-1/2 z-30"
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                }}
                animate={
                  isOpeningFlap
                    ? { rotateX: 180, zIndex: 5 }
                    : { rotateX: 0, zIndex: 30 }
                }
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    background: "linear-gradient(180deg, #1f1f1f 0%, #131313 100%)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.85)",
                  }}
                >
                  {/* Flap Gold Piping Lines */}
                  <div
                    className="absolute inset-0 border-b border-[#C6A15B]/40"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    }}
                  />
                  <div className="absolute top-2 inset-x-0 flex justify-center opacity-60">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#E6CC8A]" />
                  </div>
                </div>
              </motion.div>

              {/* Realistic Wax Seal (Positioned over the tip of the top flap) */}
              <div
                className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <WaxSeal
                  isBroken={isSealBroken}
                  onClick={handleOpenEnvelope}
                  size={105}
                />
              </div>
            </div>
          </div>

          {/* Arabic Click Instruction with subtle breathing shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center mt-8 text-center cursor-pointer"
            onClick={handleOpenEnvelope}
          >
            <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#161616]/80 border border-[#C6A15B]/40 shadow-[0_0_20px_rgba(198,161,91,0.2)] animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-ping" />
              <span className="font-arabic font-medium text-sm sm:text-base text-[#F8F5EF] tracking-wider">
                اضغط لفتح دعوتنا
              </span>
              <span className="text-[#E6CC8A] font-serif text-sm">✦</span>
            </div>
            <p className="text-xs text-[#E6CC8A]/70 font-arabic mt-2">
              Wednesday, November 18, 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LuxuryEnvelope;
