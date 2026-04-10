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
                <div className="flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-12">
                    <div className="text-center sm:text-left">
                        <CustomIcon src="/location.png" size={40} className="sm:size-48 md:size-56 lg:size-64" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5545FF] mb-2 sm:mb-4">
                       Address
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                           Location Address Line 1<br /> Location Address Line 2<br /> Location Address Line 3<br /> City <br />State, Country<br />
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <CustomIcon src="/telephone.png" size={40} className="sm:size-48 md:size-56 lg:size-64" />
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

                    <div className="text-center sm:text-left">
                        <CustomIcon src="/email.png" size={40} className="sm:size-48 md:size-56 lg:size-64" />
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