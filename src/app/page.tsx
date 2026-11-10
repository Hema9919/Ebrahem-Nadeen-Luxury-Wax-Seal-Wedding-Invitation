"use client";

import React, { useState, useRef } from "react";
import LuxuryEnvelope from "@/components/LuxuryEnvelope";
import InvitationCard from "@/components/InvitationCard";
import WeddingDetails from "@/components/WeddingDetails";
import CountdownTimer from "@/components/CountdownTimer";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import MusicPlayer, { MusicPlayerHandle } from "@/components/MusicPlayer";

export default function WeddingPage() {
  const [envelopeKey, setEnvelopeKey] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const [showMusicControls, setShowMusicControls] = useState(false);
  const musicRef = useRef<MusicPlayerHandle | null>(null);

  // Triggered on the very first user interaction with the envelope/wax seal
  const handleOpenStart = () => {
    setShowMusicControls(true);
    if (musicRef.current) {
      musicRef.current.playMusic();
    }
  };

  // Triggered when the envelope 3D animation finishes and the card has slid out
  const handleOpenComplete = () => {
    setIsOpened(true);
  };

  const handleReplayEnvelope = () => {
    setIsOpened(false);
    setEnvelopeKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F8F5EF] overflow-x-hidden selection:bg-[#C6A15B] selection:text-[#0B0B0B]">
      {/* Background Ambient Luxury Light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(198,161,91,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-[35%] left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(92,18,29,0.04)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(198,161,91,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Opening Envelope Experience (Full-screen overlay until opened) */}
      {!isOpened && (
        <LuxuryEnvelope
          key={envelopeKey}
          onOpenStart={handleOpenStart}
          onOpenComplete={handleOpenComplete}
        />
      )}

      {/* Floating Music Controls (visible once user interacts & opens invitation) */}
      <MusicPlayer
        ref={musicRef}
        isVisible={showMusicControls}
      />

      {/* Main Wedding Content Container */}
      <div
        className={`relative z-10 w-full transition-opacity duration-1000 ${
          isOpened ? "opacity-100" : "opacity-0 pointer-events-none h-screen overflow-hidden"
        }`}
      >
        {/* 1. Official Wedding Invitation Card Section */}
        <InvitationCard />

        {/* 2. Wedding Details Section */}
        <WeddingDetails />

        {/* 3. Live Countdown Section */}
        <CountdownTimer />

        {/* 4. Venue & Map Location Section */}
        <LocationSection />

        {/* 5. Royal Footer */}
        <Footer onReplayEnvelope={handleReplayEnvelope} />
      </div>
    </main>
  );
}
