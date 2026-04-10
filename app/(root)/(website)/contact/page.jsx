"use client";

import Footer from "@/components/common/Footer";
import FormField from "@/components/common/FormField";
import Header from "@/components/common/Header";
import SectionHeading from "@/components/common/SectionHeading";
import LocateUs from "@/components/contact-us-pages/LocateUs";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <>
    <section className="bg-black rounded-[28px]  text-white">
      <div className="mb-10">
      <Header />
      </div>

      <div className="mt-2">
      {/* Heading */}
      <SectionHeading
        title="CONTACT US"
        subtitle="who you are"
        dark={true}
        align="center"
      />
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Form */}
        <div className="p-8 md:p-16">
          <FormField
            index={1}
            label="What's your name/company name?"
            placeholder="type your name/company name..."
          />

          <FormField
            index="2"
            label="What's your email address?"
            placeholder="example@email.com"
            type="email"
          />

          <FormField
            index={3}
            label="What's your phone number?"
            placeholder="+91 00000 00000"
          />

          <FormField
            index={4}
            label="What services are you looking for?"
            type="select"
            options={["Web Development", "SEO", "UI/UX Design"]}
          />

          <FormField
            index={5}
            label="Tell us about your project"
            type="textarea"
            placeholder="type your project description"
          />
          {/* 
          <SubmitButton /> */}
          <div className="flex gap-3 items-center justify-end">
            {" "}
            <span className="text-[#5545FF] font-semibold text-[24px]">Send</span>
            <button
              className=" bottom-6 right-5 w-20 h-20 rounded-full 
           flex items-center justify-center shadow-lg bg-linear-to-r from-[#5545FF] via-[#2D2486] to-[#000000] hover:from-[#382c9e] hover:via-[#6052fa] hover:to-[#000000a5] transition"
            >
              <ArrowUpRight className="text-white w-10 h-10" />
            </button>
          </div>
        </div>

        {/* Right Side CTA */}
        <div className="flex items-start justify-center">
          <CustomIcon src="/getInTouch.png" size={285} />
        </div>
      </div>
    </section>
    <LocateUs />
    <Footer/>
    </>
  );
}
