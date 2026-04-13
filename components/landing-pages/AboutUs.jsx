"use client";
import SectionHeading from "../common/SectionHeading";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LetTalkForm from "../common/LetTalkForm";


export default function AboutUs() {
    return (
        <section className="min-h-screen bg-white py-16 px-6">
            <div className="container mx-auto">
                {/* Header with Know More */}
                <div className="flex justify-between items-center mb-16">
                    <SectionHeading title="ABOUT US" subtitle="who we are" align="left" textSize="80px" />

                    <div className="flex items-center gap-1 text-[#5545FF] font-semibold text-lg group">
                        <span className="text-nowrap">Know More</span>
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black group-hover:bg-[#1500FF] transition-colors duration-300">
                            <ArrowUpRight className="text-white w-6 h-6" />
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <Image
                                src="/images/rectangular_img.png"
                                alt="Team collaborating around table"
                                width={600}
                                height={450}
                                className="rounded-4xl shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Blocks */}
                    <div className="lg:w-1/2 space-y-6">
                        {/* Block 1 */}
                        <div className="w-full max-w-[900px] mx-auto p-[1px] rounded-[28px] bg-gradient-to-r from-[#6C63FF] to-[#7F7CFF]">
                            {/* Inner Card */}
                            <div
                                className="rounded-[27px] px-8 py-10 
      bg-gradient-to-br from-[#d9d9e6] via-[#e6e6f2] to-[#f2f2f8]"
                            >
                                <p className="text-[22px] leading-[36px] text-[#0b0b1f] font-medium">
                                    At{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#6C63FF] font-semibold">
                                        Own the Digital,
                                    </span>{" "}
                                    <br />
                                    we are passionate about transforming businesses through
                                    <br />
                                    innovative digital marketing solutions.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="w-full max-w-[900px] mx-auto p-[1px] rounded-[28px] bg-gradient-to-r from-[#6C63FF] to-[#7F7CFF]">
                            {/* Inner Card */}
                            <div
                                className="rounded-[27px] px-8 py-10 
      bg-gradient-to-br from-[#d9d9e6] via-[#e6e6f2] to-[#f2f2f8]"
                            >
                                <p className="text-[22px] leading-[36px] text-[#0b0b1f] font-medium">
                                    With a team of experienced professionals, we specialize in
                                    SEO, social media management, content creation, and
                                    data-driven strategies that elevate your brand's online
                                    presence.
                                </p>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="w-full max-w-[900px] mx-auto p-[1px] rounded-[28px] bg-gradient-to-r from-[#6C63FF] to-[#7F7CFF]">
                            {/* Inner Card */}
                            <div
                                className="rounded-[27px] px-8 py-10 
      bg-gradient-to-br from-[#d9d9e6] via-[#e6e6f2] to-[#f2f2f8]"
                            >
                                <p className="text-[22px] leading-[36px] text-[#0b0b1f] font-medium">
                                    We believe in building lasting partnerships with our clients,
                                    fostering growth and success in the ever-evolving digital
                                    landscape.
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#6C63FF] font-medium underline">
                                        We use metric and data to create strategies.
                                    </span>{" "}  <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#6C63FF] font-semibold">
                                        Join us on the journey to take your business to the next
                                        level.
                                    </span>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#5545FF] w-full mt-10 '>
                <marquee behavior="scroll" scrollamount="15" loop="infinite">
                    <h2 className='text-white text-3xl font-bold  font-balgin text-center p-4' >Win the game of Online Marketing and digital presence with us.</h2>
                </marquee>
            </div>

            <div className="mt-10">
                <LetTalkForm />
            </div>
        </section>
    );
}
