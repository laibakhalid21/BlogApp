"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="w-10 h-6  rounded-full flex items-center justify-between p-0.5 relative cursor-pointer border border-green-500"
    >
      <span className="text-[12px] ">🌙</span>
      <span className="text-[12px]">🔆</span>

     
      <span
        className={`absolute top-1/2 w-3.5 h-3.5 bg-green-400 rounded-full transform -translate-y-1/2 transition-all duration-300 ${
          mode === "light" ? "left-0.5" : "right-0.5"
        }`}
      ></span>
    </div>
  );
};

export default DarkModeToggle;
