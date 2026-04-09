'use client'
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import LetTalkForm from "@/components/common/LetTalkForm";
import OurServciepage from "@/components/services-pages/OurServciepage";
import OurWorkService from "@/components/services-pages/OurWorkService";
import Testimonials from "@/components/services-pages/Testimonials";
import React from "react";

export default function ServicePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('/images/bgImage.jpg')] bg-cover bg-center" style={{ borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px' }}>
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-[64px] leading-[136%] tracking-normal font-medium text-center font-balgin text-transparent bg-clip-text bg-linear-to-r from-[#1500FF] via-[#C7C2FF] to-[#1500FF]">
            We digitize your ideas.
          </h1>
        </div>
      </div>
      <OurServciepage />
      <OurWorkService/>
      <Testimonials/>

      <div className="bg-white">
        <LetTalkForm/>
      </div>
      <Footer />
    </>
  );
} 