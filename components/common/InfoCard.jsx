"use client";
import React from "react";

export default function InfoCard({
  icon,
  title,
  description,
  dark = false,
  size = "medium",
  hover = true,
  customClass = ""
}) {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  const titleSizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-4xl"
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-2xl
        ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}
        ${hover ? "transform transition-all duration-300 hover:scale-105 hover:shadow-xl" : ""}
        ${customClass}
      `}
    >
      {icon && (
        <div className="mb-8">
          <div className={`w-29 h-29 ${dark ? "text-blue-400" : "text-blue-600"}`}>
            {icon}
          </div>
        </div>
      )}
      
      <h3 className={`text-4xl font-bold text-[#5545FF] mb-3`}>
        {title}
      </h3>
      
      <p className={`text-3xl leading-relaxed ${dark ? "text-gray-300" : "text-[#000000]"}`}>
        {description}
      </p>
    </div>
  );
}
