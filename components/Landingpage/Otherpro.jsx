"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Plastic Dustbin",
    image: "/bag/Plastic-Dustbin.webp", 
    href:"https://plasticdustbinmanufacturer.com/"
  },
  {
    title: "Sharp Container",
    image: "/bag/Sharp-Container.webp",
    href:"https://sharpcontainermanufacturer.com/"
  },
  {
    title: "Needle Cutter",
    image: "/bag/Needle-Cutter.webp",
    href:"https://sharpcontainermanufacturer.com/needle-cutter"
  },
  {
    title: "Wringer Trolley",
    image: "/bag/18-L-Double-Bucket-Wringer-Trolley.webp",
    href:"https://wringertrolleymanufacturer.com/"
  },
];

export default function ProductsManufacturing() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
          <span className="text-black">OUR </span>
          <span className="text-green-600">PRODUCTS MANUFACTURING</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <Link
            href={item.href}
              key={index}
              className="border border-green-600 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              {/* Image Area */}
              <div className="bg-white  flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Bottom Title Bar */}
              <div className="bg-green-600 text-white text-center py-4 text-lg font-semibold">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}