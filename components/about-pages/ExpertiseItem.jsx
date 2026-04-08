'use client'
import Image from "next/image";

export default function ExpertiseItem({ number, title, description, image, reverse = false }) {
  return (
    <div
      className={`flex items-center gap-8 mb-16 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Image */}
      <div className="w-full max-w-lg h-[266px] flex-shrink-0 rounded overflow-hidden relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className=" flex justify-start items-end gap-2">
        <p
          className="text-[120px] font-black leading-none mb-1"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #bbb",
          }}
        >
          {number}
        </p>
        <p
          className="text-[28px] font-extrabold italic mb-2"
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
        <p className="text-[24px] text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}