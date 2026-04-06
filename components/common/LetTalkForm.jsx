"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function LetTalkForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0b1f] via-[#1a1a3a] to-[#0f0f2a] py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Left Side - Title */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-7xl font-bold font-balgin leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#6C63FF]">
                LETS TALK!
              </span>
              <br />
              <span className="text-white text-4xl lg:text-6xl">
                About you.
              </span>
            </h2>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>

              {/* Project Textarea */}
              <div className="relative">
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="About your Project"
                  rows={4}
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#6C63FF] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  <ArrowUpRight className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}