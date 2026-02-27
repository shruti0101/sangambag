"use client";

import { motion } from "framer-motion";
import { Recycle, Apple, Sprout, DropletOff, BicepsFlexed } from "lucide-react";

const features = [
  {
    icon: <Recycle size={52} />,
    title: "Biodegradable",
  },
  {
    icon: <Apple size={52} />,
    title: "Compostable",
  },
  {
    icon: <Sprout size={52} />,
    title: "100% Eco Friendly",
  },
  {
    icon: <DropletOff size={52} />,
    title: "Leak Proof",
  },
  {
    icon: <BicepsFlexed size={52} />,
    title: "Super Strong",
  },
];

export default function SustainabilityStrip() {
  return (
    <section style={{backgroundImage:"url(/bag/bg5.png)"}} className="w-full bg-[#DFF5E8]   py-10  overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Heading */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <h2 className="text-[32px] md:text-[38px] leading-[45px] font-semibold text-[#1C1C1C]">
            Green & Clean:
            <br />
            Discover Sustainable
           
            Garbage Bag Solutions!
          </h2>
        </motion.div>

        {/* Right Icons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-10">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >

              {/* Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-20 h-20 rounded-full bg-[#B8EBCF] flex items-center justify-center text-[#1C1C1C] shadow-md"
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <p className="mt-3 text-md font-medium text-[#1C1C1C]">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
