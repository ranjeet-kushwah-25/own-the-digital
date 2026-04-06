"use client";
import React from "react";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  dark = false,
}) {
  return (
    <div
      className={`relative w-full overflow-hidden py-10 ${
        align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"
      } ${dark ? "bg-black" : "bg-white"}`}
    >
      {/* Outline Big Text */}
      <h2
        className={`
          pointer-events-none
          select-none
          font-bungee
          font-extrabold
          uppercase
          tracking-widest
          leading-none
          text-[80px] sm:text-[120px] md:text-[160px]
          opacity-40
          ${dark ? "text-transparent" : "text-transparent"}
        `}
        style={{
          fontFamily: "Bungee Outline",
          WebkitTextStroke: dark ? "2px #3b82f6" : "2px #6366f1",
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className={`
          absolute
          top-19/25
          left-0
          w-full
          -translate-y-1/2
          text-xl sm:text-2xl md:text-6xl
          font-semibold italic
          ${
            dark
              ? "text-white"
              : "text-black"
          }
        `}
      >
        {subtitle}
      </p>
    </div>
  );
}
