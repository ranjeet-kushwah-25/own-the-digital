'use client';
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ShowcaseCard({
    image,
    title,
    description,
    reverse = false,
}) {
    return (
        <div
            className={`flex flex-col item-end justify-end md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
        >
            {/* Image Card */}
            <div className="relative shrink-0">
                {/* IMAGE CARD */}
                <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] group">
                    {/* BORDER */}
                    <div className="absolute inset-0 rounded-[28px] p-[2px] bg-linear-to-br from-[#5A4BFF] to-[#2D2486]">
                        {/* IMAGE WRAPPER */}
                        <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />

                            {/* CURVED CUT (bottom-right notch) */}
                            <div className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-white rounded-tl-[40px]"></div>

                            {/* ARROW BUTTON */}
                            <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#5A4BFF] to-black flex items-center justify-center shadow-lg z-10">
                                <ArrowUpRight className="text-white w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 mt-4 md:mt-8 lg:mt-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-balgin text-[#5A4BFF] mb-2 md:mb-4">
                    {title}
                </h3>
                <p className="text-[#000000] font-gilroy-regular text-sm sm:text-base md:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}