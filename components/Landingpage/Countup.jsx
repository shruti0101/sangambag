"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";

export default function HighQualityCTA() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-md">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative h-[220px] sm:h-[260px] md:h-auto w-full">
            <Image
              src="/bag/bg2.webp"
              alt="Garbage Bags Manufacturing"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative bg-[#118B6C] flex items-center">

            {/* Dot Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-10  flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

              {/* TEXT */}
              <div className="max-w-2xl">
                <h2 className="text-white text-[28px]  md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Leak Proof. No Infection.
                </h2>

                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  At Sangam Plastic Industries Pvt. Ltd, we are a trusted Garbage
                  Bag Manufacturer, specializing in durable disposable bio
                  dustbin bags, hospital garbage bags, and waste management
                  solutions built to last.
                </p>
              </div>

              {/* BUTTON */}
              <Link href="/products">
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center md:justify-start gap-2 bg-yellow-500 text-white px-6 py-3 sm:py-4 rounded-xl font-medium overflow-hidden w-full md:w-auto"
              >
                <span className="relative z-10">
                  Explore Our Range
                </span>
                <ArrowRight size={18} />

                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-white/40 skew-x-12"
                />
              </motion.button>
              </Link>

            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
