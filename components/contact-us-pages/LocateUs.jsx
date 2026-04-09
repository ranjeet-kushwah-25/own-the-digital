'use client'

import { CuboidIcon } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { CustomIcon } from "../ui/Icon/CustomIcon";

export default function LocateUs() {
    return (
        <section className="bg-white rounded-[32px] p-10 md:p-16 relative overflow-hidden">
            {/* Heading */}
            <SectionHeading
                title="LOCATE US"
                subtitle="where we are"
                align="center"
            />

            {/* Content */}
            <div className=" mt-16">
                
                {/* Left Content */}
                <div className="flex item-center justify-around">
                    <div>
                         <CustomIcon src="/location.png" size={64}/>
                        <h3 className="text-3xl font-bold text-[#5545FF] mb-4">
                       Address
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                           Location Address Line 1<br /> Location Address Line 2<br /> Location Address Line 3<br /> City <br />State, Country<br />
                        </p>
                    </div>

                    <div>
                        <CustomIcon src="/telephone.png" size={64}/>
                        <h3 className="text-3xl font-bold text-[#5545FF] mb-4">
                     Call us
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-2">
                        Contact Number
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                           Contact Number
                        </p>
                    </div>

                    <div>
                         <CustomIcon src="/email.png" size={64}/>
                        <h3 className="text-3xl font-bold text-[#5545FF] mb-4">
                         Mail us
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            hello@ownthedigital.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}