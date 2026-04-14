"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function TeamCard({ image, name, role }) {
  return (
      <div className="flex flex-col items-center gap-3">
      {/* IMAGE CARD */}
      <div className="relative w-[220px] h-[220px] group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              {/* BORDER */}
        <div className="absolute inset-0 rounded-[28px]  p-[2px] bg-linear-to-br from-[#5A4BFF] to-[#2D2486] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/50">
                  {/* IMAGE WRAPPER */}
                  <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black">
            <Image src={image} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />

                      {/* CURVED CUT (bottom-right notch) */}
            <div className="absolute bottom-0 right-0 w-[70px]  border border-[#5A4BFF] h-[70px] bg-white rounded-tl-[40px] transition-all duration-300 group-hover:bg-purple-100"></div>

                      {/* ARROW BUTTON */}
            <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#5A4BFF] to-black flex items-center justify-center shadow-lg z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
              <ArrowUpRight className="text-white w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                      </div>
                  </div>
        </div>
      </div>

      {/* NAME BOX */}
      <div className="w-[220px] text-center bg-black border border-purple-500/40 rounded-xl py-3 px-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
        <h3 className="text-white text-sm font-semibold transition-colors duration-300 group-hover:text-purple-300">{name}</h3>
        <p className="text-gray-400 text-xs transition-colors duration-300 group-hover:text-gray-300">{role}</p>
          </div>
    </div>
  );
}