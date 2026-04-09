import React from 'react'
import { ArrowUpRight } from "lucide-react"

const button = () => {
    return (
        <button  className="absolute bottom-6 right-5 w-20 h-20 rounded-full 
           flex items-center justify-center shadow-lg bg-linear-to-r from-[#5545FF] via-[#2D2486] to-[#000000] hover:from-[#382c9e] hover:via-[#6052fa] hover:to-[#000000a5] transition">
            <ArrowUpRight className="text-white w-10 h-10" />
        </button>
    )
}

export default button