"use client";

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface MusicPlayerHandle {
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
}

interface MusicPlayerProps {
  isVisible: boolean;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  ({ isVisible }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    // Audio sources to try in order
    const audioSources = [
      "/assets/wedding-music.mp3",
      "/assets/WhatsApp%20Video%202026-06-20%20at%2021.15.44.mp3",
      "/assets/WhatsApp Video 2026-06-20 at 21.15.44.mp3",
    ];

    const playMusic = async () => {
      if (!audioRef.current) return;
      try {
        audioRef.current.muted = false;
        setIsMuted(false);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn("Audio autoplay blocked or failed:", err);
        setIsPlaying(false);
      }
    };

    const pauseMusic = () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const togglePlay = () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    };

    const toggleMute = () => {
      if (!audioRef.current) return;
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    };

    useImperativeHandle(ref, () => ({
      playMusic,
      pauseMusic,
      togglePlay,
      toggleMute,
    }));

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleCanPlay = () => setIsLoaded(true);
      const handleError = (e: Event) => {
        console.warn("Audio element encountered an issue:", e);
        setHasError(true);
      };

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("error", handleError);

      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("error", handleError);
      };
    }, []);

    return (
      <>
        {/* Hidden HTML5 Audio Element */}
        <audio
          ref={audioRef}
          preload="auto"
          loop
          playsInline
        >
          {audioSources.map((src, i) => (
            <source key={i} src={src} type="audio/mpeg" />
          ))}
          عذراً، متصفحك لا يدعم تشغيل الملفات الصوتية.
        </audio>

        {/* Floating Luxury Music Controls */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fixed bottom-5 left-5 z-40 flex items-center gap-2 p-1.5 pl-3 rounded-full bg-[#151515]/90 backdrop-blur-md border border-[#C6A15B]/40 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              dir="rtl"
            >
              {/* Animated Soundwave Equalizer when playing */}
              <div className="flex items-end gap-[3px] h-4 px-1" title={isPlaying ? "الموسيقى تعمل" : "الموسيقى متوقفة"}>
                <span
                  className={`w-[3px] bg-[#E6CC8A] rounded-full transition-all duration-300 ${
                    isPlaying && !isMuted ? "animate-[bounce_0.8s_infinite_ease-in-out]" : "h-1"
                  }`}
                  style={{ height: isPlaying && !isMuted ? "14px" : "4px" }}
                />
                <span
                  className={`w-[3px] bg-[#C6A15B] rounded-full transition-all duration-300 ${
                    isPlaying && !isMuted ? "animate-[bounce_0.6s_infinite_0.2s_ease-in-out]" : "h-2"
                  }`}
                  style={{ height: isPlaying && !isMuted ? "18px" : "6px" }}
                />
                <span
                  className={`w-[3px] bg-[#FFF4D0] rounded-full transition-all duration-300 ${
                    isPlaying && !isMuted ? "animate-[bounce_0.9s_infinite_0.4s_ease-in-out]" : "h-1"
                  }`}
                  style={{ height: isPlaying && !isMuted ? "12px" : "3px" }}
                />
              </div>

              {/* Title / Status text */}
              <span className="text-xs font-arabic text-[#E6CC8A] font-medium hidden sm:inline-block pr-1 select-none">
                {isPlaying ? "موسيقى الزفاف" : "تشغيل الموسيقى"}
              </span>

              {/* Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E6CC8A] to-[#C6A15B] text-[#0B0B0B] hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_8px_rgba(198,161,91,0.4)]"
                aria-label={isPlaying ? "إيقاف الموسيقى مؤقتاً" : "تشغيل الموسيقى"}
                title={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
              >
                {isPlaying ? <Pause size={14} className="fill-current" /> : <Play size={14} className="fill-current mr-0.5" />}
              </button>

              {/* Mute / Unmute Button */}
              <button
                type="button"
                onClick={toggleMute}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#222222] text-[#E6CC8A] hover:bg-[#2e2e2e] hover:text-[#FFF4D0] active:scale-95 transition-all border border-[#C6A15B]/30"
                aria-label={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
                title={isMuted ? "إلغاء الكتم" : "كتم الصوت"}
              >
                {isMuted ? <VolumeX size={14} className="text-red-400" /> : <Volume2 size={14} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
);

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
