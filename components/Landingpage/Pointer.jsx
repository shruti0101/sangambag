"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function MediaStatCard({ title, desc, imgSrc }) {
  return (
    <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-lg group">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-[#0B2545]/60" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-[18px] sm:text-[22px] md:text-[30px] font-semibold leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-white leading-[20px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function StatCardLeft({ title, desc }) {
  return (
    <div className="relative pl-6 border-l-2 border-green-500">
      <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-green-500" />
      <h3 className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold text-[#0B2545] leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-black text-[12px] sm:text-[15px] md:text-[16px] md:leading-[22px]">
        {desc}
      </p>
    </div>
  );
}

export default function PolywellTrustStatsSection() {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
         

          <h2 className="text-[22px] sm:text-[26px] md:text-[40px] font-semibold text-[#0B2545]">
            Why Government & Institutional Buyers Trust Polywell
          </h2>

          <p className="text-black mt-2 text-[12px] sm:text-[16px] md:text-[20px]">
            Delivering scale, compliance, and execution certainty since 1988.
          </p>
        </motion.div>

        {/* MAIN STRUCTURE */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT KPI PANEL */}
          <div className="space-y-6 ">
            <MediaStatCard
              imgSrc="/pointer1.jpeg"
              title="50+ Years of Industry Experience"
              desc="Serving government institutions, healthcare procurement teams, traders, and bulk buyers with consistent manufacturing reliability."
            />
            <MediaStatCard
              imgSrc="/pointer2.jpeg"
              title="73,800+ sq. ft. Manufacturing Infrastructure"
              desc="High-capacity production facility engineered for institutional-grade and tender-based bulk supply."
            />
            <MediaStatCard
              imgSrc="/pointer3.jpeg"
              title="5.5 Million+ Units Supplied Annually"
              desc="From hospital dustbins and biomedical waste bins to garbage bags and sanitation products — manufactured and delivered in bulk volumes."
            />
            <MediaStatCard
              imgSrc="/pointer4.jpeg"
              title="7,600+ Distributors & Partners"
              desc="A strong Pan-India supply ecosystem ensuring smooth availability and regional dispatch coordination."
            />
          </div>

          {/* RIGHT TIMELINE */}
          <div className="space-y-8 ">
            <StatCardLeft
              title="99%+ On-Time Tender Fulfillment Rate"
              desc="Aligned production scheduling and dispatch planning to meet strict government and institutional deadlines."
            />
            <StatCardLeft
              title="100% Tender-Ready Documentation Support"
              desc="GST billing, specification compliance, and procurement paperwork assistance for smooth order processing."
            />
            <StatCardLeft 
              title="1,000+ Institutional & Government Orders Executed"
              desc="Supplying to municipal corporations, healthcare institutions, procurement contractors, and wholesale distributors."
            />
            <StatCardLeft
              title="150+ OEM & Custom Tender Projects Executed"
              desc="Customized manufacturing support based on tender specifications and institutional requirements."
            />
            <StatCardLeft
              title="GeM Approved Products"
              desc="Our products are listed and compliant for procurement through the Government e-Marketplace (GeM), making institutional purchasing seamless and transparent."
            />
            <StatCardLeft
              title="Pan-India Supply Across 28+ States & UTs"
              desc="Strong logistics coordination supporting large-scale nationwide deliveries with streamlined dispatch planning and institutional supply support."
            />
          </div>

        </div>

      </div>
    </section>
  );
}