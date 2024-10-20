"use client";
import Image from "next/image";

import AboutUsImage from '../../public/about-us.png';
import Button from "../ui/Button";

export default function Aboutus() {
  return (
    <main className="bg-custom-gradient flex flex-row w-full my-32 lg:px-48">
      <Image src={AboutUsImage} alt="About Us" className="hidden lg:block lg:w-[40rem]"/>

      <div className="flex flex-col gap-8 items-center lg:items-start w-full py-32 px-12 lg:px-32 text-center lg:text-left">
        <h2 className="text-5xl text-[#0E2368] font-semibold font-poppins">About Us</h2>
        <p className="text-sm lg:text-base text-[#444957] font-openSans">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </p>
        <Button label="Read More" onClick={() => console.log("Learn More")} className="w-fit"/>
      </div>
    </main>
  )
}
