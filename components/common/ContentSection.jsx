"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";
import Image from "next/image";
import HeadingText from "./HeadingText";

export default function ContentSection({
  title,
  subtitle,
  items = [],
  dark = false,
  columns = 2,
  align = "left",
  customClass = ""
}) {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className={`py-16 ${dark ? "bg-black" : "bg-white"} ${customClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <HeadingText title={title} subtitle={subtitle} />

        {/* Content Grid */}
        <div className="gap-8 mt-16">
          {items.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              dark={dark}
              size="medium"
              hover={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
