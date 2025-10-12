import React from "react";
import Link from "next/link";

const Portfolio = () => {
  const items = [
    { href: "/portfolio/illustrations", title: "Illustrations", img: "/illustration.png" },
    { href: "/portfolio/websites", title: "Websites", img: "/websites.jpg" },
    { href: "/portfolio/applications", title: "Application", img: "/apps.jpg" },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
        Choose a gallery
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative w-[300px] h-[400px] border-4 border-gray-400 rounded-lg bg-cover bg-center transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <span className="absolute right-3 bottom-3 text-3xl font-bold text-white hover:text-[#53c28b] transition-colors">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
