"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,

  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer style={{ backgroundImage: "url(/bag/footebg.jpg)" }} className="relative bg-center bg-cover text-white px-5 py-2">
      {/* Watermark */}
      <span className="hidden md:flex absolute mt-20 inset-0  items-center justify-center md:text-[7rem] font-extrabold  text-white/20 select-none pointer-events-none z-0">
        Sangam Plastic Industries
      </span>

      {/* Main Footer */}
      <div className="container mx-auto  md:py-10 grid grid-cols-1 md:grid-cols-5 gap-3">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-yellow-500 pl-2 mb-4">
            About Us
          </h3>
          <p className="text-md leading-relaxed">
            Established in 1988, Sangam Plastic Industries Private Limited has been a leading Garbage Bag Manufacturer, {" "}
            <span className="text-yellow-500">
              specializing in the production of high-quality cleaning and housekeeping equipment for commercial, industrial, and institutional use.
            </span>{" "}

          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-yellow-500 pl-2 mb-4">
            Contact us
          </h3>
          <p className="text-md flex items-start gap-2 mb-1">
            <FaMapMarkerAlt className="mt-1 text-yellow-500" size={30} />
            Office Address - 110, Satya Bhawan, 36 Community Center, Wazirpur Industrial Area, New Delhi-110052
          </p>
          <p className="text-md flex items-start gap-2 mb-3">
            Manufacturing Address Spread Across Delhi NCR
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-yellow-500" /> +91-9810026034
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-yellow-500" /> +91-9810316441
          </p>
          <p className="text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-yellow-500" /> info@polywell.co.in
          </p>
          {/* Social Icons */}
          {/* <div className="flex gap-3">
            <a
              href="https://www.youtube.com/@smallbusinesssolution"
              className="p-2 bg-black rounded-full hover:bg-yellow-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/SBS.COMPANY777?mibextid=ZbWKwL"
              className="p-2 bg-black rounded-full hover:bg-yellow-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sbs_manufacturers/?igsh=MTRjNDE4NmVhdmwydQ%3D%3D#"
              className="p-2 bg-black rounded-full hover:bg-yellow-500 transition"
            >
              <FaInstagram />
            </a>
          </div> */}
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-xl sm:ml-8 font-semibold border-l-2 border-yellow-500 pl-2 mb-4">
            Main Menu
          </h3>
          <ul className="space-y-2 text-md sm:ml-8">
            <li>
              <a href="/about" className="hover:text-yellow-500">
                About us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-500">
                Our Products
              </a>
            </li>
            <li>
              <a href="/our-blogs" className="hover:text-yellow-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Contact us
              </a>
            </li>


          </ul>
        </div>

        {/* More Info */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-yellow-500 pl-2 mb-4">
            More Information
          </h3>
          <ul className="space-y-2 text-md cursor-pointer">
            <li>
              <a
                href="/categories/paper-cup-making-machine"
                className="hover:text-yellow-500"
              >
                Disposable Garbage Bags
              </a>
            </li>
            <li>
              <a
                href="/categories/paper-die-cutting-machine"
                className="hover:text-yellow-500"
              >

                Biomedical garbage bags
              </a>
            </li>
            <li>
              <a
                href="/categories/bio-degradable-bag-making-machine"
                className="hover:text-yellow-500"
              >
                Biodegradable Garbage Bags
              </a>
            </li>

            {/* other */}
            <li>
              <a
                href="https://sharpcontainermanufacturer.com/"
                className="hover:text-yellow-500"
              >

                Sharp Container
              </a>
            </li>

            <li>
              <a
                href="https://wringertrolleymanufacturer.com/"
                className="hover:text-yellow-500"
              >

                Wringer Trolley
              </a>
            </li>

            <li>
              <a
                href="https://plasticdustbinmanufacturer.com/"
                className="hover:text-yellow-500"
              >

                Plastic Dustbin
              </a>
            </li>

          </ul>
        </div>

        {/* Trust Elite Section */}
        <div className="px-6 items-center md:pb-8">
          <div>
            <h3 className="text-xl font-semibold border-l-2 border-yellow-500 pl-2 mb-4">
              Trust Elite Certificate
            </h3>
            <p className="text-sm leading-relaxed">
              We are proud to present the TrustElite Certificate of Excellence to Sangam Plastic Industries Pvt. Ltd., recognizing their commitment to exceptional customer service, outstanding business practices, and a dedication to building trust with their customers.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/TRUST-ELITE.webp"
              alt="Trust Elite"
              className="w-28 h-28 object-contain cursor-pointer hover:scale-105 transition"
              onClick={() => setIsModalOpen(true)}
            />

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ✕
                  </button>
                  <img
                    src="/bag/cert.webp"
                    alt="Trust Elite Full"
                    className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-300 text-center text-sm py-3 px-4 flex flex-col md:flex-row justify-between items-center">
        <p>Copyright © 2026 Polywell. All Right Reserved.</p>
        <p>
          Website Designed  By Promozione Branding Pvt. Ltd.{" "}
          <a
            href="https://promozionebranding.com/"
            className="hover:text-yellow-500 underline"
          >
            Website Designing Company.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
