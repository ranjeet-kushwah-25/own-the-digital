"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function HeroSection({
  title = "Unlock your skin's full potential with Lumina",
  subtitle = "Transform Your Beauty",
  description = "Transform Your Beauty",
  backgroundImage = "/images/hero-beach.jpg",
  dark = true,
  align = "center",
  showLearnMore = true,
  customClass = ""
}) {
  return (
    <section className={`relative bg-black min-h-screen flex items-center justify-center overflow-hidden ${customClass}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <SectionHeading
            title={subtitle}
            subtitle={title}
            align={align}
            dark={dark}
            textSize="100px"
          />
          
          <p className="mt-12 text-2xl font-gilroy-medium px-8 py-4 font-normal shadow-lg">
            {description}
          </p>
        
        </div>
        <Image 
        src='/images/29.07.2024_18.16.41_REC.png'
        alt='Urban outlier'
        width={1200}
        height={580}
        className="mt-[200px]"
        />
      </div>

    </section>
  );
}
