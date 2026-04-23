"use client";
import React from "react";
import Link from "next/link";
import { categories } from "@/Data";
import { ChevronRight } from "lucide-react";

const pages = [
  { name: "Home", path: "/" },
  { name: "Our Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Sitemap = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-16 px-4 sm:px-10 mt-5">
      <div className="max-w-[1200px] mx-auto pt-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Sitemap
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Static Pages */}
          {pages.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="bg-white border rounded-lg h-[100px] flex items-center justify-center text-center font-medium text-gray-800 hover:bg-yellow-100 hover:shadow-md transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Categories with Products */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border rounded-lg p-4 hover:shadow-md transition"
            >
              {/* Category Title */}
              <Link
                href={`/categories/${category.id}`}
                className="block font-semibold text-gray-800 mb-3 hover:text-red-600"
              >
                {category.name}
              </Link>

              {/* Product Links */}
              <div className="space-y-2">
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
                  >
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Sitemap;