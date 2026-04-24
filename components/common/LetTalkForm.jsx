"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { createContact } from "@/services/contact.service";

export default function LetTalkForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const result = await createContact(formData);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: "",
          email: "",
          project: "",
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
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

              {/* STATUS MESSAGE */}
              {submitStatus && (
                <div className={`p-4 rounded-lg flex items-center gap-3 mb-4 ${submitStatus === 'success'
                  ? 'bg-green-500/20 border border-green-500/50'
                  : 'bg-red-500/20 border border-red-500/50'
                  }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <p className={`text-sm ${submitStatus === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}>
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* BUTTON */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`text-[#5545FF] font-medium text-lg flex items-center gap-2 group transform transition-all duration-300 ${isLoading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-110 hover:text-[#7C3AED]'
                    }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#5545FF] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                        Send
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                          <ArrowUpRight className="text-black w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                        </div>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
