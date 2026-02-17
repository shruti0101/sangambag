import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
const About = () => {
  return (
    <div>
      <section style={{backgroundImage:"url(/bag/catbg.webp)"}} className=" bg-cover">
        <div className="max-w-7xl mx-auto  py-5 md:py-20">

          <Reveal>


          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <Image
              src="/bag/try1.png"
              alt="About Us Image"
              width={550}
              height={400}
              className="mt-5"
            />

            <div className=" ">
              <h2 className="text-3xl  text-black font-semibold mb-4">
              Sangam Plastic Industries Pvt. Ltd – Your Trusted Garbage Bag Manufacturer
              </h2>
              <p className="text-black text-lg leading-relaxed">
                Established in 1988, Sangam Plastic Industries Pvt. Ltd has become a leading Garbage Bag Manufacturer in India, providing high-quality and reliable waste management solutions for homes, hospitals, offices, hotels, and industrial sectors. With decades of experience, we specialize in producing durable garbage bags, disposable bio dustbin bags, hospital garbage bags and other waste management products.

              </p>
               
<p className="mt-3 text-lg leading-relaxed">As a reputed Disposable Bio Dustbin Bag Manufacturer and Hospital Garbage Bag Manufacturer, we focus on delivering products that meet the highest standards of hygiene, strength, and environmental responsibility. Our solutions are designed to support efficient waste disposal, improve cleanliness, and promote sustainable practices across diverse industries.
With modern manufacturing facilities in Delhi, advanced machinery, and a skilled workforce, we combine innovation, quality, and customer satisfaction to provide dependable, eco-friendly, and long-lasting products. At Sangam Plastic Industries Pvt. Ltd, we aim to be your trusted partner for all waste management needs, offering customizable solutions, bulk orders.</p>
            
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
