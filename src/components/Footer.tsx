"use client";

import React from "react";
import Monogram from "./Monogram";
import { GoldDivider } from "./GoldDecorations";
import { MailOpen } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  onReplayEnvelope?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayEnvelope }) => {
  return (
    <footer className="relative w-full border-t border-[#C6A15B]/20 bg-[#0B0B0B] py-12 px-4 mt-12 text-center" dir="rtl">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
      <Image
                src="/assets/EN.png"
                alt="إبراهيم & نادين"
                width={20}
                height={20}
                className="w-full h-auto object-cover object-top max-h-[460px] filter contrast-[1.02] brightness-95 hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
        <p className="font-arabic text-lg sm:text-xl font-medium text-[#F8F5EF] mt-4 mb-1">
          نسعد بحضوركم ومشاركتكم فرحتنا
        </p>

        <p className="font-serif italic text-base text-[#C6A15B] tracking-widest mt-1">
          Ebrahem & Nadeen • 2026
        </p>

        <GoldDivider className="max-w-xs my-6" />

        {onReplayEnvelope && (
          <button
            type="button"
            onClick={onReplayEnvelope}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C6A15B]/40 hover:border-[#E6CC8A] text-xs font-arabic text-[#E6CC8A] hover:bg-[#1A1A1A] transition-all duration-300"
          >
            <MailOpen className="w-3.5 h-3.5" />
            <span>مشاهدة فتح الظرف الملكي مرة أخرى</span>
          </button>
        )}

    
      </div>
    </footer>
  );
};

export default Footer;
