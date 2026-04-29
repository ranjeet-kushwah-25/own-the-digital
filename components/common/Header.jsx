"use client";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full flex justify-center absolute top-4 sm:top-6 z-50">
            <div
                className="w-full mx-2 sm:mx-4 max-w-[996px] h-12 sm:h-14 px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center justify-between rounded-2xl bg-linear-to-r from-[#0008F0E5]/30 via-[#0008F000]/50 to-[#111115] backdrop-blur-sm shadow-lg" >

                {/* Logo */}
                <Link href='/landing-page'>
                    <CustomIcon src="logo_ownthedigital.png" size={192} className="sm:size-150 md:size-180 lg:size-200" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-300 text-sm xl:text-lg font-medium">
                    {["About Us", "Services", "Portfolio", "Blogs", "Contact", "Login"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="relative hover:text-white transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-[#5545FF] hover:after:w-full after:transition-all"
                            >
                                {item}
                            </Link>
                        )
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-gray-300 hover:text-white transition-colors"
                >
                    <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'mb-1'}`}></span>
                    <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                    <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                <div className="bg-black/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                    <nav className="flex flex-col space-y-3">
                        {["About Us", "Services", "Portfolio", "Blogs", "Contact", "Login"].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition duration-300 py-2 px-4 rounded-lg hover:bg-white/10 text-lg font-medium"
                                >
                                    {item}
                                </Link>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}