"use client";

import { ShieldCheck, Handshake, CreditCard, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustedServiceProcessSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality Products",
      desc: "Manufactured using high-grade raw materials ensuring durability, hygiene standards, and long-term performance for hospitals, corporates, and institutions.",
    },
    {
      icon: Handshake,
      title: "Transparent Dealings",
      desc: "Clear communication at every stage — from quotation to dispatch — building long-term trusted partnerships with our clients.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      desc: "Secure and convenient payment methods designed for bulk buyers, distributors, and institutional customers.",
    },
    {
      icon: Truck,
      title: "Pan India Timely Delivery",
      desc: "Strong logistics network ensuring fast, safe, and scheduled delivery across India without operational delays.",
    },
  ];

  return (
    <section className="relative w-full py-14 overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">

      {/* Background Decorative Shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-300 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 border border-green-200">
            Our Commitment to Excellence
          </span>

          <h2 className="text-3xl  font-bold text-gray-900 leading-tight">
            Trusted Manufacturing & Service Process
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-green-700">
              Sangam Plastic Industries Pvt. Ltd
            </span>, we follow a structured process ensuring superior product quality,
            transparent operations, and dependable delivery for every client.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 transition duration-500 group-hover:text-white">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 transition duration-500 group-hover:bg-white/20">
                    <Icon className="w-7 h-7 text-green-700 group-hover:text-white transition duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Corner Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
