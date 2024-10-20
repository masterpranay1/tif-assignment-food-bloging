"use client";
import Image from "next/image";
import { useCallback } from "react";

import Logo from "../../public/logo.png";
import Pizza from "../../public/pizza.png";
import Curve from "../../public/curve-shape-1.svg";

import Button from "../ui/Button";

export default function Hero() {
  const handleButton = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    // Hero section
    <main className="flex flex-col-reverse md:flex-row">

      {/* Hero Content Section with CTA */}
      <section className="w-full lg:w-1/2 py-12 px-16 lg:py-8 lg:px-24 flex flex-col items-center lg:items-start ">
        <Image src={Logo} alt="Logo" className="hidden lg:block" />
        <h2 className="font-sourceSans3 font-bold text-4xl lg:text-6xl max-w-md text-[#0E2368] mt-4 lg:mt-24 text-center lg:text-left">
          Discover the <span className="text-[#E23744]">Best</span> Food and
          Drinks
        </h2>
        <p className="text-[#444957] text-center text-sm lg:text-left lg:text-lg max-w-sm mt-6">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <Button
          label="Explore Now"
          onClick={handleButton}
          className="mt-10 py-2 px-4 lg:py-4 lg:px-8 text-lg"
        />
      </section>

      {/* Hero Image Section with get in touch button*/}
      <section className="w-full lg:w-1/2 relative flex flex-col lg:min-h-screen overflow-x-visible">
        <Image src={Pizza} alt="Pizza" className="" />
        <Image
          src={Curve}
          alt="Curve"
          className="absolute top-0 right-0 bottom-0 left-0 object-cover lg:h-[102vh] overflow-visible"
        />
        <button className="absolute top-4 lg:top-8 right-2 lg:right-8 bg-[#E23744] text-white py-1 px-3 lg:py-2 lg:px-6 rounded-full font-sourceSans3 font-semibold border border-white text-sm lg:text-base">
          Get in Touch
        </button>
      </section>
    </main>
  );
}
