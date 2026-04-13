'use client'

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionHeading from "@/components/common/SectionHeading";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import { ArrowUpRight } from "lucide-react";
import ShowcaseCard from "@/components/portfolio-pages/page";
import Link from "next/link";

export default function PortFolio() {
    const portfolioItems = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "Web Development",
            description: "Modern e-commerce solution with advanced features and seamless user experience",
            image: "/images/portfolio-1.jpg",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            title: "Mobile Banking App",
            category: "Mobile Development",
            description: "Secure and intuitive mobile banking application with biometric authentication",
            image: "/images/portfolio-2.jpg",
            tags: ["React Native", "Firebase", "Security"]
        },
        {
            id: 3,
            title: "Digital Marketing Campaign",
            category: "Marketing",
            description: "Comprehensive digital marketing strategy with measurable results",
            image: "/images/portfolio-3.jpg",
            tags: ["SEO", "Social Media", "Analytics"]
        },
        {
            id: 4,
            title: "Brand Identity Design",
            category: "Design",
            description: "Complete brand identity package with logo and visual guidelines",
            image: "/images/portfolio-4.jpg",
            tags: ["Branding", "Logo Design", "UI/UX"]
        },
        {
            id: 5,
            title: "SaaS Dashboard",
            category: "Web Development",
            description: "Analytics dashboard with real-time data visualization",
            image: "/images/portfolio-5.jpg",
            tags: ["Vue.js", "D3.js", "API"]
        },
        {
            id: 6,
            title: "Social Media Strategy",
            category: "Marketing",
            description: "Multi-platform social media management and growth strategy",
            image: "/images/portfolio-6.jpg",
            tags: ["Instagram", "Twitter", "Content"]
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
                    <Link href="/case-study">
                    <ShowcaseCard
                        image="/images/41eebf360956c7c3106adeb29413a8afdb14c243.png"
                        title="Urban Outfitters"
                        description="Urban Outfitters launched online retailer specializing in western clothing for both men and women. Their product range includes everything from vintage-inspired apparel, bags, shoes, and accessories to beauty products."
                    />
                    </Link>

                    <ShowcaseCard
                        image="/images/dee6f0fd618c914245d9e4851996b29f67314de3.png"
                        title="Dr. Anju Methil, Dermatologist"
                        description="Dr. Anju Methil is a highly experienced dermatologist based in Mumbai. Known for advanced skin care treatments and personalized consultations."
                        reverse={true}
                    />

                    <ShowcaseCard
                        image="/images/41eebf360956c7c3106adeb29413a8afdb14c243.png"
                        title="Tech Startup Platform"
                        description="Complete digital transformation for a tech startup including web application, mobile app, and marketing automation system."

                    />

                    <ShowcaseCard
                        image="/images/dee6f0fd618c914245d9e4851996b29f67314de3.png"
                        title="E-commerce Solution"
                        description="Modern e-commerce platform with advanced features including AI-powered recommendations and seamless checkout experience."
                        reverse={true}
                    />

                    <ShowcaseCard
                        image="/images/41eebf360956c7c3106adeb29413a8afdb14c243.png"
                        title="Healthcare Portal"
                        description="Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities."
                        
                    />

                </div>
            </section>

            <Footer />
        </div>
    );
}
