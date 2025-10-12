import React from "react";
import Link from "next/link";
import Image from "next/image";

// export const revalidate = 60;


async function getData() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //own api
    const res = await fetch(`http://localhost:3000/api/posts`, {

  cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <div className="flex flex-col max-w-[1400px] px-6 md:px-12 py-12  mx-auto">
      {data.map((item)=>(
         <Link
        href={`/blog/${item._id}`} key={item._id}
          className="flex flex-col md:flex-row items-center gap-12 mb-12 hover:opacity-90 transition"
        >
          <div className="w-full md:w-[400px] h-[250px] relative flex-shrink-0">
            <Image
              src={item.image}
              alt="pic"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 ">
            <h1 className="text-3xl font-semibold mb-3">{item.title}</h1>
            <p className=" text-lg">{item.description}</p>
            <p>{item.content}</p>
            <p className="font-bold italic pt-10">{item.username}</p>
          </div>
        </Link>

      ))}
       
    </div>
  );
}
