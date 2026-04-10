'use client'
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ icon, title, points, onClick }) {
  return (
    <div
      className="relative max-w-[996.2530517578125px] mx-auto h-[350px] sm:h-[400px] md:h-[460px] rounded-[28px_28px_28px_0px] 
      p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col 
      bg-[url('/images/Subtract_card.png')] bg-cover bg-center "
    >
      {/* Title - Centered at top */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-black font-balgin text-transparent text-white">
          {title}
        </h3>
      </div>

      {/* Main content - Icon and list side by side */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around flex-1">
        {/* Icon - Top on mobile, Left on desktop */}
        <div className="relative z-10 flex items-center justify-center shrink-0 mb-4 sm:mb-0 sm:mr-4 md:mr-0">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {icon}
          </div>
        </div>

        {/* Content - Below icon on mobile, Right side on desktop */}
        <div className="z-10 text-white text-center sm:text-left">
          <ul className="space-y-1 sm:space-y-2 text-[16px] sm:text-[20px] md:text-[24px] font-medium font-Gilroy-Medium opacity-90">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arrow button */}
      <button
        onClick={onClick}
        className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full 
        bg-[#2f2fcf] flex items-center justify-center 
        border-[2px] sm:border-[3px] md:border-[4px] border-black 
        hover:bg-[#4a4aff] transition z-10"
      >
        <ArrowUpRight className="text-white w-5 h-5 sm:w-6 sm:h-7 md:w-8 md:h-9" />
      </button>
    </div>
  );
}