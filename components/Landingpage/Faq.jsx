"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react if not already
import Image from "next/image";

const faqs = [
  {
    q: "What types of garbage bags do you manufacture?",
    a: "We manufacture a wide range of garbage bags including regular household bags, heavy-duty industrial bags, disposable waste bags, and hospital-grade biomedical waste bags."
  },
  {
    q: "Are your garbage bags leak-proof and tear-resistant?",
    a: "Yes, our garbage bags are made from high-quality plastic material that ensures strong tear resistance and leak-proof performance for safe waste disposal."
  },
  {
    q: "Do you provide different sizes and thickness options?",
    a: "Absolutely. We offer multiple size and thickness options to meet residential, commercial, industrial, and healthcare waste management requirements."
  },
  {
    q: "Are your hospital garbage bags compliant with biomedical waste regulations?",
    a: "Yes, our hospital garbage bags are designed to meet healthcare and biomedical waste management standards, including proper color-coding for safe waste segregation."
  },
  {
    q: "Can I place bulk orders for commercial or industrial use?",
    a: "Yes, we specialize in bulk manufacturing and supply for businesses, hospitals, industries, and distributors across India."
  },
  {
    q: "Do you offer customized garbage bags?",
    a: "Yes, we provide customization options including size, thickness, color, and packaging based on your specific requirements."
  },
  {
    q: "Are your products eco-friendly?",
    a: "We focus on sustainable manufacturing practices and offer eco-friendly options to reduce environmental impact."
  },
  {
    q: "How can I request a quotation?",
    a: "You can request a quote by contacting our sales team through the website or by using the 'Get a Quote' button available on our product pages."
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-16 relative px-4 md:px-8 lg:px-16 bg-white">
      {/* Heading */}

<Image alt="bin" width={200} height={200} src="/bag/bin.webp" className="hidden md:block absolute top-0 right-10 "></Image>


<Image alt="erf" width={300} height={300} src="/bag/trash.png" className="hidden md:block absolute top-0 left-0 "></Image>

      <h2 className="text-4xl font-extrabold text-center mb-6 md:mb-12 text-[#07342A]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 px-6 text-lg font-medium text-gray-900 hover:bg-emerald-600/30 transition"
            >
              <span className="flex-1 text-xl text-left">
                {index + 1}. {faq.q}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#07342A] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"

              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
