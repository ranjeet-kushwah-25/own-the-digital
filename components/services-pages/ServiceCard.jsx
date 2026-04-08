'use client'
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ icon, title, points, onClick }) {
  return (
    <div
      className="relative max-w-5xl h-[460px] mx-auto rounded-[20px_20px_20px_0px] p-8 flex gap-7 items-center bg-[url('/images/Subtract_card.png')] bg-cover bg-center"
    >
      {/* Icon */}
      <div className="w-24 shrink-0 flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1">
          <h3 className="text-[28px] leading-[100%] tracking-normal  text-center font-balgin text-white weight-[]">
          {title}
        </h3>
        <ul className="space-y-1">
          {points.map((point, i) => (
            <li key={i} className="text-white text-[13.5px] opacity-90">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow button */}
      <button
        onClick={onClick}
        className="absolute -bottom-4 right-6 w-11 h-11 rounded-full bg-[#3333cc] flex items-center justify-center border-[3px] border-black hover:bg-[#4444ee] transition"
      >
        <ArrowUpRight className="text-white w-4 h-4" />
      </button>
    </div>
  );
}