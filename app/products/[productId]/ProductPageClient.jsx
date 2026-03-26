"use client";

import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { Shield, Droplet, Dumbbell, Recycle } from "lucide-react";
export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };


  const features = [
    {
      icon: <Shield size={38} />,
      title: "PUNCTURE RESISTANT",
      desc: "Triple-layered technology prevents tears from sharp construction debris.",
    },
    {
      icon: <Droplet size={38} />,
      title: "LEAK PROOF",
      desc: "Heat-sealed bottom reinforcement ensures zero liquid seepage.",
    },
    {
      icon: <Dumbbell size={38} />,
      title: "HIGH LOAD CAPACITY",
      desc: "Tested to withstand up to 65kg of static weight per bag.",
    },
    {
      icon: <Recycle size={38} />,
      title: "ECO-OPTIMIZED",
      desc: "Manufactured using 30% recycled industrial-grade polymers.",
    },
  ];


  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* ================= HERO ================= */}

      <section className="relative w-full h-[55vh] md:h-[85vh] overflow-hidden">
        <Image
          src="/bag/bg-other.webp"
          alt="Garbage Bag Manufacturer"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />

        <div className="relative  z-10 flex h-full items-center max-w-7xl mx-auto px-6">
          <div className="text-emerald-700 max-w-2xl bg-white p-5 rounded">
       

            <h1 className="text-3xl md:text-6xl font-bold leading-tight mt-3">
              {product.name}
            </h1>

            <p className="mt-4 bg-white text-yellow-500">
              Premium Quality Disposable Garbage Bags for Commercial & Medical
              Use
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT ================= */}

      <section className="px-4 md:px-16 py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ===== IMAGE ===== */}

          <div className="sticky md:top-24">
            <div
              className="bg-white/60 backdrop-blur-xl "
            >
              <div
                className="relative w-full h-[600px] overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove} 
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-cover transition-transform duration-300"
                  style={{
                    transformOrigin: origin,
                    transform: isZoomed ? "scale(1.4)" : "scale(1)",
                  }}
                />
              </div>

              {/* Thumbnails */}
{/* 
              <div className="flex gap-3 mt-5">
                {product.image.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border transition-all duration-300
${
  activeImage === img
    ? "border-[#1FB79C] shadow-lg scale-105"
    : "border-gray-200 hover:scale-105"
}
`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div> */}
            </div>
          </div>

          {/* ===== SPECIFICATIONS ===== */}

          <div  className=" rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-3xl font-semibold mb-6">
              Technical Specifications
            </h2>

            <div className="space-y-4">
              {product.specs?.map((spec, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b pb-3 text-gray-700"
                >
                  <span className="font-medium text-gray-900">
                    {spec.label}
                  </span>

                  <span>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* ===== CTA ===== */}

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <button
                onClick={() => setIsFormOpen(true)}
                className="py-3 rounded-xl bg-[#1FB79C] text-white 
shadow-lg hover:shadow-xl transition-all duration-300 
hover:-translate-y-1 font-semibold"
              >
                Request Quote
              </button>

              <a
                href={`https://wa.me/+919810057441?text=Hello I am interested in ${product.name}`}
                target="_blank"
                className="py-3 text-center rounded-xl border 
border-green-500 text-green-600 hover:bg-green-500 
hover:text-white transition-all duration-300 font-semibold"
              >
                WhatsApp Enquiry
              </a>

              <a
                href="/brochure.pdf"
                download
                className="py-3 text-center rounded-xl border 
border-gray-300 hover:bg-gray-900 hover:text-white 
transition-all duration-300 font-semibold"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>



      




        {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </section>


        {/* ===== DESCRIPTION ===== */}
<section style={{backgroundImage:"url(/bag/descbg.png)"}} className="w-full bg-center p-6 md:p-10 bg-cover">

  <div  className=" mt-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">Product Overview</h2>

          <div className="space-y-4 text-black leading-relaxed">
            {Array.isArray(product.description) ? (
              product.description.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2 key={i} className="text-2xl font-semibold mt-6">
                      {block.text}
                    </h2>
                  );

                if (block.type === "p")
                  return (
                    <p className="text-lg"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );

              if (block.type === "ul")
return (
<ul key={i} className="space-y-3 mt-3">

{block.items.map((item, j) => (
<li
key={j}
className="flex items-start gap-3 text-black text-[18px] leading-relaxed"
>

<span className="material-symbols-outlined  text-[30px] mt-[2px]">
eco
</span>

<span
dangerouslySetInnerHTML={{ __html: item }}
/>

</li>
))}

</ul>
);

              })
            ) : (
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: product.description }} />
            )}
          </div>
        </div>
</section>

      
 <section className="relative w-full overflow-hidden bg-[#07382D] py-18 px-6">
      
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,200,0,0.08)_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.08),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Icon Circle */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/5 shadow-[0_0_25px_rgba(255,200,0,0.1)]">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl tracking-[2px] font-semibold text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-md text-white max-w-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    </>
  );
}
