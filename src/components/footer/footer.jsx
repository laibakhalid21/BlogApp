import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex border-t border-green-600 justify-center transition-colors duration-300">
    <footer className="h-[100px]  w-full max-w-[1400px] flex items-center justify-between px-6 md:px-12 relative  ">
      <div className="text-center sm:text-left">
        ©2023 Lamamia. All rights reserved.
      </div>

      <div className="flex items-center justify-center sm:justify-end gap-3">
        <Image
          src="/1 (1).png"
          width={18}
          height={18}
          className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
          alt="Lamamia Facebook"
        />
        <Image
          src="/2 (1).png"
          width={18}
          height={18}
          className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
          alt="Lamamia Twitter"
        />
        <Image
          src="/3 (1).png"
          width={18}
          height={18}
          className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
          alt="Lamamia Instagram"
        />
        <Image
          src="/4.png"
          width={18}
          height={18}
          className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
          alt="Lamamia LinkedIn"
        />
      </div>
    </footer>
     </div>
  );
};

export default Footer;
