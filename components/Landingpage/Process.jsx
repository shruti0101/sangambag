"use client";
import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <section style={{backgroundImage:"url(/bag/bg.png)"}} className="relative h-[70vh] w-full   bg-cover bg-center bg-fixed">


      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-white text-lg md:text-2xl font-light mb-4">
        
        </h4>
        <h2 className="text-3xl md:text-5xl leading-snug font-extrabold text-white bg-green-800/90 px-4 py-2 rounded">
        Sangam Plastic Industries Pvt. Ltd – Your Trusted Garbage Bag Manufacturer
        </h2>


      </div>
    </section>
  );
};

export default Process;
