'use client'
import SectionHeading from "../common/SectionHeading";

export default function AboutContent() {
  const items = [
    {
      title: "Brand Marketers",
      blueIndex: 1,
      desc: "We come with over years of branding and marketing pedigree and our consultants guide you to position your brand, create brand voice and design visual identity for your brand.",
      align: "left",
    },
    {
      title: "Tech Junkies",
      blueIndex: 0,
      desc: "We are a team of web developers & design programmers to help translate your business requirements to functional requirements & create beautiful static websites, CMS based websites and E-Commerce websites.",
      align: "right",
    },
    {
      title: "Content Writers",
      blueIndex: 1,
      desc: "Our team of content writers help you break the clutter of over used content and create engaging content for web, social media and other platforms.",
      align: "left",
    },
    {
      title: "Creative Visualizers",
      blueIndex: 0,
      desc: "Our team of creative visualisers have worked on number of projects in different industries. We understand the visual representation of different companies and create eye catching graphics for the same.",
      align: "right",
    },
  ];

  return (
    <section className="bg-black py-16 px-8 rounded-4xl" >
      {/* Big outline title */}
      <SectionHeading title="About Us" subtitle="who we are" dark align="center" />
      {/* Items */}
      <div className="flex flex-col gap-12 w-full mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className={`max-w-[800px] text-left ${
              item.align === "right" ? "ml-auto" : "mr-auto"
            }`}
          >
            <h2 className="text-[64px] leading-[136%] tracking-normal font-medium font-balgin text-transparent bg-clip-text bg-linear-to-r from-[#1500FF] via-[#C7C2FF] to-[#1500FF]">
              {item.title}
            </h2>
            <p className="text-[#FFFFFF] font-Gilroy-Regular text-[24px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}