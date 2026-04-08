'use client'
import SectionHeading from "../common/SectionHeading";
import { CustomIcon } from "../ui/Icon/CustomIcon";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    title: "Search Engine Optimization",
    points: [
      "We Conduct Keyword Research",
      "We Optimize On-Page Elements",
      "We Improve Site Structure",
      "We Enhance Mobile Experience",
      "We Build Backlinks",
      "We Optimize Technical SEO",
    ],
    icon: <CustomIcon src="/seo_white.png" size={80}/>,
  },
];

export default function OurServciepage() {
  return (
    <section className="bg-black py-16 ">
      {/* Outline heading */}
      <SectionHeading title="Our Services" subtitle="what we do" dark align="center" />

      {/* Cards */}
      <div className="gap-12">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            points={service.points}
            icon={service.icon}
            onClick={() => console.log(`${service.title} clicked`)}
          />
        ))}
      </div>
    </section>
  );
}