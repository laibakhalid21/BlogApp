import React from "react";

export default function Layout({ children }){
  return (
    <div className="flex flex-col items-center py-12 px-6 ">
      <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center">
        Our Works
      </h1>
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
};

