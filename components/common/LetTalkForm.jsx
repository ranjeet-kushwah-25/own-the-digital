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
    <section className=" max-w-7xl mx-auto py-20 px-4">
      <div className="w-full mx-auto bg-black rounded-3xl px-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="lg:w-1/2">
            <SectionHeading
              title="LETS TALK!"
              subtitle="About you."
              dark
              textSize="48px"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none"
                />
              </div>

              {/* PROJECT */}
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  About your Project
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-[#FFFFFF] text-black outline-none resize-none"
                />
              </div>

              {/* BUTTON */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="text-[#5545FF] font-medium text-lg flex items-center gap-2"
                >
                  Send
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                    <ArrowUpRight className="text-black w-5 h-5" />
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
