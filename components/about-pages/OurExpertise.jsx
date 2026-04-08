'use client'
import SectionHeading from "../common/SectionHeading";
import ExpertiseItem from "./ExpertiseItem";


const ITEMS = [
  {
    number: "01",
    title: "Customized Strategies:",
    description: "We develop personalized strategies that align with your specific goals.",
    image: "/images/Customized-Strategies.png",
  },
  {
    number: "02",
    title: "Proven Results:",
    description: "Our data-driven approach ensures that we deliver tangible results.",
    image: "/images/Proven-Results.png",
  },
  {
    number: "03",
    title: "Dedicated Support:",
    description: "Our team is always available to provide support and guidance.",
    image: "/images/Dedicated_Support.png",
  },
  {
    number: "04",
    title: "Continual Improvement:",
    description: "We develop personalized strategies that align with your specific goals.",
    image: "/images/Continual_Improvement.png",
  },
];

export default function OurExpertise() {
  return (
    <section  className=" py-16  max-w-6xl mx-auto">
      {/* Heading */}
     <SectionHeading title="Our Expertise" subtitle="why choose us"  align="center" />

      {/* Items — alternating left/right */}
      {ITEMS.map((item, index) => (
        <ExpertiseItem
          key={item.number}
          {...item}
          reverse={index % 2 !== 0}  // even = left, odd = right
        />
      ))}
    </section>
  );
}