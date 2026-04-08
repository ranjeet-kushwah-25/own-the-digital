"use client";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { servicesData } from "@/app/(root)/(website)/data/servicedata";
import { ArrowUpRight } from "lucide-react";

export default function OurService() {
    return (
        <section className="py-20 rounded-4xl bg-[#000000] text-center">
            {/* Heading Wrapper */}
            <div className="relative flex flex-col items-center justify-center">

                <SectionHeading
                    title="OUR SERVICES"
                    subtitle="what we do"
                    dark
                    align="center"
                    textSize="80px"
                />

            </div>
            <div className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            corner={service.corner}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-[#5545FF] font-semibold text-[24px]">
                <h1>Know</h1>
                <button className="bg-[#1500FF] text-black px-3 py-3 rounded-full font-semibold hover:bg-[#1500FF] transition">
                  <ArrowUpRight className="text-black w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </button>
                <h1>everything that we do.</h1>
            </div>
        </section >
    );
}