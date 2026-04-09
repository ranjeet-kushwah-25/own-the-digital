'use client'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";

export default function OurWorkService() {
    return (
        <section className="bg-white rounded-[32px_32px_0_0] p-10 md:p-16 relative overflow-hidden">

            {/* Top Right Button */}
            <div className="flex justify-between items-center mb-16">
                <SectionHeading title="OUR WORK" subtitle="what have we worked on" align="left" textSize="80px" />

                <div className="flex items-center gap-1 text-[#5545FF] font-semibold text-lg group">
                    <span className="text-nowrap">Know More</span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black group-hover:bg-[#1500FF] transition-colors duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">

                {/* Left Content */}
                <div>
                    <h3 className="text-5xl font-black font-balgin text-indigo-600 mb-4">
                        Western Clothing <br /> Ecommerce Brand
                    </h3>

                    <p className="text-[20px] text-gray-700 leading-relaxed mb-4">
                        <span className="text-indigo-600 font-medium">
                            Urban Outfitters
                        </span>{" "}
                        is a leading online retailer specializing in western clothing
                        for both men and women.
                    </p>

                    <p className="text-[20px] text-gray-700 leading-relaxed mb-4">
                        Their product range includes everything from western dresses,
                        tops, jeans, and accessories to cowboy boots.
                    </p>

                    <p className="text-[20px] text-gray-700 leading-relaxed">
                        The brand is known for its unique styles, quality materials,
                        and a commitment to celebrating western with artistic modern touch.
                    </p>
                </div>

                {/* Right Image Card */}
                <div className="relative">
                    <div className="rounded-[20px] overflow-hidden">
                        <Image
                            src="/images/urban-outfitters.png"
                            alt="work"
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Floating Button */}
                    <button className="absolute bottom-6 right-5 w-20 h-20 rounded-full 
           flex items-center justify-center shadow-lg bg-linear-to-r from-[#5545FF] via-[#2D2486] to-[#000000] hover:from-[#382c9e] hover:via-[#6052fa] hover:to-[#000000a5] transition">
                        <ArrowUpRight className="text-white w-10 h-10" />
                    </button>
                </div>
            </div>
        </section>
    );
}