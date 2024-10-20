"use client";

import Image from "next/image";
import Logo from "./logo.gif";
import { useState } from "react";

export function HeaderBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex md:fixed top-0 items-center p-2 md:h-24 h:16">
      <a href="/" className="fixed top-0 z-10">
        <Image
          src={Logo}
          alt="karate dojo brand logo"
          className="md:w-24 w-16"
        />
      </a>
      <div className="flex flex-col items-end w-full relative md:hidden">
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Menu
        </button>
        {open && (
          <ul className="fixed bg-white mt-5 p-2">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/classes">Classes</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
      <div className="w-full rounded-2xl hidden md:block md:ml-28">
        <nav className="flex justify-center gap-2 items-center">
          <a
            href="/about"
            className="py-2 px-4 font-semibold bg-white rounded-2xl"
          >
            About
          </a>
          <a
            href="/classes"
            className="py-2 px-4 font-semibold bg-white rounded-2xl"
          >
            Classes
          </a>
          <a
            href="/contact"
            className="py-2 px-4 font-semibold bg-white rounded-2xl"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
