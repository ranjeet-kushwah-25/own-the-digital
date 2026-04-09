'use client'

import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Mahesh Bagga",
            role: "Direct Review",
            date: "13/02/2024",
            image: "/images/Mahesh-Bagga.png",
            review:
                "We were thrilled with how quickly Own the Digital delivered our new website. Despite the tight timeline, they produced an exceptional site that met all our needs.",
        },
        {
            name: "Kashish Mahajan",
            role: "Google Review",
            date: "10/02/2024",
            image: "/images/Kashish-Mahajan.png",
            review:
                "Provided top-notch customer service. They were attentive to our needs, responsive to our questions, and supportive every step of the way.",
        },
        {
            name: "David Wilson",
            role: "Google Review",
            date: "19/04/2024",
            image: "/images/David.png",
            review:
                "The website developed by Own the Digital is truly impressive. It combines innovative design with user-friendly features.",
        },
        {
            name: "Michelle Johnson",
            role: "Google Review",
            date: "06/02/2024",
            image: "/images/Michelle-Johnson.png",
            review:
                "Working with Own the Digital was a fantastic experience. They provided great value and delivered a high-quality website.",
        },
    ];

    return (
        <section className="bg-black rounded-[32px] p-10 md:p-16 text-white relative overflow-hidden">

            <SectionHeading title="TESTIMONIALS" subtitle="what clients have to say" dark align="center" />

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">

                {/* Left Column */}
                <div className="space-y-6">
                    <TestimonialCard {...testimonials[0]} />
                    <TestimonialCard {...testimonials[1]} />
                </div>

                {/* Right Column */}
                <div className="space-y-6 mt-10 md:mt-0">
                    <TestimonialCard {...testimonials[2]} />
                    <TestimonialCard {...testimonials[3]} />
                </div>

            </div>
        </section>
    );
}