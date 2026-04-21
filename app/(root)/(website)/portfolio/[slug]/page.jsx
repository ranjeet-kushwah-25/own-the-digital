"use client";
import React from "react";
import LandingPage from "@/components/common/LandingPage";
import {
  heroData,
  problemsData,
  solutionsData,
  resultsData,
  statisticsData,
  galleryImages,
  resultMacImages,
  descriptonFooter,
  problemsSection,
  solutionsSection
} from "@/app/(root)/(website)/data/portfoliodata";

export default function CaseStudy() {
  return (
    <LandingPage
      heroData={heroData}
      problemsData={problemsData}
      solutionsData={solutionsData}
      resultsData={resultsData}
      statisticsData={statisticsData}
      galleryImages={galleryImages}
      resultMacImages={resultMacImages}
      descriptonFooter={descriptonFooter}
      problemsSection={problemsSection}
      solutionsSection={solutionsSection}
    />
  );
}
