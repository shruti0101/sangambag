"use client";
import Image from "next/image";

export default function WhyChooseSangam() {
  return (
    <section className="w-full px-5  bg-gradient-to-b from-white to-gray-100 py-6 md:py-12 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-md text-green-600 font-semibold mb-2 tracking-wide uppercase">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            Why Choose Sangam Plastic Industries Pvt. Ltd
          </h2>

          <p className="text-black text-base leading-relaxed mb-8">
            As a leading Garbage Bag Manufacturer and a trusted Disposable Bio Dustbin Bag Manufacturer 
            and Hospital Garbage Bag Manufacturer, Sangam Plastic Industries Pvt. Ltd has been delivering 
            high-quality, reliable, and eco-friendly waste management solutions since 1988.
          </p>

          <div className="space-y-6">

            <div className="flex gap-4">
               <div className="w-2 h-2  material-symbols-outlined text-green-500 mr-2">eco</div>
              <p className="text-gray-900">
                <span className="font-semibold text-gray-900">
                  Extensive Industry Experience:
                </span>{" "}
                With over 50 years in the plastics and waste management industry, we have earned 
                the trust of businesses and institutions across India.
              </p>
            </div>

       

            <div className="flex gap-4">
         <div className="w-2 h-2  material-symbols-outlined text-green-500 mr-2">eco</div>
              <p className="text-gray-900">
                <span className="font-semibold text-gray-900">
                  Advanced Manufacturing & Customization:
                </span>{" "}
                Our state-of-the-art facilities in Delhi enable us to handle bulk orders with 
                strict quality control and customization options.
              </p>
            </div>

            <div className="flex gap-4">
           <div className="w-2 h-2  material-symbols-outlined text-green-500 mr-2">eco</div>
              <p className="text-gray-900">
                <span className="font-semibold text-gray-900">
                  Efficiency, Safety & Sustainability:
                </span>{" "}
                We emphasize eco-friendly materials and sustainable production practices to 
                minimize environmental impact.
              </p>
            </div>

            <div className="flex gap-4">
               <div className="w-2 h-2  material-symbols-outlined text-green-500 mr-2">eco</div>
              <p className="text-gray-900">
                <span className="font-semibold text-gray-900">
                  Customer-Focused Approach:
                </span>{" "}
                From personalized support to timely delivery, we ensure reliability and 
                competitive pricing for every client.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden ">
          <Image
            src="/bag/try2.webp"
            alt="Garbage Bag Manufacturing"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
