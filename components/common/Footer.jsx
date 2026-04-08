"use client";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";


export default function Footer() {
    const logos = [
        "/facebook.png",
        "/instagram.png",
        "/Linkdin.png",
        "/twitter-alt-circle.png",
    ];
  return (
    <footer className="bg-black text-white">
      
      {/* TOP SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

                  {/* LOGO */}
                  <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-start justify-center sm:justify-start">
                      <div className="flex items-center h-[32px]">
                          <CustomIcon src="logo_ownthedigital.png" size={150} className="sm:size-[180px] lg:size-[200px]" />
                      </div>
                  </div>

                  {/* SITEMAP */}
                  <div className="text-center sm:text-left">
                      <h3 className="text-[#5545FF] mb-4 text-lg font-semibold">Sitemap</h3>
                      <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                          <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                          <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Blogs</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                      </ul>
                  </div>

                  {/* INDIA */}
                  <div className="text-center sm:text-left">
                      <h3 className="text-[#5545FF] mb-4 text-lg font-semibold">Reach us at</h3>
                      <p className="text-sm text-gray-300">
                          <span className="text-[#5545FF] font-medium">India</span><br />
                          314/2,<br />
                          Sch No 114/2,<br />
                          Vijay Nagar,<br />
                          Indore
                      </p>

                      <p className="mt-4 text-sm">
                          <span className="text-[#5545FF]">Contact On</span><br />
                          +91 99930 67849
                      </p>
                  </div>

                  {/* USA */}
                  <div className="text-center sm:text-left">
                      <h3 className="text-blue-500 mb-4 opacity-0 text-lg font-semibold">Hidden</h3>
                      <p className="text-sm text-gray-300">
                          <span className="text-[#5545FF] font-medium">USA</span><br />
                          720 Seneca<br />
                          St Ste 107<br />
                          Seattle, USA<br />
                          98101
                      </p>

                      <p className="mt-4 text-sm">
                          <span className="text-[#5545FF]">Contact On</span><br />
                          <span className="underline cursor-pointer hover:text-white transition-colors">+1(206)5533419</span>
                      </p>
                  </div>

                  {/* SOCIAL */}
                  <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex gap-4 items-start justify-center sm:justify-start lg:justify-end">
                      {logos.map((logo, i) => (
                          <div
                              key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                    <CustomIcon src={logo} size={40} />
                </div>
            ))}
                  </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
          <div className="bg-[#FFFFFF] text-black text-sm py-4 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-center sm:text-left"> © Copyright 2023, All Rights Reserved</p>

                  <div className="flex gap-4 sm:gap-6">
                      <span className="cursor-pointer hover:text-gray-600 transition-colors">Terms & Conditions</span>
                      <span className="cursor-pointer hover:text-gray-600 transition-colors">Privacy Policy</span>
                  </div>
        </div>
      </div>

    </footer>
  );
}