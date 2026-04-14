'use client'

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionHeading from "@/components/common/SectionHeading";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import { ArrowUpRight } from "lucide-react";
import ShowcaseCard from "@/components/portfolio-pages/page";
import Link from "next/link";
import { generateSlug } from "@/components/blogs-pages/BlogList";

export default function PortFolio() {
    const portfolioItems = [
        {
            id: 1,
            title: "Urban Outfitters",
            description: "Urban Outfitters launched online retailer specializing in western clothing for both men and women. Their product range includes everything from vintage-inspired apparel, bags, shoes, and accessories to beauty products.",
            image: "/images/41eebf360956c7c3106adeb29413a8afdb14c243.png",
            reverse: false
        },
        {
            id: 2,
            title: "Dr. Anju Methil, Dermatologist",
            description: "Dr. Anju Methil is a highly experienced dermatologist based in Mumbai. Known for advanced skin care treatments and personalized consultations.",
            image: "/images/dee6f0fd618c914245d9e4851996b29f67314de3.png",
            reverse: true
        },
        {
            id: 3,
            title: "Tech Startup Platform",
            description: "Complete digital transformation for a tech startup including web application, mobile app, and marketing automation system.",
            image: "/images/41eebf360956c7c3106adeb29413a8afdb14c243.png",
            reverse: false
        },
        {
            id: 4,
            title: "E-commerce Solution",
            description: "Modern e-commerce platform with advanced features including AI-powered recommendations and seamless checkout experience.",
            image: "/images/dee6f0fd618c914245d9e4851996b29f67314de3.png",
            reverse: true
        },
        {
            id: 5,
            title: "Healthcare Portal",
            description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
            image: "/images/41eebf360956c7c3106adeb29413a8afdb14c243.png",
            reverse: false
        }
    ];

    return (
        <div className="bg-white">
            <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
                <Header />
            </div>

            {/* Portfolio Section */}
            <section className="bg-white rounded-[32px] p-10 md:p-16 mx-8 mb-8">
                <SectionHeading
                    title="OUR WORK"
                    subtitle="what we've created"
                    align="center"
                />

                <div className="space-y-20 p-4 sm:p-6 md:p-8 lg:p-10 max-w-7xl mx-auto min-h-screen">
                    {portfolioItems.map((item) => (
                        <Link key={item.id} href={`/portfolio/${generateSlug(item.title)}`}>
                            <ShowcaseCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                reverse={item.reverse}
                            />
                        </Link>
                    ))}

                </div>
            </section>

            <Footer />
        </div>
    );
}
