"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
 

  // Flatten all products from all categories
  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, categoryId: cat.id }))
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/bag/bg-other.webp.webp')" }}
        className="w-full bg-cover bg-center h-[50vh]  md:h-[90vh] relative"
      >
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-green-600 bg-white p-2 text-2xl md:text-7xl font-bold z-10">All Products</h2>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl px-10 py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={product.image[0]?.src || "/placeholder.png"} // ✅ Use first image or placeholder
                alt={product.image[0]?.alt || product.name}
                width={300}
                height={200}
                title={product.name} 
                className="w-full h-75 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg text-center font-semibold">{product.name}</h2>
                {product.price && (
                  <p className="text-gray-600">{product.price}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
    
      </div>

      
    </div>

    
  );
};

export default Page;
