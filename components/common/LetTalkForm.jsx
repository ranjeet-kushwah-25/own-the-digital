"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function LetTalkForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 animate__animated animate__fadeIn">
      <div className="w-full mx-auto bg-black rounded-3xl px-10 py-16 transform transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 animate__animated animate__slideInLeft">
            <SectionHeading
              title="LETS TALK!"
              subtitle="About you."
              dark
              textSize="48px"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 w-full max-w-md animate__animated animate__slideInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="text-gray-300 text-sm mb-2 block transition-colors duration-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none transform transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/50 focus:bg-gray-50"
                  placeholder="Enter your name"
                />
              </div>

              {/* EMAIL */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="text-gray-300 text-sm mb-2 block transition-colors duration-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none transform transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/50 focus:bg-gray-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* PROJECT */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="text-gray-300 text-sm mb-2 block transition-colors duration-300">
                  About your Project
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none resize-none transform transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/50 focus:bg-gray-50"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* BUTTON */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="text-[#5545FF] font-medium text-lg flex items-center gap-2 group transform transition-all duration-300 hover:scale-110 hover:text-[#7C3AED]"
                >
                  Send
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <ArrowUpRight className="text-black w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
