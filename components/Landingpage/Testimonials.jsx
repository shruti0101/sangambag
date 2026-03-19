"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "We are incredibly impressed with Polywell's range of waste management solutions. The dustbins are robust and versatile, accommodating various types of waste with ease. Our municipality has benefited greatly from the efficient garbage rickshaws, which streamline waste collection in our urban areas. Polywell's wheelbarrows and garbage bags are essential tools in our daily operations.",
    name: "GURDIP SINGH",
    designation: "A.G International",
  },
  {
    text: "Polywell's waste management products have transformed our operations. Their durable Pedal/Wheeled dustbins withstand heavy usage and harsh weather, ensuring efficient waste collection. The garbage rickshaws are a boon for our workers, enabling swift and organized garbage pickup. With Polywell's wheelbarrows and garbage bags, our waste management process has never been more effective.",
    name: "SACHIN GUPTA",
    designation: "PSV Biotech Pvt Ltd.",
  },
  {
    text: "Polywell's commitment to excellence shines through in their waste management products. The dustbins are not only sturdy but also aesthetically pleasing, enhancing the cleanliness of our public spaces. Our waste collection teams rely on the reliable garbage rickshaws, which navigate narrow streets effortlessly. With Polywell's wheelbarrows and garbage bags, waste disposal has become a breeze.",
    name: "MEHUL VOHRA",
    designation: "Medikit Products",
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (

    <>
    
    <section className="relative h-full w-full  bg-[url('/bag/leafbg.webp')] bg-cover bg-fixed  bg-center py-16 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08372C]/20"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">Our Testimonials</span>
        
        </h2>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {current.text}
            </p>

            {/* Profile */}
            <div className="flex flex-col items-center">
           
              <h4 className="text-lg font-semibold">{current.name}</h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#176BB0]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>


    </>
  );
}
