"use client";

import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import NavLink from "../NavLink/navlink";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { ThemeContext } from "../../context/themeContext";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setOpen(false);
    signOut();
  };

  const session = useSession()


  return (
    <header className={`w-full flex justify-center transition-colors duration-300 ${mode === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <nav className="h-[100px] w-full max-w-[1400px] flex items-center justify-between px-6 md:px-12 relative">
        <Link href="/" className="font-bold text-[22px] tracking-wide">
          lamamia
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <DarkModeToggle />
          {links.map((link) => (
            <NavLink key={link.id} href={link.url}>
              {link.title}
            </NavLink>
          ))}

          {
            session.status === "authenticated" &&
            <button
              onClick={signOut}
              className="px-3 py-1 bg-[#368d63] text-white font-bold rounded-md hover:bg-[#45a976] transition">
              Logout
            </button>
          }




        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="flex gap-5">
              <DarkModeToggle />
              <SheetTrigger asChild>
                <button className="flex flex-col gap-1 focus:outline-none cursor-pointer">
                  <span className="h-[3px] w-6 rounded bg-current"></span>
                  <span className="h-[3px] w-6 rounded bg-current"></span>
                  <span className="h-[3px] w-6 rounded bg-current"></span>
                </button>
              </SheetTrigger>
            </div>



            <SheetContent side="right" className={`transition-transform duration-500 ease-in-out ${mode === "light"
              ? "bg-white text-black"
              : "bg-black text-white"
              }`}>
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu with links and logout button.
              </SheetDescription>

              <div className="flex flex-col items-center justify-center font-semibold gap-6 mt-20">


                {links.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <NavLink href={link.url} onClick={handleLinkClick}>
                      {link.title}
                    </NavLink>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  {
                    session.status === "authenticated" &&
                    <button
                      className="px-3 py-1 bg-[#368d63] text-white font-bold rounded-md hover:bg-[#45a976] transition"
                      onClick={handleLinkClick}
                    >
                      Logout
                    </button>
                  }
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
