'use client'

import { CuboidIcon } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { CustomIcon } from "../ui/Icon/CustomIcon";

export default function LocateUs() {
    return (
        <section className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-16 relative overflow-hidden">
            {/* Heading */}
            <SectionHeading
                title="LOCATE US"
                subtitle="where we are"
                align="center"
            />

            {/* Content */}
            <div className="mt-8 sm:mt-12 md:mt-16">
                
                {/* Left Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
                    <div className="flex flex-col items-center text-center lg:text-left max-w-xs">
                        <div className="mb-4 lg:mb-6">
                            <CustomIcon src="/location.png" size={64} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5545FF] mb-2 sm:mb-4">
                            Address
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            Location Address Line 1<br />
                            Location Address Line 2<br />
                            Location Address Line 3<br />
                            City <br />
                            State, Country
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center lg:text-left max-w-xs">
                        <div className="mb-4 lg:mb-6">
                            <CustomIcon src="/telephone.png" size={64} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5545FF] mb-2 sm:mb-4">
                            Call us
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-2">
                            Contact Number
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Contact Number
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center lg:text-left max-w-xs">
                        <div className="mb-4 lg:mb-6">
                            <CustomIcon src="/email.png" size={64} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5545FF] mb-2 sm:mb-4">
                            Mail us
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            hello@ownthedigital.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}