"use client";
import React from "react";
import { CustomIcon } from "../ui/Icon/CustomIcon";



export const renderDescription = ({ dark, description, highlightWord }) => {
  const accentColor = dark ? "#7C6FF7" : "#5B4EE8";

  if (!highlightWord) return description;
  const parts = description.split(new RegExp(`(${highlightWord})`, "i"));
  return parts.map((part, i) =>
    part.toLowerCase() === highlightWord.toLowerCase() ? (
      <span key={i} className="font-bold" style={{ color: accentColor }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

export default function StatsCard({
  percentage,
  title,
  description,
  highlightWord,
  trend = "up",
  dark = false,
}) {
  const iconSrc =
    trend === "up"
      ? "/TrendUp-Light.png"
      : trend === "down"
        ? "/TrendDown-Light.png"
        : "/Trophy-Light.png";



  return (
    <div
      className={` w-[285px] h-[446px]
        flex flex-col items-center text-center
         p-2 gap-5
        border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${dark
          ? "bg-gray-900 text-white border-indigo-400"
          : "bg-white text-black border-indigo-600"
        }
      `}
    >
      {/* Trend Icon */}
      <CustomIcon src={iconSrc} size={56} alt={`trend ${trend}`} />

      {/* Percentage */}
      <p
        className={`${dark ? "text-white" : "text-gray-900"} font-chiefland-demo`}
        style={{
          fontSize: "78px",
          fontWeight: 740,
          lineHeight: 1,
        }}
      >
        {percentage}
      </p>

      {/* Title */}
      <h3
        className={dark ? "text-white" : "text-gray-900"}
        style={{
          fontFamily: "Gilroy-Regular, sans-serif",
          fontSize: "32px",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={dark ? "text-gray-400" : "text-gray-500"}
        style={{
          fontFamily: "Gilroy-Bold, sans-serif",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        {renderDescription({ dark, description, highlightWord })}
      </p>
    </div>
  );
}