import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  Building2,
  Stethoscope,
  ShoppingCart,
  Store,
  Warehouse,
} from "lucide-react";
import Addons from "./Addons";
const About = () => {




  // who we work with data

  const partners = [
  {
    title: "Government Hospital Tenders Bidders & Project Contractors",
    icon: Building2,
  },
  {
    title: "Private Hospital Purchase & Procurement Teams",
    icon: Stethoscope,
  },
  {
    title: "GeM Portal Institutional Procurement Buyers",
    icon: ShoppingCart,
  },
  {
    title: "Retailers & Wholesale Distributors",
    icon: Store,
  },
  {
    title: "Municipal Corporations & Urban Local Bodies",
    icon: Warehouse,
  },

   {
    title: "Facility Management & Waste Handling Companies",
    icon: Warehouse,
  },
];






  return (
    <div>





{/* who we work with section*/}


<section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-5 md:py-10  px-4 sm:px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-9 md:gap-14 items-center">

    {/* LEFT */}
    <div>

      <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-wider text-green-700 bg-green-50 rounded-full border border-green-100">
        OUR PROCUREMENT PARTNERS
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] leading-tight mb-5">
        Trusted by Institutional Buyers 
        & Healthcare Procurement Teams
      </h2>

      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Polywell supplies certified biomedical disposal solutions to 
        hospitals, government bodies, and bulk procurement partners 
        across India.
      </p>

      {/* GRID */}
      
      <div className="grid grid-cols-2 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-green-50 border border-green-100">
              <partner.icon className="w-5 h-5 text-green-700" />
            </div>

            <p className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
              {partner.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white bg-[#0B2545] rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        Become a Bulk Procurement Partner
        <span className="text-lg">→</span>
      </Link>
    </div>

    {/* RIGHT */}
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/whowework.avif"
          alt="Healthcare Procurement"
          width={900}
          height={900}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* FLOAT CARD */}
      <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl px-5 py-3">
        <p className="text-sm font-semibold text-[#0B2545]">
          Serving 500+ Healthcare Institutions
        </p>
      </div>
    </div>

  </div>
</section>



<Addons/>


      {/* <section style={{backgroundImage:"url(/bag/catbg.webp)"}} className=" bg-cover">
        <div className="max-w-7xl mx-auto  py-5 md:py-20">

          <Reveal>


          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <Image
              src="/bag/try1.png"
              alt="About Us Image"
              width={550}
              height={400}
              className="mt-5"
            />

            <div className=" ">
              <h2 className="text-3xl  text-black font-semibold mb-4">
              Sangam Plastic Industries Pvt. Ltd – Your Trusted Garbage Bag Manufacturer
              </h2>
              <p className="text-black text-lg leading-relaxed">
                Established in 1988, Sangam Plastic Industries Pvt. Ltd has become a leading Garbage Bag Manufacturer in India, providing high-quality and reliable waste management solutions for homes, hospitals, offices, hotels, and industrial sectors. With decades of experience, we specialize in producing durable garbage bags, disposable bio dustbin bags, hospital garbage bags and other waste management products.

              </p>
               
<p className="mt-3 text-lg leading-relaxed">As a reputed Disposable Bio Dustbin Bag Manufacturer and Hospital Garbage Bag Manufacturer, we focus on delivering products that meet the highest standards of hygiene, strength, and environmental responsibility. Our solutions are designed to support efficient waste disposal, improve cleanliness, and promote sustainable practices across diverse industries.
With modern manufacturing facilities in Delhi, advanced machinery, and a skilled workforce, we combine innovation, quality, and customer satisfaction to provide dependable, eco-friendly, and long-lasting products. At Sangam Plastic Industries Pvt. Ltd, we aim to be your trusted partner for all waste management needs, offering customizable solutions, bulk orders.</p>
            
            </div>
          </div>
          </Reveal>
        </div>
      </section> */}
    </div>
  );
};

export default About;
