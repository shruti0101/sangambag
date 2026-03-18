"use client";

import Image from "next/image";
import { ArrowRight,  } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Link from "next/link";
export default function HeroSection() {


const words = [
  " Institutional Supply",
" Tender Supply",
" GeM-Ready Supply",
 "Bulk Supply",
 "Procurement Supply",
];

const [text, setText] = useState("");
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  if (index === words.length) return;

  const timeout = setTimeout(() => {
    setText(words[index].substring(0, subIndex));

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    setSubIndex((prev) => prev + (deleting ? -1 : 1));
  }, deleting ? 40 : 70);

  return () => clearTimeout(timeout);
}, [subIndex, index, deleting]);


return (
<section className="relative w-full pt-15 md:pt-0 md:min-h-[92vh] sm:min-h-screen overflow-hidden">

  {/* Background */}
  <motion.div
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2.5, ease: "easeOut" }}
    className="absolute inset-0"
  >
    <Image
      src="/bag/bg-other.webp"
      alt="Garbage Bags"
      fill
      priority
      className="object-cover"
    />
  </motion.div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#062E2B]/80 via-[#062E2B]/70 to-transparent z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 flex flex-col justify-center">

    {/* Badge */}
    <div className="mb-4">
      <div className="text-[#00D1A0] inline-flex gap-2 items-center border border-[#00D1A0]/40 px-3 py-1 rounded-full text-[11px] sm:text-sm tracking-wide bg-[#00D1A0]/10 whitespace-nowrap">
        LEADING MANUFACTURER SINCE 1988
      </div>
    </div>

    {/* Heading */}
    <h1 className="
      text-white 
      text-[25px]
      leading-[40px]
      sm:text-[42px] 
      sm:leading-[52px]
      md:text-[56px] 
      md:leading-[68px]
      lg:text-[66px]
      lg:leading-[80px]
      font-semibold 
      max-w-xl sm:max-w-5xl
    ">
      Premium Quality Garbage Bags for Reliable
      <br />

      <span translate="no" className="text-[#00D1A0] font-bold break-words">
        {text}
        <span className="ml-1 animate-pulse border-r-2 sm:border-r-4 border-[#00D1A0]"></span>
      </span>
    </h1>

    {/* Subtext */}
    <p className="
      text-white 
      mt-4 
      max-w-md
      text-[14px]
      sm:text-base
      md:text-lg
      leading-relaxed
    ">
      Engineering high-performance industrial garbage bags
      with a focus on durability, environmental responsibility,
      and cost-efficiency.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium relative overflow-hidden"
      >
        <Link href="/products" className="z-10">
          Explore Garbage Bags
        </Link>
        <ArrowRight size={18} />
      </motion.button>

      <Link
        href="/contact"
        className="w-full sm:w-auto text-center bg-white/10 text-white px-6 py-3 rounded-xl backdrop-blur-lg border border-yellow-500"
      >
        Contact Us
      </Link>

    </div>
  </div>

  {/* Floating Mobile Toolbar */}
  <div className="

  hidden md:block 
    fixed 
    bottom-4 
    left-1/2 
    -translate-x-1/2 
    sm:absolute 
    sm:translate-x-0 
    sm:left-auto 
    sm:right-10
    z-30
    w-[92%] 
    sm:w-auto
  ">
    <div className="bg-yellow-500 p-4 sm:p-6 rounded-xl text-black max-w-xs shadow-2xl">
      <p className="font-bold text-lg sm:text-xl">Heavy Duty Range</p>
      <p className="text-[13px] sm:text-sm opacity-80 leading-snug">
        New 100 micron industrial grade bags for heavy construction waste. Now available for wholesale.
      </p>
    </div>
  </div>

</section>
);
}


