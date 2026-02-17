"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "We’ve been sourcing garbage bags from Sangam Plastic Industries Pvt. Ltd for over two years. The quality is consistently excellent, and the durability truly stands out. Highly recommended for bulk buyers.",
    name: "Operations Manager",
    designation: "Facility Management Company",
    img: "/test1.webp",
  },
  {
    text: "Their hospital garbage bags meet all compliance standards and are extremely reliable. The color-coding and strength make biomedical waste management much safer and easier.",
    name: "Admin Head",
    designation: "Multi-Specialty Hospital",
    img: "/test2.webp",
  },
  {
    text: "The disposable bags are strong, leak-proof, and available in the exact sizes we need. Their timely delivery and customer service are impressive.",
    name: "Procurement Officer",
    designation: "Corporate Office",
    img: "/test3.webp",
  },
  {
    text: "We use their heavy-duty garbage bags for industrial waste, and the performance is outstanding. No tearing, no leakage—just dependable quality.",
    name: "Plant Supervisor",
    designation: "Manufacturing Unit",
    img: "/test4.webp",
  },
  {
    text: "Sangam Plastic Industries Pvt. Ltd provides cost-effective waste management solutions without compromising on quality. A trustworthy long-term partner for our business.",
    name: "Director",
    designation: "Cleaning Services Company",
    img: "/test5.webp",
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
              <img
                src={current.img}
                alt={current.name}
                className="w-16 h-16 rounded-full border-4 border-[#176BB0] shadow-md mb-2"
              />
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

{/* <section className="w-full h-auto md:h-[300px] relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301208.02472141205!2d77.005206!3d28.617205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f0063ca2143%3A0x983944fd10dfb00e!2sSBS%20Machinery%20Private%20Limited%20%E2%80%93%20Paper%20Cup%20%26%20Paper%20Plate%20Making%20Machine%20Manufacturer%20in%20Delhi%20NCR!5e1!3m2!1sen!2sus!4v1758178730140!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className=" w-full"
  ></iframe>
</section> */}

    </>
  );
}
