import React from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = async (cat) => {
  const data = items[cat];
  if (data) return data;
  return notFound();
};

export default async function Category({ params }) {
  const { category } = await params; 
  const data = await getData(category);

  return (
    <div className="flex flex-col py-12 ">
      <h1 className="text-5xl font-bold text-[#53c28b] mb-16 capitalize text-center">
        {category}
      </h1>

      {data.map((item, index) => (
        <div
          key={item.id || index}
          className={`flex flex-col md:flex-row  max-w-[1400px] gap-12 md:gap-16 mt-12 mb-24 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:flex-1 relative w-full h-[500px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h2 className="text-5xl font-semibold">{item.title}</h2>
            <p className="text-xl">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
        </div>
      ))}
    </div>
  );
}
