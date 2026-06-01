"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [ "About","Projects","Internship","Contact"];

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <nav className="w-full px-4 py-3">
      <div
        className="mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-6 py-3"
        style={{ background: "#f5d9cc" }}
      >
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          {/* HS Monogram Icon */}
          <div className="flex items-center justify-center">

            <Image 
            src="/Image/HS.png"
            alt = "Hariharan logo"
            width={40}
            height={40}
            className="object-contain"
          
            />
            </div>

          <span
            className="font-bold tracking-widest text-sm"
            style={{ color: "#2d2460", fontFamily: "Inter", letterSpacing: "0.15em" }}
          >
            HARIHARAN S
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link;
            return (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className="relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 select-none"
                  style={{
                    color: "#2d2460",
                    background: isActive ? "#f0b97a" : "transparent",
                    fontFamily: "Inter",
                    fontWeight: isActive ? 600 : 500,
                    boxShadow: isActive
                      ? "0 2px 8px 0 rgba(240,185,122,0.35)"
                      : "none",
                  }}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}