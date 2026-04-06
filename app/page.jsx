import React from "react";
import LandingPage from "./(root)/(website)/landing-page/page";
import OurWork from "../components/landing-pages/OurWork";
import OurService from "@/components/landing-pages/OurService";
import AboutUs from "@/components/landing-pages/AboutUs";

export default function Home() {
  return (
    <div>
      <main>
        <LandingPage />
        <OurWork />
        <OurService />
        <AboutUs />
      </main>
    </div>
  );
}
