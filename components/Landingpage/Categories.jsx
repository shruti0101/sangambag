"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const data = [
  {
    title: "Plastic Disposable Garbage Bag",
    desc: "Bags designed for segregation of household waste via optical colour sorting.",
    image: "/bag/pro1.png",
    href:"/categories/disposable-garbage-bags"
  },
  {
    title: "Biodegradable Garbage Bags",
    desc: "Bags designed for institutional use, easy to dispense one by one.",
    image: "/bag/pro2.png",
    href:"/categories/biodegradable-garbage-bags"
  },
  {
    title: "Plastic Small Degradable Garbage Bag",
    desc: "Eco friendly biodegradable garbage bags for sustainable waste disposal.",
    image: "/bag/pro3.png",
    href:"/categories/disposable-garbage-bags"
  },
  {
    title: "Compostable Biodegradable garbage bags",
    desc: "Heavy duty plastic garbage bags for construction and commercial use.",
    image: "/bag/pro4.png",
    href:"/categories/biomedical-garbage-bags"
  },
];

export default function ProductCards() {
  return (
    <section
      style={{ backgroundImage: "url(/bag/aboutbg.webp)" }}
      className="w-full bg-contain bg-[#F8F9F4] bg-no-repeat relative py-12"
    >

 <div className="max-w-7xl mx-auto px-6 mb-14 flex items-center justify-between">
  
  <h2 className="text-black text-3xl md:text-[50px] font-bold">
    Our Products
  </h2>

  <Link href="/products" className="border-2 bg-[#557C73] text-[#557C73] px-6 py-3 rounded-full font-medium hover:bg-[#557C73] text-white transition duration-300">
    Explore All Products
  </Link>

</div>

       
      

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 ">



        {data.map((item, i) => (
          <motion.div
            key={i}
           
            className="flex rounded-[28px] overflow-hidden  shadow-sm group"
          >

            {/* 🔥 LEFT IMAGE FULL COVER PANEL */}
            <div className="relative w-[45%] min-h-[260px] bg-[#557C73] overflow-hidden">

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain  rounded-lg"
                />
              </motion.div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="w-[55%] relative px-10 py-12 flex flex-col justify-between">

              <div>
                <h3 className="text-[24px] font-semibold text-[#557C73] mb-4 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-black text-[15px] leading-relaxed">
                  {item.desc}
                </p>

 <div className="absolute top-4 right-1 w-28 h-28 opacity-40 pointer-events-none">

  {/* Color Overlay */}
  <div className="absolute inset-0 bg-[#557C73] p-5 mix-blend-multiply rounded-full" />

  {/* PNG */}
  <Image
    src="/bag/blob.png"
    alt="blob"
    fill
    className="object-contain p-2"
  />

</div>


              </div>

              {/* CTA */}
              <Link href={item.href} className="flex  items-center justify-between mt-10">
                <p className="text-[#557C73] border-2 p-2 capitalize text-md tracking-wider font-medium">
                  explore product
                </p>

                <div className="w-12 h-12 rounded-full border border-[#A3C94C] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#A3C94C]">
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
