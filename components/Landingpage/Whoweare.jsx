"use client";
import Image from "next/image";

const industries = [
  {
    title: "Hospitals & Healthcare Facilities",
    desc: "Maintain infection-free environments with hospital-grade garbage bags and bio dustbin bags, ideal for patient rooms, operation theaters, and labs.",
    img: "/bag/indus1.png",
  },
  {
    title: "Hotels & Hospitality",
    desc: "Ergonomic waste solutions help housekeeping teams clean guest rooms, lobbies, banquet halls, and corridors efficiently.",
    img: "/bag/indus2.jpg",
  },
  {
    title: "Factories & Industrial Units",
    desc: "Heavy-duty garbage bags withstand large-scale cleaning and industrial waste disposal in factories and warehouses.",
    img: "/bag/indus4.jpg",
  },
  {
    title: "Offices & Commercial Spaces",
    desc: "Keep corporate offices, malls, and retail outlets clean and hygienic with easy-to-use waste management products.",
    img: "/bag/indus3.webp",
  },
  {
    title: "Educational Institutions",
    desc: "Schools and universities rely on durable bins and bio dustbin bags for clean classrooms and laboratories.",
    img: "/bag/indus5.jpg",
  },
  {
    title: "Residential Complexes",
    desc: "Eco-friendly garbage bags provide safe and convenient waste disposal for homes and apartment communities.",
    img: "/bag/indus6.jpg",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full relative py-10 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-white to-gray-50">

      <Image alt="bin" width={300} height={300} src="/bag/bin2bg.png"
        className="hidden xl:block absolute top-10 right-[0%]">
      </Image>

      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-green-600 font-semibold uppercase text-sm mb-4">
          Industries & Applications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Waste Management Solutions for Every Industry
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto">
          Sangam Plastic Industries Pvt. Ltd provides durable and hygienic waste
          management solutions, including disposable bio dustbin bags and
          hospital garbage bags, for diverse professional settings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <div className="relative w-full h-52">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
