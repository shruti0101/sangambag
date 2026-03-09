"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowRight,  } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GarbageBagSection() {
  const [active, setActive] = useState(null);

const accordionData = [
  {
    title: "Garbage Bag Manufacturer",
    desc: (
      <>
        <p className="mb-4 text-white text-lg">
          As a trusted Garbage Bag Manufacturer, Sangam Plastic Industries Pvt. Ltd produces
          high-quality, tear-resistant garbage bags designed for efficient waste management.
          Our bags are suitable for homes, offices, industries, and commercial spaces.
        </p>

        <h4 className="text-emerald-400 text-xl font-medium mb-2">
          Why Choose Our Garbage Bags:
        </h4>

        <ul className="list-disc pl-5 space-y-1 text-white text-lg mb-4">
          <li>Superior Strength: Leak-proof and tear-resistant material.</li>
          <li>Multiple Sizes: Available in various capacities.</li>
          <li>Eco-Friendly Options: Designed with sustainability in mind.</li>
        </ul>

        <p className="text-lg text-white mb-4">
          Whether for daily household waste or heavy-duty industrial disposal,
          our garbage bags deliver reliable performance every time.
        </p>

        <Link href="/products" className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 text-lg">
          Explore Garbage Bags
        </Link>
      </>
    ),
  },

  {
    title: "Disposable Bag Manufacturer",
    desc: (
      <>
        <p className="mb-4 text-white text-lg">
          As a leading Disposable Bag Manufacturer, we offer a wide range of
          disposable waste bags suitable for residential, commercial, and
          industrial applications.
        </p>

        <h4 className="text-emerald-400 font-medium mb-2 text-xl">
          Key Features:
        </h4>

        <ul className="list-disc pl-5 space-y-1 text-lg mb-4 text-white">
          <li>High Durability: Prevents leakage and tearing.</li>
          <li>Convenient Usage: Easy to handle and dispose.</li>
          <li>Custom Sizes & Thickness available.</li>
        </ul>

        <p className="text-lg mb-4 text-white">
          Businesses and households across India trust Sangam Plastic
          Industries Pvt. Ltd for dependable disposable waste solutions.
        </p>

        <Link href="/products" className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 text-lg">
          Explore Disposable Bags
        </Link>
      </>
    ),
  },

  {
    title: "Hospital Garbage Bag Manufacturer",
    desc: (
      <>
        <p className="mb-4 text-white text-lg">
          As a reliable Hospital Garbage Bag Manufacturer, we provide specialized
          garbage bags designed for safe biomedical and hazardous waste disposal.
        </p>

        <h4 className="text-emerald-400 font-medium mb-2 text-xl">
          Key Benefits:
        </h4>

        <ul className="list-disc pl-5 space-y-1 text-lg text-white mb-4">
          <li>Biomedical Waste Compliance.</li>
          <li>Color-Coded Options.</li>
          <li>Strong & Leak-Proof.</li>
        </ul>

        <p className="text-lg mb-4 text-white">
          Hospitals rely on Sangam Plastic Industries Pvt. Ltd for hygienic,
          durable, and regulation-compliant garbage bag solutions.
        </p>

        <Link href="/products" className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 text-lg">
          Explore Hospital Garbage Bags
        </Link>
      </>
    ),
  },
];


  return (
    <section className="w-full py-8 px-6 md:px-16 lg:px-20 bg-gradient-to-r from-[#062B22] via-[#083F33] to-[#021B15] text-white relative overflow-hidden">

      <div className=" mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-3xl  font-bold leading-snug mb-4">
          Premium Garbage Bags, Disposable Waste Bags & Hospital Garbage Bags Supplier

            
          </h1>

          <p className="text-white mb-7 text-lg leading-relaxed max-w-xl">
            Sangam Plastic Industries Pvt. Ltd produces high-quality, tear-resistant
            garbage bags designed for efficient waste management across homes,
            offices, industries, and commercial spaces.
          </p>

          {/* ACCORDION */}

          <div className="space-y-4">
            {accordionData.map((item, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl p-5 cursor-pointer transition"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      active === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {active === i && (
                 <div className="text-gray-300 mt-3 text-sm">
  {item.desc}
</div>
                )}
              </div>
            ))}
          </div>

        {/* BUTTON */}
              <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex  mt-10 items-center gap-2 bg-yellow-500 text-white px-6 py-4 cursor-pointer rounded-xl font-medium overflow-hidden"
                      >
                        <Link href="/products"className="relative z-10">Explore Garbage Bags</Link>
                        <ArrowRight size={19} />
            
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

          
        <Image width={300} height={300} src="/bag/binwhite.png" alt="Garbage Bags" className="absolute bottom-0 left-100 "></Image>

        </div>

        {/* RIGHT IMAGE VIDEO STYLE */}
        <div className="relative    overflow-hidden  ">
          <Image
            src="/bag/dedicated.webp"
            alt="Factory"
            
            width={520}
            height={400}
            className="object-contain md:ml-10 "
          />

      
      

         

       
        </div>

      </div>
    </section>
  );
}
