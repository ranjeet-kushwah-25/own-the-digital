'use client'
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AboutUs from "@/components/landing-pages/AboutUs";
import OurService from "@/components/landing-pages/OurService";
import OurWork from "@/components/landing-pages/OurWork";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import React from "react";
import 'animate.css';

export default function LandingPage() {
  return (
    <>
    <div className="bg-white">
      <div className="flex flex-col min-h-screen bg-[url('/images/bgImage.jpg')] bg-cover bg-center" style={{ borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px' }}>
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-4xl font-Gilroy-Medium  font-medium text-white ">The results driven</h1>
          <h1 className="text-[64px] animate__heartBeat leading-[136%] tracking-normal font-medium text-center font-balgin text-transparent bg-clip-text bg-linear-to-r from-[#1500FF] via-[#C7C2FF] to-[#1500FF]">
            Search Engine Optimization
          </h1>
          <h1 className="text-4xl font-gilroy-medium  font-medium text-white">you were looking for</h1>
        </div>
          <div className="m-auto flex items-center justify-center p-8  animate__animated animate__infinite animate-spin">
          <CustomIcon src="round_explore.png" size={150} />
        </div>
      </div>
      </div>
      <OurWork />
      <OurService />
      <AboutUs />
      <Footer />
    </>
  );
} 