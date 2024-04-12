"use client";

import { Hamburger, LeftArrow } from "@/components/icons";
import NavButton from "@/components/navbutton";
import { useState } from "react";

const NavBarButtonGroup = (props: { className: string }) => (
  <ul className={props.className}>
    <NavButton text="Home" url="#" />
    <NavButton text="CV" url="#" />
    <NavButton text="Projects" url="#" />
    <NavButton text="Gallery" url="#" />
  </ul>
);

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex fixed items-center p-7 w-full bg-primary-light dark:bg-primary-dark">
      <button
        onClick={() => setShowNav(true)}
        className="bg-accent rounded-full p-2 mr-5 md:collapse"
      >
        <Hamburger />
      </button>

      <h1 className="text-4xl font-bold uppercase">Joel Clarke</h1>

      <div className="grow" />

      <NavBarButtonGroup className="flex text-lg invisible md:visible" />

      {showNav && (
        <div className="absolute left-0 top-0 h-screen bg-white dark:bg-black items-center md:invisible">
          <NavBarButtonGroup className="text-4xl m-10 space-y-5" />
          <button
            onClick={() => setShowNav(false)}
            className="bg-accent rounded-full p-2 mr-5 md:collapse"
          >
            <LeftArrow />
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
