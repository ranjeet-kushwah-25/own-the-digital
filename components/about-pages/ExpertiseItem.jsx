'use client'
import Image from "next/image";

export default function ExpertiseItem({ number, title, description, image, reverse = false }) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-8 mb-8 md:mb-16`}
    >
      {/* Image */}
      <div className="w-full max-w-lg h-[200px] sm:h-[233px] md:h-[266px] flex-shrink-0 rounded overflow-hidden relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-end gap-2">
        <p
            className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-normal font-bungee leading-none mb-1"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #bbb",
          }}
        >
          {number}
        </p>
        <p
            className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold font-balgin mb-2"
          style={{
            background: "linear-gradient(90deg, #3333cc, #6655ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </p>
          </div>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}