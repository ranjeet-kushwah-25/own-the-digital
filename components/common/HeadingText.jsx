import React from "react"

const HeadingText = ({ title, subtitle, className = "" }) => {

 

  return (
    <div className={`mb-16 text-left ${className}`}>
      <h1 className="text-6xl font-bold text-[#5545FF] font-balgin mb-1">{title}</h1>
      <p className="text-2xl font-gilroy-regular text-[#000000]">{subtitle}</p>
    </div>
  )
}

export default HeadingText


