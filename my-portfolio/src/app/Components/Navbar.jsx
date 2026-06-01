"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["Projects", "Internship", "About", "Contact"];

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
          <div
            className="flex items-center justify-center rounded-lg w-9 h-9"
            style={{ background: "#2d2460" }}
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* H */}
              <path
                d="M2 2V16M2 9H8M8 2V16"
                stroke="#f5d9cc"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* S */}
              <path
                d="M13 4.5C13 3.12 14.12 2 15.5 2H19C19 2 20 2 20 3.5C20 5 19 5.5 17 6C15 6.5 13 7 13 9C13 11 14.5 11.5 16 11.5H19.5"
                stroke="#f5d9cc"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span
            className="font-bold tracking-widest text-sm"
            style={{ color: "#2d2460", fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.15em" }}
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
                    fontFamily: "'Trebuchet MS', sans-serif",
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