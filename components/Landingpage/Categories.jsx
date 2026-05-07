"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Plastic Disposable Garbage Bag",
    desc: "Bags designed for segregation of household waste via optical colour sorting.",
    image: "/new/red garba.webp",
    href: "/categories/disposable-garbage-bags",
  },
  {
    title: "Biodegradable Garbage Bags",
    desc: "Bags designed for institutional use, easy to dispense one by one.",
    image: "/new/green.webp",
    href: "/categories/biodegradable-garbage-bags",
  },
  {
    title: "Plastic Small Degradable Garbage Bag",
    desc: "Eco friendly biodegradable garbage bags for sustainable waste disposal.",
    image: "/new/white (1).webp",
    href: "/categories/disposable-garbage-bags",
  },
  {
    title: "Compostable Biodegradable garbage bags",
    desc: "Heavy duty plastic garbage bags for construction and commercial use.",
    image: "/new/red (2).webp",
    href: "/categories/biomedical-garbage-bags",
  },
];

export default function ProductCards() {
  return (
    <section
      style={{ backgroundImage: "url(/bag/aboutbg.webp)" }}
      className="w-full bg-contain bg-[#F8F9F4] bg-no-repeat relative py-7 md:py-12"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-7 md:mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
        <h2 className="text-black text-3xl md:text-[50px] font-bold">
          Our Products
        </h2>

        <Link
          href="/products"
          className="border-2 bg-[#557C73] text-white px-6 py-3 rounded-full font-medium hover:bg-[#557C73] transition duration-300"
        >
          Explore All Products
        </Link>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:flex-row rounded-[28px] overflow-hidden shadow-sm group"
          >
            {/* LEFT IMAGE */}
            <div className="relative w-full sm:w-[45%] min-h-[230px]  bg-[#557C73] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full sm:w-[55%] relative px-6 sm:px-10 py-6 md:py-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-[24px] font-semibold text-[#557C73] mb-3 sm:mb-4 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-black text-sm sm:text-[15px] leading-relaxed">
                  {item.desc}
                </p>

                {/* Decorative Blob */}
                <div className="absolute top-3 right-2 sm:top-4 sm:right-1 w-20 sm:w-28 h-20 sm:h-28 opacity-40 pointer-events-none">
                  <div className="absolute inset-0 bg-[#557C73] p-5 mix-blend-multiply rounded-full" />
                  <Image
                    src="/bag/blob.png"
                    alt="blob"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* CTA */}
              <Link
                href={item.href}
                className="flex items-center justify-between mt-6 sm:mt-10"
              >
                <p className="text-[#557C73] border-2 p-2 capitalize text-sm sm:text-md tracking-wider font-medium">
                  explore product
                </p>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#A3C94C] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#A3C94C] text-sm sm:text-base">
                    east
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}