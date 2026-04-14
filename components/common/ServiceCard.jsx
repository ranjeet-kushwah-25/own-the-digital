"use client";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
    title,
    description,
    icon,
    corner = 'up' // up | down
}) {
    return (
        <div className="relative group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            {/* Card */}
            <div className={`${corner === 'up' ? 'bg-[url("/images/cardUp.png")]' : 'bg-[url("/images/cardDown.png")]'} w-[387px] h-[387px] p-6 bg-cover duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/25 rounded-lg`}>

                {/* Icon */}
                <div className={`${corner === 'up' ? 'absolute top-4 left-4' : 'absolute bottom-4 left-4'} mb-4 text-purple-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>{icon}</div>

                {/* Content */}
                <div className={`${corner === 'up' ? 'absolute bottom-15 left-4' : 'absolute top-15 right-4'} transition-all duration-300 group-hover:translate-x-1`}>
                    <h3 className=" line-height:100% text-[20px] font-semibold font-balgin text-[#5545FF] transition-colors duration-300 group-hover:text-[#7C3AED]">
                        {title}
                    </h3>

                    <p className="text-lg text-gray-300 font-gilroy leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                        {description}
                    </p>
                </div>

                {/* Arrow Button */}
                <div className={`${corner === 'up' ? 'absolute top-4 right-4' : ' absolute bottom-4 right-4'} w-20 h-20 flex items-center justify-center rounded-full bg-[#1c1c3c] group-hover:bg-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-600/50`}>
                    <ArrowUpRight className="text-white w-10 h-10 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                </div>
            </div>
        </div>
    );
}