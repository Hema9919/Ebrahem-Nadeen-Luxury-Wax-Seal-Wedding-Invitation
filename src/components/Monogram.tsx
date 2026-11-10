"use client";

import React from "react";

interface MonogramProps {
  className?: string;
  variant?: "seal" | "gold" | "subtle";
  size?: number;
}

export const Monogram: React.FC<MonogramProps> = ({
  className = "",
  variant = "gold",
  size = 120,
}) => {
  // Variant color definitions
  const isSeal = variant === "seal";
  const isSubtle = variant === "subtle";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="E & N Monogram"
    >
      <defs>
        {/* Luxury Gold Linear Gradient */}
        <linearGradient id="monogramGold" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="25%" stopColor="#E6CC8A" />
          <stop offset="55%" stopColor="#C6A15B" />
          <stop offset="85%" stopColor="#9A7B38" />
          <stop offset="100%" stopColor="#E6CC8A" />
        </linearGradient>

        {/* Seal Debossed/Engraved Gradient */}
        <linearGradient id="sealEngraved" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#250408" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#3d0810" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5a0f1b" stopOpacity="0.85" />
        </linearGradient>

        {/* Seal Golden Dust Highlight Gradient */}
        <linearGradient id="sealGoldHighlight" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5E3B3" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7E5F22" stopOpacity="0.5" />
        </linearGradient>

        {/* Deboss Filter for Wax Seal */}
        <filter id="waxDeboss" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-1" dy="-1" stdDeviation="1.2" floodColor="#1a0205" floodOpacity="0.9" />
          <stop offset="1" />
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodColor="#851929" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Decorative Outer Wreath / Circular Crest */}
      <g
        stroke={isSeal ? "url(#sealGoldHighlight)" : isSubtle ? "#C6A15B" : "url(#monogramGold)"}
        strokeWidth={isSeal ? "1.8" : "1.5"}
        strokeOpacity={isSubtle ? "0.35" : "0.9"}
        fill="none"
      >
        {/* Outer dotted circle */}
        <circle cx="100" cy="100" r="92" strokeDasharray="3 4" strokeWidth="1" />
        {/* Inner thin solid circle */}
        <circle cx="100" cy="100" r="86" strokeWidth="1.2" />

        {/* Laurel Wreath Leaves - Left side */}
        <path d="M 98 14 C 70 18 35 48 24 85 C 16 112 24 145 48 168 C 62 181 80 187 98 188" strokeWidth="1.2" strokeLinecap="round" />
        {/* Laurel Wreath Leaves - Right side */}
        <path d="M 102 14 C 130 18 165 48 176 85 C 184 112 176 145 152 168 C 138 181 120 187 102 188" strokeWidth="1.2" strokeLinecap="round" />

        {/* Top small ornamental crown / star fleur */}
        <path d="M 100 12 L 103 20 L 111 20 L 105 25 L 107 33 L 100 28 L 93 33 L 95 25 L 89 20 L 97 20 Z" fill={isSeal ? "url(#sealGoldHighlight)" : "url(#monogramGold)"} />
        
        {/* Bottom decorative flourish knot */}
        <path d="M 94 186 Q 100 181 106 186 Q 100 191 94 186 Z" fill={isSeal ? "url(#sealGoldHighlight)" : "url(#monogramGold)"} />
      </g>

      {/* Intertwined E & N Monogram */}
      <g
        fill={isSeal ? "url(#sealGoldHighlight)" : isSubtle ? "#E6CC8A" : "url(#monogramGold)"}
        filter={isSeal ? "url(#waxDeboss)" : undefined}
      >
        {/* Letter 'E' - Sophisticated Roman calligraphic serif */}
        {/* Vertical stem of E */}
        <path
          d="M 68 56 
             C 68 52, 63 50, 56 50 
             L 56 46 
             L 86 46 
             L 86 50 
             C 79 50, 75 52, 75 56 
             L 75 144 
             C 75 148, 79 150, 86 150 
             L 86 154 
             L 54 154 
             L 54 150 
             C 61 150, 68 148, 68 144 
             Z"
        />

        {/* Top arm of E with flourish */}
        <path
          d="M 75 46 
             L 126 46 
             C 134 46, 139 51, 140 59 
             L 136 60 
             C 133 53, 127 51, 120 51 
             L 75 51 
             Z"
        />

        {/* Middle arm of E with ornate terminal */}
        <path
          d="M 75 96 
             L 110 96 
             C 114 96, 117 93, 118 89 
             L 121 89 
             L 120 107 
             L 117 107 
             C 116 103, 113 100, 108 100 
             L 75 100 
             Z"
        />

        {/* Bottom arm of E with graceful curve */}
        <path
          d="M 75 149 
             L 124 149 
             C 133 149, 139 146, 143 138 
             L 146 139 
             C 144 148, 137 154, 125 154 
             L 75 154 
             Z"
        />

        {/* Letter 'N' - Intertwined dynamically through the E */}
        {/* Left vertical stem of N (weaves BEHIND top arm of E, FRONT of middle arm) */}
        <path
          d="M 98 62 
             C 98 55, 93 51, 86 50 
             L 86 47 
             L 106 47 
             L 106 50 
             C 102 51, 101 54, 101 60 
             L 101 140 
             C 101 146, 103 149, 107 150 
             L 107 153 
             L 87 153 
             L 87 150 
             C 94 149, 98 146, 98 140 
             Z"
          fillOpacity={isSeal ? "0.9" : "0.95"}
        />

        {/* Dramatic Diagonal of N (crossing from top-left through center to bottom-right) */}
        <path
          d="M 99 53 
             L 104 53 
             L 145 138 
             L 145 146 
             L 138 146 
             L 97 60 
             Z"
        />

        {/* Right vertical stem of N */}
        <path
          d="M 143 60 
             C 143 55, 139 52, 134 51 
             L 134 47 
             L 155 47 
             L 155 50 
             C 149 51, 146 54, 146 60 
             L 146 140 
             C 146 146, 149 149, 155 150 
             L 155 153 
             L 133 153 
             L 133 150 
             C 139 149, 143 146, 143 140 
             Z"
        />

        {/* Elegant Ampersand (&) subtly intertwined in the lower center */}
        <path
          d="M 103 103
             C 103 98, 100 94, 96 94
             C 92 94, 89 97, 89 101
             C 89 106, 92 110, 96 114
             L 87 125
             C 83 120, 81 114, 81 108
             C 81 97, 88 89, 98 89
             C 106 89, 112 94, 112 103
             C 112 110, 107 117, 102 122
             L 114 133
             L 112 135
             L 99 124
             L 94 130
             C 91 133, 90 135, 93 135
             C 96 135, 99 133, 101 130
             L 103 131
             C 100 136, 95 138, 91 138
             C 86 138, 83 134, 83 129
             C 83 124, 86 119, 90 114
             Z
             M 97 101
             C 97 97, 95 95, 93 95
             C 91 95, 90 97, 90 100
             C 90 103, 92 107, 94 110
             C 96 107, 97 104, 97 101
             Z"
          fill={isSeal ? "url(#sealGoldHighlight)" : "url(#monogramGold)"}
          fillOpacity="0.85"
        />
      </g>
    </svg>
  );
};

export default Monogram;
