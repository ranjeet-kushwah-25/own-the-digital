'use client'

import Header from "@/components/common/Header";
import Image from "next/image";
import TeamCard from "@/components/common/TeamCard";
import { teamMembers } from "../data/teamMemberdata";
import AboutContent from "@/components/about-pages/AboutContent";
import OurExpertise from "@/components/about-pages/OurExpertise";
import LetTalkForm from "@/components/common/LetTalkForm";
import Footer from "@/components/common/Footer";

export default function AboutUs() {
    return (
        <>
            <div className="bg-[#ffffff]">
                <div className="flex flex-col min-h-screen bg-[#000000] bg-cover bg-center" style={{ borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px' }}>
                    <Header />
                    <div className="flex flex-col items-center justify-center flex-1 text-center">
                        <h1 className="text-[64px] leading-[136%] tracking-normal font-medium text-center font-balgin text-transparent bg-clip-text bg-linear-to-r from-[#1500FF] via-[#C7C2FF] to-[#1500FF]">
                            Transforming Visions into Digital Reality
                        </h1>
                        <div className="px-8 py-10 font-medium text-[24px]">
                            <p className="max-w-4xl font-gilroy-regular text-gray-300 leading-relaxed">
                                At{" "}
                                <span className="text-[#5A4BFF] font-semibold">
                                    Own the Digital,
                                </span>{" "}
                                we revolutionize digital marketing with innovative strategies <br />
                                tailored to your business needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[-150px] mb-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                image={member.image}
                                name={member.name}
                                role={member.role}
                            />
                        ))}
                    </div>
                </div>
                <AboutContent />
                <OurExpertise/>
                <LetTalkForm/>
                <Footer/>
            </div>
        </>
    );
}
