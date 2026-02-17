"use client";

import Image from "next/image";
import { ArrowRight,  } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function HeroSection() {


const words = [
  "Waste Management",
  "Bulk Waste Systems",
  "Commercial Waste Solutions",
  "Sanitation Solutions",
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
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 Background Parallax Zoom Animation */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/bag/hero.png"
          alt="Garbage Bags"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-[#062E2B]/70 via-[#062E2B]/65 to-transparent z-10"
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 mt-10 h-full flex flex-col justify-center">

        {/* 🔥 Badge Animation */}
        <motion.div
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 flex"
        >
          <div className="text-[#00D1A0] flex gap-2 items-center border border-[#00D1A0]/40 px-4 py-1 rounded-full text-sm tracking-wide bg-[#00D1A0]/10">
            <span className="material-symbols-outlined">eco</span>
            LEADING MANUFACTURER SINCE 1988
          </div>
        </motion.div>

        {/* 🔥 Heading Stagger Animation */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="text-white text-[66px] leading-[80px] font-semibold max-w-4xl"
        >
          {"Premium Quality Garbage Bags for Reliable".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: 60, opacity: 0 },
                show: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4 }}
            >
              {char}
            </motion.span>
          ))}

          <br />

       <motion.span

  transition={{
    duration: 2,
    repeat: Infinity
  }}
  className="text-[#00D1A0]  font-bold relative"
>
  {text} <span className="animate-pulse"> _</span>
  <span className="border-r-4 border-[#00D1A0] ml-1 animate-pulse"></span>
</motion.span>


         
        </motion.h1>




        {/* 🔥 Subtext Fade */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white mt-4 max-w-xl text-lg"
        >
          Engineering high-performance industrial garbage bags
          with a focus on durability, environmental responsibility,
          and cost-efficiency.
        </motion.p>

        {/* 🔥 Buttons Animation */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 mt-8"
        >
          {/* Magnetic Explore Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium overflow-hidden"
          >
            <span className="relative z-10">Explore Our Range</span>
            <ArrowRight size={18} />

            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-white/40 skew-x-12"
            />
          </motion.button>

          {/* Glass Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 text-white px-6 py-3 rounded-xl backdrop-blur-lg border border-yellow-500"
          >
            Sustainability Report
          </motion.button>
        </motion.div>
      </div>

      {/* 🔥 Floating Glass Toolbar */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="absolute bottom-5 bg-yellow-500 right-20 z-30"
      >
      <div className="bg-industrial-yellow p-6 rounded-xl text-background-dark max-w-xs  shadow-2xl">
<span className="material-symbols-outlined text-5xl mb-2">warning</span>
<p className="font-bold text-xl">Heavy Duty Range</p>
<p className="text-md opacity-80 leading-snug">New 100 micron industrial grade bags for heavy construction waste. Now available for wholesale.</p>
</div>
      </motion.div>

    </section>
  );
}


