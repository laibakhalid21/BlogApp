import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {

    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const Params = await params
  const post = await getData(Params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const Params = await params
  const data = await getData(Params.id);

  return (
    <div className="flex flex-col max-w-[1400px] md:px-12 px-6 py-12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg font-light mb-6">
              {data.description}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Image
              src={data.image}
              alt="Author"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium">{data.username}</span>
          </div>
        </div>

        <div className="flex-1 w-full">
          <Image
            src={data.image}
            alt="Blog banner"
            priority
            width={700}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg leading-relaxed text-justify font-light">
          {data.content}
        </p>
      </div>
    </div>
  );
}
