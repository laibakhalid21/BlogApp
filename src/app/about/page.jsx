import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center ">
      <div className="">
      
      <div className="w-full flex justify-center px-6 md:px-12">
        <div className="relative w-full max-w-[1400px] h-[300px] mx-auto">
          <Image
            src="/p.jpeg"
            alt="Team working on digital projects"
            fill
            className="object-cover filter grayscale "
            priority
          />
          <div className="absolute bottom-5 left-5 text-white bg-[#368d63] e px-3 py-2 rounded-md">
            <h1 className="text-lg md:text-2xl font-semibold leading-tight">
              Digital Storytellers
            </h1>
            <h2 className="text-sm md:text-base font-light">
              Handcrafting award-winning digital experiences
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center py-16">
        <div className="w-full max-w-[1400px] flex flex-col px-6 md:px-12 md:flex-row gap-[60px] md:gap-[100px]">
          <div className="flex-1 flex flex-col gap-6 mt-8">
            <h1 className="text-3xl md:text-4xl font-bold ">
              Who Are We?
            </h1>
            <p className="text-[16px] md:text-[18px] font-light  text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              voluptatum quo ea eveniet?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet?
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6 mt-8">
            <h1 className="text-3xl md:text-4xl font-bold ">
              What We Do?
            </h1>
            <p className="text-[16px] md:text-[18px] font-light  text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />– Creative Illustrations
              <br />
              <br />– Dynamic Websites
              <br />
              <br />– Fast and Handy
              <br />
              <br />– Mobile Apps
            </p>

            <Button
             text="Contact" url="/contact"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
