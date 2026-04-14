"use client";
import React from "react";
import LandingPage from "@/components/common/LandingPage";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";

// Sample data for the landing page
const heroData = {
  title: "case study",
  subtitle: "Urban Outfitters",
  description: "Urban Outfitters is a leading online retailer specializing in western clothing for both men and women. Their product range includes everything from western dresses, tops, jeans, and accessories to cowboy boots. The brand is known for its unique styles, quality materials, and a commitment to celebrating western with artistic modern touch.",
  backgroundImage: "/images/hero-beach.jpg",
  dark: true,
  align: "center"
};

const problemsData = [
  {
    icon: (
      <CustomIcon src="/decrease_17250538.png" size={100} />
    ),
    title: "Low Organic Traffic :",
    description: "Despite having a visually appealing website and a wide range of products, the site was not attracting enough organic visitors."
  },
  {
    icon: (
      <CustomIcon src="/delete-cart_3069950.png" size={100} />
    ),
    title: "High Cart Abandonment Rate :",
    description: "A significant number of customers were abandoning their carts before completing the purchase."
  },
  {
    icon: (
      <CustomIcon src="/refinance_6159163.png" size={100} />
    ),
    title: "Poor Conversion Rate :",
    description: "Operating in a saturated market, the client struggled to differentiate itself from competitors."
  },
  {
    icon: (
      <CustomIcon src="/thumb_16457941.png" size={100} />
    ),
    title: "Inconsistent Branding & User Experience :",
    description: "Their marketing efforts failed to reach a wider audience, limiting their overall impact and growth potential."
  }
];

const solutionsData = [
  {
    icon: (
      <CustomIcon src="/seo-cloud-up.png" size={100} />
    ),
    title: "Search Engine optimisation",
    description: "Conducted thorough keyword research to identify high-volume, low-competition keywords related to western clothing. Optimized on-page elements such as meta tags, headers, and content to improve search engine rankings. Created high-quality, engaging blog content around fashion tips, western lifestyle, and product highlights to drive organic traffic."
  },
  {
    icon: (
      <CustomIcon src="/sem_7253084.png" size={100} />
    ),
    title: "Search Engine Marketing",
    description: "Launched targeted Google Ads campaigns to capture high-intent search traffic. Utilized shopping ads to display products directly in search results, increasing visibility and click-through rates."
  },
  {
    icon: (
      <CustomIcon src="/pay-per-click_15286431.png" size={100} />
    ),
    title: "Pay per click",
    description: "Set up retargeting campaigns on Google and social media platforms to bring back visitors who had abandoned their carts. Created visually appealing display ads featuring popular products and seasonal promotions to attract new customers."
  },
  {
    icon: (
      <CustomIcon src="/ui_7859071.png" size={100} />
    ),
    title: "User Experience/User Interface",
    description: "Set up retargeting campaigns on Google and social media platforms to bring back visitors who had abandoned their carts. Created visually appealing display ads featuring popular products and seasonal promotions to attract new customers."
  },
  {
    icon: (
      <CustomIcon src="/web-design_315931.png" size={100} />
    ),
    title: "Graphic Designing",
    description: "Developed a consistent brand identity across all digital platforms, including a cohesive color scheme, typography, and imagery. Created eye-catching graphics for social media, email marketing campaigns, and website banners to engage customers and promote products."
  },
];

const galleryImages = [
  { src: "/images/vintage-remade.png", alt: "Gallery image 1", caption: "Treatment 1" },
  { src: "/images/new-arrivels.png", alt: "Gallery image 2", caption: "Treatment 2" },
  { src: "/images/bdj-jeans.png", alt: "Gallery image 3", caption: "Treatment 3" },
  { src: "/images/vintage-remade.png", alt: "Gallery image 1", caption: "Treatment 1" },
  { src: "/images/new-arrivels.png", alt: "Gallery image 2", caption: "Treatment 2" },
  { src: "/images/bdj-jeans.png", alt: "Gallery image 3", caption: "Treatment 3" },
];

const resultsData = [
  {
    percentage: "95%",
    title: "Organic Traffic",
    description: "Increased within eighteen months, thanks to effective SEO strategies.",
    highlightWord: 'Increased',
    trend: 'up',
  },
  {
    percentage: "20%",
    title: "Conversion Rate",
    description: "Improved, resulting in a higher percentage of visitors making purchases in only 6 months.",
    highlightWord: 'Improved',
    trend: 'up',
  },
  {
    percentage: "40%",
    title: "Cart Abandonment Rate",
    description: "Reduced, due to enhanced UI?UX design and targeted retargeting campaigns",
    highlightWord: 'Reduced',
    trend: 'down',

  },
  {
    percentage: "32%",
    title: "Revenue",
    description: "Increased overall, over the course of the year and half",
    highlightWord: 'Increased',
    trend: 'up',
  },
  {
    percentage: "39%",
    title: "Customer Engagement",
    description: "Social media engagement rates driven by compelling content & graphics, increased.",
    highlightWord: 'Increased',
    trend: 'up',
  }
];

const resultMacImages = { src: "/images/MacBook-Pro-16-inch-Space-Black-Front.png", alt: "MacBook-Pro-16-inch-Space-Black-Front", caption: "MacBook Pro 16-inch Space Black Front" }


const statisticsData = [
  {
    percentage: "50+",
    title: "Keyword Rankings",
    description: "target keywords ranked on the top of the top 5 pages of google search results",
    highlightWord: 'top 5 pages',
    trend: 'camp',
  },
  {
    percentage: "35%",
    title: "Bounce Rate",
    description: "decreased, indicating better user experience and engagement.",
    highlightWord: 'decreased',
    trend: 'down',
  },
  {
    percentage: "3:1",
    title: "PPC ROI",
    description: "Achieved a return on investment on PPC campaigns.",
    highlightWord: 'Achieved',
    trend: 'camp',
  },
  {
    percentage: "45%",
    title: "Email Marketing",
    description: "open rates increased and click through rates by 30% due to visually appealing content",
    highlightWord: 'open rates increased and click through rates by 30%',
    trend: 'up',
  },
  {
    percentage: "50%",
    title: "Social Media Growth",
    description: "Increase in followers across, major platforms like Instagram & Facebook.",
    highlightWord: 'Increase in followers',
    trend: 'up',
  }
];

const descriptonFooter = {description:"By addressing the client's specific challenges with a tailored digital marketing strategy, we were able to significantly enhance their online presence, drive more traffic, and boost sales. This case study illustrates the power of a well-rounded digital marketing approach in transforming an e-commerce business.",
  highlightWord: 'This case study illustrates the power of a well-rounded digital marketing approach in transforming an e-commerce business.'
};

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
    />
  );
}
