"use client";
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ImageGallery from "./ImageGallery";
import StatsCard, { renderDescription } from "./StatsCard";
import Footer from "./Footer";
import Image from "next/image";
import HeadingText from "./HeadingText";

export default function LandingPage({
  heroData,
  problemsData,
  solutionsData,
  resultsData,
  statisticsData,
  galleryImages,
  resultMacImages,
  descriptonFooter,
  customClass = "",
}) {
  return (
    <div className={`min-h-screen ${customClass}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection {...heroData} />

      {/* Problems Section */}
      <ContentSection
        title="Problems faced"
        subtitle="Urban Outfitters approached our digital marketing agency with the following challenges:"
        items={problemsData}
        dark={false}
        columns={2}
        align="center"
      />

      <div className="bg-white">
        <marquee behavior="scroll" scrollamount="15" loop="infinite">
          <Image
            src={"/images/uo-community.png"}
            alt="client logo"
            width={1440}
            height={176}
            className="object-contain "
          />
        </marquee>
      </div>

      {/* Solutions Section */}
      <ContentSection
        title="Solutions found"
        subtitle="To address these challenges, we implemented a comprehensive digital marketing strategy focusing on SEO, SEM, PPC, UI/UX, and Graphic Designing."
        items={solutionsData}
        dark={false}
        columns={1}
        align="center"
      />

      {/* Image Gallery */}
      <ImageGallery
        images={galleryImages}
        columns={6}
        spacing="medium"
        rounded={true}
      />

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeadingText title="Results achieved" subtitle="Our comprehensive approach led to significant improvements in the client’s online performance:" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-5">
            {resultsData.slice(0, 3).map((result, index) => (
              <div 
                key={index}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <StatsCard
                  percentage={result.percentage}
                  title={result.title}
                  description={result.description}
                  highlightWord={result.highlightWord}
                  trend={result.trend}
                  icon={result.icon}
                  dark={false}
                  color="blue"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {resultsData.slice(3).map((result, index) => (
              <div
                key={index + 3}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <StatsCard
                  percentage={result.percentage}
                  title={result.title}
                  description={result.description}
                  highlightWord={result.highlightWord}
                  trend={result.trend}
                  icon={result.icon}
                  dark={false}
                  color="blue"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/MacBook-Pro-16-inch-Space-Black-Front.png"
            alt={resultMacImages?.alt || "MacBook-Pro-16-inch-Space-Black-Front"}
            width={1024}
            height={623.5}
            className="object-contain opacity-150"
          />
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeadingText title="Statistics" subtitle="Our comprehensive approach led to significant improvements in the client’s online performance:" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-5">
            {statisticsData.slice(0, 3).map((result, index) => (
              <div 
                key={index}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <StatsCard
                  percentage={result.percentage}
                  title={result.title}
                  description={result.description}
                  highlightWord={result.highlightWord}
                  trend={result.trend}
                  icon={result.icon}
                  dark={false}
                  color="blue"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {statisticsData.slice(3).map((result, index) => (
              <div
                key={index + 3}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <StatsCard
                  percentage={result.percentage}
                  title={result.title}
                  description={result.description}
                  highlightWord={result.highlightWord}
                  trend={result.trend}
                  icon={result.icon}
                  dark={false}
                  color="blue"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl font mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={"text-gray-400"}
            style={{
              fontFamily: "Gilroy-Bold, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {renderDescription({ dark: false, description: descriptonFooter.description, highlightWord: descriptonFooter.highlightWord })}
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
