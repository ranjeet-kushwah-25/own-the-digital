'use client'
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ icon, title, points, onClick }) {
  return (
    <div
      className="relative max-w-[996.2530517578125px] mx-auto h-[460px] rounded-[28px_28px_28px_0px] 
      p-10 flex flex-col 
      bg-[url('/images/Subtract_card.png')] bg-cover bg-center "
    >
      {/* Title - Centered at top */}
      <div className="text-center mb-8">
        <h3 className="text-[28px] font-black  font-balgin text-transparent text-white">
          {title}
        </h3>
      </div>

      {/* Main content - Icon and list side by side */}
      <div className=" flex items-center justify-around ">
        {/* Icon - Left side */}
        <div className="relative z-10 flex items-center justify-center shrink-0">
          {icon}
        </div>

        {/* Content - Right side */}
        <div className=" z-10 text-white">
          <ul className="space-y-2 text-[24px] font-medium font-Gilroy-Medium opacity-90">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arrow button */}
      <button
        onClick={onClick}
        className="absolute bottom-5 right-6 w-15 h-15 rounded-full 
        bg-[#2f2fcf] flex items-center justify-center 
        border-[4px] border-black 
        hover:bg-[#4a4aff] transition z-10"
      >
        <ArrowUpRight className="text-white w-8 h-9" />
      </button>
    </div>
  );
}