"use client";

import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = {
        platform: "Sangam Garbage Bag Contact Form",
        platformEmail: "info@sangamgarbagebags.com",
        name,
        phone,
        email,
        city,
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("success");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
City: ${city}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: "url('/bag/bg-other.webp')" }}
        className="w-full h-[55vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Sangam Garbage Bag Manufacturer
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Premium Quality Garbage Bags Manufacturer & Supplier in India
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Phone */}
          <div className="bg-green-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <Phone size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-lg">+91-9810057441</p>
            <p className="text-lg">+91-9810026034</p>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-green-700 p-8 rounded-2xl shadow-lg text-center">
            <Mail size={40} className="mx-auto mb-4 text-green-700" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Email Address
            </h3>
            <p className="text-gray-800 text-lg">
             info@polywell.co.in
            </p>
          </div>

          {/* Address */}
          <div className="bg-green-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <MapPin size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Factory Address</h3>
            <p>
          Address - 110, Satya Bhawan, 36 Community Center, Wazirpur Industrial Area, New Delhi-110052
            </p>
          </div>

        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send Us Your Requirement
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <select
                  className="border rounded-lg px-4 py-3 w-full bg-green-700 text-white font-semibold"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                >
                  <option value="">Select Product</option>
                  <option value="Black Garbage Bags">Biodegradable Garbage Bags</option>
                  <option value="Green Garbage Bags">Disposable Garbage Bags</option>
                  <option value="Biomedical Waste Bags">Biomedical garbage bags</option>
              
             
                </select>
              </div>

              <input
                type="email"
                required
                placeholder="Email Address"
                className="border rounded-lg px-4 py-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="border rounded-lg px-4 py-3 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-green-700 hover:bg-green-800 transition text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-semibold mt-2">
                  Thank you! Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold mt-2">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>

{/* map */}
<div className="mt-5">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.2848900849685!2d77.1662442!3d28.702004099999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0223846e0903%3A0x6b8f0fbb73c40b4c!2sSangam%20Plastic%20Industries%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1771318884119!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" className="w-full h-100" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


        </div>
      </section>

    </div>
  );
}
