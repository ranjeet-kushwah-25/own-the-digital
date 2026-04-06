import React from "react";
import LandingPage from "./(root)/(website)/landing-page/page";
import OurWork from "../components/landing-pages/OurWork";
import OurService from "@/components/landing-pages/OurService";

export default function Home() {
  return (
    <div>
      <main>
        <LandingPage />
        <OurWork />
        <OurService />
      </main>
    </div>
  );
}
