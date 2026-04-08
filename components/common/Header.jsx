"use client";
import { CustomIcon } from "@/components/ui/Icon/CustomIcon";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="w-full flex justify-center absolute top-6 z-50">
            <div
                className="w-full mx-4 max-w-[996px] h-14 px-8 py-3 flex items-center justify-between rounded-2xl bg-linear-to-r from-[#0008F0E5]/30 via-[#0008F000]/50 to-[#111115]  backdrop-blur-sm shadow-lg" >

                {/* Logo */}
                <CustomIcon src="logo_ownthedigital.png" size={200} />

                {/* Navigation */}
                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
                    {["About Us", "Services", "Portfolio", "Blogs", "Contact"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="relative hover:text-white transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-blue-400 hover:after:w-full after:transition-all"
                            >
                                {item}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </header>
    );
}