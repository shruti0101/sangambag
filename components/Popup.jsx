"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  // FIREBASE RECAPTCHA
  useEffect(() => {
    if (!isOpen) return;

    if (
      typeof window !== "undefined" &&
      !window.recaptchaVerifier
    ) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
        }
      );

      window.recaptchaVerifier.render();
    }

    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  // SEND OTP
  const sendOTP = async () => {
    try {
      setLoading(true);

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone.trim(),
        appVerifier
      );

      setConfirmationResult(result);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log(error);

      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmationResult.confirm(otp);

      setIsPhoneVerified(true);

      toast.success("Phone Verified Successfully");

      // SUBMIT FORM AFTER OTP VERIFIED
      await submitForm();
    } catch (error) {
      console.log(error);

      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Sangam Garbage Bag popup Form",
        platformEmail: "info@polywell.co.in",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        toast.success("Form Submitted Successfully");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/918810422935?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        // RESET FORM
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");
        setOtp("");

        setShowOtpBox(false);
        setIsPhoneVerified(false);

        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      return toast.error("Enter Valid Phone Number");
    }

    // IF ALREADY VERIFIED
    if (isPhoneVerified) {
      await submitForm();
      return;
    }

    // SEND OTP FIRST
    await sendOTP();
  };

  return (
    <div className="fixed z-[99999] inset-0 flex items-center justify-center bg-black/40">
      <div
        className="relative rounded-3xl shadow-2xl p-10 max-w-sm md:max-w-2xl text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/bag/try2.webp)" }}
      >
        {/* Close button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide">
          Get In Touch With Us
        </h2>

        <div className="w-28 h-[4px] bg-blue-600 mx-auto mt-3 mb-8 rounded-full"></div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-1/2 max-md:w-full p-3 rounded-md text-black text-sm border border-black border-2 bg-blue-50 focus:outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />

            <select
              name="products"
              required
              disabled={loading}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-1/2 max-md:w-full p-3 rounded-md text-black text-sm border-2 focus:outline-none bg-blue-50"
            >
              <option value="">Select Product</option>

              <option value="Biodegradable Garbage Bags">
                Biodegradable Garbage Bags
              </option>

              <option value="Disposable Garbage Bags">
                Disposable Garbage Bags
              </option>

              <option value="Biomedical Waste Bags">
                Biomedical garbage bags
              </option>
            </select>
          </div>

          {/* PHONE */}
          <div className="flex items-center bg-white rounded-md border border-black border-2 overflow-hidden">
            <span className="px-3 text-lg text-black">🇮🇳</span>

            <input
              type="tel"
              name="phone"
              maxLength={10}
              placeholder="81234 56789"
              className="w-full bg-blue-50 p-3 text-black text-sm focus:outline-none border-0"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* RECAPTCHA */}
          <div id="recaptcha-container"></div>

          {/* OTP BOX */}
          {showOtpBox && !isPhoneVerified && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none bg-blue-50"
              />

              <button
                type="button"
                onClick={verifyOTP}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
              >
                Verify OTP
              </button>
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none bg-blue-50"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full bg-blue-50 p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none h-28 resize-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : !showOtpBox
              ? "Send OTP"
              : !isPhoneVerified
              ? "Verify OTP First"
              : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center text-sm mt-2 font-medium ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}