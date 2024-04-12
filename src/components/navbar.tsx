"use client";

import { Hamburger, LeftArrow } from "@/components/icons";
import NavButton from "@/components/navbutton";
import { useState } from "react";

const NavBarButtonGroup = (props: { className: string }) => (
  <ul className={props.className}>
    <NavButton text="Home" url="/" />
    <NavButton text="CV" url="#" />
    <NavButton text="Projects" url="#" />
    <NavButton text="Gallery" url="#" />
  </ul>
);

function NavBar() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  return (
    <nav className="fixed flex w-full items-center bg-primary-light p-7 dark:bg-primary-dark">
      <button
        onClick={() => setShowNavDrawer(true)}
        className="mr-5 rounded-full bg-accent p-2 md:collapse"
      >
        <Hamburger />
      </button>

      <h1 className="text-4xl font-bold uppercase">Joel Clarke</h1>

      <div className="grow" />

      <NavBarButtonGroup className="invisible flex text-lg md:visible" />

      {showNavDrawer && (
        <div className="absolute left-0 top-0 flex h-screen w-2/3 flex-col items-center bg-white md:invisible dark:bg-black">
          <NavBarButtonGroup className="m-10 space-y-5 text-4xl" />
          <button
            onClick={() => setShowNavDrawer(false)}
            className="mt-5 rounded-full bg-accent p-2 md:collapse"
          >
            <LeftArrow />
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
