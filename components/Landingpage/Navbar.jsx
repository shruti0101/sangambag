"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";
import { ArrowRight,  } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
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
  <Image
    src="/logo.webp"
    alt="Logo"
    width={200}
    height={60}
  />
</Link>


        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 font-medium text-[22px]
          ${scrolled ? "text-black" : "text-white"}
        `}
        >
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="relative group">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* PRODUCTS MEGA MENU */}
          <div className="relative group">
            <Link href="/products" className="flex items-center gap-1">
              Our Products <ChevronDown size={16} />
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex 
            bg-white backdrop-blur-xl 
            rounded-2xl shadow-2xl border border-white/20 
            z-50 overflow-hidden "
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
                  ).slice(0, 3).map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      className="border rounded-lg p-3 hover:shadow-md transition text-center"
                    >
                      <div className="w-full h-30 flex items-center justify-center">
                        <Image
                          src={p.image?.[0]?.src || "/placeholder.png"}
                          alt={p.name}
                          width={400}
                          height={400}
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

          <Link href="#" className="relative group">
            Blogs
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="https://wa.me/+91-9810316441"
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
            className="relative flex items-center gap-3 bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium overflow-hidden"
          >
            <span className="relative cursor-pointer z-10">Request a Quote</span>
            <ArrowRight size={18} />

            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-white/40 skew-x-20"
            />
          </motion.button>
        </div>

        {/* MOBILE BTN */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}
