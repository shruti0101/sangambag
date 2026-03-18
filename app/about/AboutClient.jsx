"use client";

import Reveal from "@/components/Landingpage/Reveal";

export default function AboutPage() {
  return (
    <>

      {/* HERO */}
         <section
        style={{ backgroundImage: "url('/bag/bg-other.webp')" }}
        className="w-full  bg-cover bg-center h-[50vh] md:h-[90vh] relative"
      >
        <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-black bg-white p-2 text-2xl md:text-6xl font-bold z-10">
      About Us
          </h2>
        </div>

<div className="absolute inset-0 bg-black/30"></div>


           <div className="absolute inset-0 bg-black/30"></div>
      </section>

   


      {/* ABOUT CONTENT */}
      <section className="py-8 md:py-20 bg-[#F8FAFC]">
        <div className=" mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">


          <div className=" text-black">


<Reveal>            <h2 className="text-4xl leading-snug font-semibold mb-5">
           Trusted Garbage Bag Manufacturer Since 1988
            </h2>
          </Reveal>


<div className="text-justify text-lg">

            <Reveal>
              <p>
                Established in 1988, Sangam Plastic Industries is a leading Garbage Bag Manufacturer in India, known for delivering reliable, hygienic, and cost-effective waste management solutions. With over three decades of industry experience, we have built a strong reputation as a trusted manufacturer, exporter, and supplier serving clients across the country.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                We specialize in manufacturing a wide range of products including garbage bags, disposable bio dustbin bags, hospital garbage bags, plastic dustbins, pedal bins, wheeled bins, bio-medical waste bins, and plastic pallets. Our products are designed to meet the growing demand for safe, eco-friendly, and efficient waste disposal across multiple sectors.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>
                As a reputed Disposable Bio Dustbin Bag Manufacturer, we focus on producing high-quality bags that ensure hygiene, strength, and environmental responsibility. Our bio dustbin bags are widely used in households, offices, hotels, and institutions, helping maintain cleanliness while supporting sustainable waste practices.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <p>
                At Sangam Plastic Industries, customer satisfaction, consistent quality, and long-term reliability remain at the core of everything we do. We are committed to being your trusted partner for all waste management and garbage bag manufacturing needs.
              </p>
            </Reveal>
</div>

          </div>



          
          <Reveal>
            <img src="/bag/try4.jpg"
              className="w-full h-full" />
          </Reveal>
        </div>
      </section>


{/* VISION */}
<section className="py-10 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 relative  grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <Reveal>
        <h2 className="text-4xl font-semibold mb-10">
          Our Vision
        </h2>
      </Reveal>

      <div className="border-l-4 border-green-600 pl-8 space-y-5 text-gray-600">

        <Reveal>
          <p>
            At Sangam Plastic Industries, our vision is to be recognized as India’s most trusted and innovative Garbage Bag Manufacturer, delivering high-quality, hygienic, and environmentally responsible waste management solutions. We strive to support cleaner surroundings by offering products that meet the evolving needs of homes, hospitals, offices, institutions, and industrial facilities.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p>
            As a forward-thinking Disposable Bio Dustbin Bag Manufacturer and Hospital Garbage Bag Manufacturer, we aim to set new benchmarks in safety, durability, and sustainability. Our focus is on developing eco-friendly and high-performance garbage bags that promote efficient waste segregation and responsible disposal practices.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p>
            We aspire to lead the industry through continuous innovation, strict quality standards, and customer-centric values, making reliable waste management products accessible across India. Our vision is to empower a cleaner, safer, and healthier environment for present and future generations.
          </p>
        </Reveal>

      </div>

    </div>


    {/* RIGHT IMAGE */}
    <Reveal delay={0.3}>
      <img
        src="/bag/vision.webp"
        className="w-full h-[450px] object-cover bg-emerald-50 rounded-3xl shadow-xl"
      />
    </Reveal>

       <img
        src="/bag/trash.png"
        className="hidden md:block absolute w-60 h-40 right-90 top-0  object-cover "
      />

  </div>
</section>




{/* MISSION */}
<section className="relative py-10 md:py-18 bg-[#F8FAFC] overflow-hidden">


  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200 rounded-full blur-[160px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-12">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        Our Mission
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <Reveal>
        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">

          {/* SLIDING OVERLAY */}
          <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

          <span className="absolute top-0 left-0 w-full h-1 bg-green-600 rounded-t-3xl"></span>

          <div className="relative z-10 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 text-xl font-bold">
            01
          </div>

          <p className="relative z-10 text-black leading-relaxed text-sm">
            Delivering High-Quality Products: As an experienced Disposable Bio Dustbin Bag Manufacturer and Hospital Garbage Bag Manufacturer, we focus on producing strong, leak-proof, and eco-friendly garbage bags along with waste management products that meet strict quality and hygiene standards. Every product is designed for performance, safety, and long-term usability.
          </p>

        </div>
      </Reveal>


      {/* CARD 2 */}
      <Reveal delay={0.2}>
        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">

          {/* SLIDING OVERLAY */}
          <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

          <span className="absolute top-0 left-0 w-full h-1 bg-green-600 rounded-t-3xl"></span>

          <div className="relative z-10 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 text-xl font-bold">
            02
          </div>

          <p className="relative z-10 text-black leading-relaxed text-sm">
            Ensuring Customer Satisfaction: We place our customers at the center of everything we do by offering customized solutions, bulk order capabilities, timely delivery, and dependable after-sales support. Our goal is to build long-term partnerships through trust, reliability, and consistent service excellence.
          </p>

        </div>
      </Reveal>


      {/* CARD 3 */}
      <Reveal delay={0.4}>
        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">

          {/* SLIDING OVERLAY */}
          <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

          <span className="absolute top-0 left-0 w-full h-1 bg-green-600 rounded-t-3xl"></span>

          <div className="relative z-10 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 text-xl font-bold">
            03
          </div>

          <p className="relative z-10 text-black leading-relaxed text-sm">
            Promoting Sustainability and Innovation: We are committed to environmentally responsible manufacturing by using recyclable materials and sustainable production practices. Through continuous innovation in product design and manufacturing processes, we strive to deliver advanced waste management solutions that support a cleaner, safer, and healthier environment.
          </p>

        </div>
      </Reveal>

    </div>

  </div>
</section>




  {/* CORE VALUES */}
<section className="py-8 md:py-16 bg-white">
  <div className="w-full mx-auto px-6 md:px-16">

    <Reveal>
      <h2 className="text-4xl font-semibold mb-12 text-center lg:text-left">
        Our Core Values
      </h2>
    </Reveal>

    {/* GRID LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">

   

      {/* RIGHT SIDE CONTENT */}
      <div className="border-l-4 border-green-600 pl-8 space-y-10 text-black">

        <Reveal>
          <p>
            <b>Quality Excellence:</b> We are committed to delivering superior quality across all our products. As a dependable Disposable Bio Dustbin Bag Manufacturer and Hospital Garbage Bag Manufacturer, we ensure that every garbage bag meets strict durability, hygiene, and safety standards through rigorous quality control processes.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p>
            <b>Customer-Centric Approach:</b> Our customers remain at the center of everything we do. We focus on transparent communication, timely service, and customized solutions that address specific client requirements and foster long-term partnerships.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p>
            <b>Integrity & Trust:</b> Ethical business practices, honest communication, and consistent reliability form the foundation of our organization. Clients trust us to deliver high-quality products and honor our commitments at every stage.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p>
            <b>Innovation & Progress:</b> We continuously adopt modern technologies, improve product designs, and enhance manufacturing processes to remain competitive and responsive to evolving waste management needs.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <p>
            <b>Sustainability & Responsibility:</b> Environmental responsibility is integral to our values. We prioritize eco-friendly materials, recyclable products, and sustainable manufacturing practices to minimize environmental impact while supporting cleaner and healthier surroundings.
          </p>
        </Reveal>

      </div>

         {/* right SIDE IMAGES */}
      <div className="space-y-6">
        <img
          src="/bag/blackbag.png"
          alt="Quality Manufacturing"
          className=" w-full object-cover"
        />
       
      </div>

    </div>
  </div>
</section>



<section className="relative py-18 overflow-hidden">


  <div className="absolute inset-0">
    <img
      src="/bag/cta.jpg"
      alt="Garbage Bags"
      className="w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
  </div>


  <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-600/30 rounded-full blur-[120px]" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px]" />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6">

    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">

      <Reveal>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Get in Touch
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-white max-w-3xl mx-auto leading-relaxed mb-8 text-xl">
          Partner with <span className="text-green-400 font-medium">Sangam Plastic Industries</span>, 
          a trusted Garbage Bag Manufacturer delivering reliable and hygienic waste 
          management solutions across India. We support businesses, healthcare 
          facilities, and institutions with bulk supply, customized solutions, 
          and expert assistance.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="/contact"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 transition rounded-full font-medium shadow-lg hover:scale-105 duration-300"
          >
            Request a Quote
          </a>

          <a
            href="/products"
            className="px-8 py-4 border border-white/30 hover:border-green-400 hover:text-green-400 transition rounded-full font-medium backdrop-blur-md"
          >
            Explore Our Products
          </a>

        </div>
      </Reveal>

    </div>
  </div>
</section>


    </>
  );
}
