import Image from "next/image";

import Logo from "../../public/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-sourceSans3 text-[#646874] py-16 px-8 flex flex-col lg:flex-row gap-8 bg-custom-gradient">
      <div className="mx-auto lg:mx-w-64">
        <Image src={Logo} alt="Logo" className="" />
      </div>

      <section className="flex flex-col gap-2 lg:text-lg">
        <h3 className="text-[#0E2368] text-lg lg:text-xl font-semibold">
          Contact Us
        </h3>
        <p className="max-w-xs">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </section>

      <section className="flex flex-col gap-2 lg:text-lg">
        <h3 className="text-[#0E2368] text-lg lg:text-xl font-semibold">
          More
        </h3>
        <ul className="flex flex-col gap-2">
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </section>

      <section className="flex flex-col lg:flex-col-reverse items-center justify-center lg:justify-end mx-auto gap-2">
        <p className="lg:text-xl lg:my-auto">© 2022 Food Truck Example</p>

        <ul className="flex flex-row gap-4">
          <li>
            <Instagram />
          </li>
          <li>
            <Twitter fill="#0E2368" />
          </li>
          <li>
            <Facebook fill="#0E2368" />
          </li>
        </ul>
        <h3 className="text-[#0E2368] text-lg lg:text-xl font-semibold hidden lg:block">
          Social Links
        </h3>
      </section>
    </footer>
  );
}
