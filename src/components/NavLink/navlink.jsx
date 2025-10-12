"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = React.forwardRef(
  ({ href, children, onClick }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        className={`transition-colors ${
          isActive
            ? "text-[#53c28b] font-semibold"
            : "hover:text-[#53c28b]"
        }`}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
