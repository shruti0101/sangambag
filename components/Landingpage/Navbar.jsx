"use client";

import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";
import { motion } from "framer-motion";
import TranslateButton from "../GoogleTranslate";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const translateToHindi = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "hi";
      select.dispatchEvent(new Event("change"));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileCategoryOpen(false);
  }, [pathname]);

  return (<>
    <header
      className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-black/40"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* LOGO */}
        <Link
          href="/"
          className={`transition-all duration-500 ${
            scrolled ? "bg-[#053619]" : "bg-transparent"
          }`}
        >
          <Image src="/logo.webp" alt="Logo" width={200} height={60} />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 font-medium text-[22px] ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          {/* PRODUCTS MEGA MENU */}
          <div className="relative group">
            <Link href="/products" className="flex items-center gap-1">
              Our Products <ChevronDown size={16} />
            </Link>

            <div
              className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex 
              bg-white rounded-2xl shadow-2xl border z-50 overflow-hidden"
              style={{ width: 950 }}
            >
              {/* LEFT */}
              <div className="w-1/2 border-r p-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.id}`}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    className={`block px-5 py-2 rounded-md transition ${
                      activeCategory === cat.id
                        ? "bg-emerald-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              {/* RIGHT */}
              <div className="w-2/3 p-6">
                <div className="grid grid-cols-3 gap-4 text-black">
                  {(
                    categories.find((c) => c.id === activeCategory)?.products ||
                    []
                  )
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        className="border rounded-lg p-3 hover:shadow-md transition text-center"
                      >
                        <div className="w-full h-28 flex items-center justify-center">
                          <Image
                            src={p.image?.[0]?.src || "/placeholder.png"}
                            alt={p.name}
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm mt-2">{p.name}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/our-blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* RIGHT SIDE DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/918810422935"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center 
            bg-gradient-to-br from-[#25D366] to-[#128C7E]
            text-white rounded-full shadow-lg 
            hover:scale-110 transition-all duration-300"
          >
            <FaWhatsapp size={22} />
          </a>

          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium"
          >
            Request a Quote
            <ArrowRight size={18} />
          </motion.button>

          <button
            onClick={translateToHindi}
            className=" text-white font-semibold  text-center bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md"
          >
            हिंदी में देखें
          </button>
        </div>

          <button
        onClick={translateToHindi}
        className="md:hidden   text-white font-semibold  text-center bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md"
      >
        हिंदी में देखें
      </button>
        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-6 space-y-4 text-black text-lg">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div>
              <button
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                className="flex items-center justify-between w-full"
              >
                <Link href={"/products"} >Our Products</Link>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCategoryOpen && (
                <div className="mt-3 ml-4 flex flex-col space-y-3 text-base">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.id}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileCategoryOpen(false);
                      }}
                      className="text-gray-700 hover:text-emerald-600"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/our-blogs" onClick={() => setMobileOpen(false)}>
              Blogs
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <a
              href="https://wa.me/918810422935"
              target="_blank"
              className="flex items-center gap-2 text-green-600 font-medium"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <button
              onClick={() => {
                setIsFormOpen(true);
                setMobileOpen(false);
              }}
              className="bg-yellow-500 text-black px-5 py-3 rounded-lg"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}

      

      <TranslateButton />
    </header>
    {isFormOpen && (
        
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
      </>
  );
}
