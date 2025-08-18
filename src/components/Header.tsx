"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full text-white bg-primary flex flex-col">
      <div className="flex px-4 sm:px-6 md:px-10 justify-between items-center">
        <Image
          src="/district_logo.png"
          width={35}
          height={35}
          alt="Leo District Logo"
          className="my-1"
        />
        <nav className="py-3 md:py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Hamburger Icon */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Nav links - desktop */}
            <ul className="hidden md:flex gap-3 lg:gap-5">
              <li>
                <Link
                  href="/"
                  className="relative inline-block text-sm lg:text-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="relative inline-block text-sm lg:text-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="relative inline-block text-sm lg:text-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletters"
                  className="relative inline-block text-sm lg:text-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Newsletters
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="relative inline-block text-sm lg:text-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`overflow-hidden px-4 sm:px-10 bg-black/20 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-3 mt-3 mb-4">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-base py-2 block hover:text-gray-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/leadership" onClick={() => setMenuOpen(false)} className="text-base py-2 block hover:text-gray-200 transition-colors">
              Leadership
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-base py-2 block hover:text-gray-200 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/newsletters" onClick={() => setMenuOpen(false)} className="text-base py-2 block hover:text-gray-200 transition-colors">
              Newsletters
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="text-base py-2 block hover:text-gray-200 transition-colors">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
