"use client";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
    title,
    description,
    icon,
    corner = 'up' // up | down
}) {
    return (
        <div className="relative group">
            {/* Card */}
            <div className={`${corner === 'up' ? 'bg-[url("/images/cardUp.png")]' : 'bg-[url("/images/cardDown.png")]'} w-[387px] h-[387px] p-6 bg-cover duration-300`}>

                {/* Icon */}
                <div className={`${corner === 'up' ? 'absolute top-4 left-4' : 'absolute bottom-4 left-4'} mb-4 text-purple-400`}>{icon}</div>

                {/* Content */}
                <div className={`${corner === 'up' ? 'absolute bottom-15 left-4' : 'absolute top-15 right-4'}`}>
                    <h3 className=" line-height:100% text-[20px] font-semibold font-balgin text-[#5545FF] ">
                        {title}
                    </h3>

                    <p className="text-lg text-gray-300 font-gilroy leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Arrow Button */}
                <div className={`${corner === 'up' ? 'absolute top-4 right-4' : ' absolute bottom-4 right-4'} w-20 h-20 flex items-center justify-center rounded-full bg-[#1c1c3c] group-hover:bg-purple-600 transition`}>
                    <ArrowUpRight className="text-white w-10 h-10" />
                </div>
            </div>
        </div>
    );
}