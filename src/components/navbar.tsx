"use client";

import { Hamburger, LeftArrow } from "@/components/icons";
import NavButton from "@/components/navbutton";
import { MouseEventHandler, useState } from "react";

interface NavBarButtonGroupProps {
  className?: string;
  onClick?: MouseEventHandler;
}

const NavBarButtonGroup = (props: NavBarButtonGroupProps) => (
  <ul className={props.className}>
    <NavButton text="Home" url="/" onClick={props.onClick} />
    <NavButton text="CV" url="/#" onClick={props.onClick} />
    <NavButton text="Projects" url="/#" onClick={props.onClick} />
    <NavButton text="Gallery" url="/#" onClick={props.onClick} />
  </ul>
);

function NavBar() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  return (
    <nav className="sticky top-0 flex w-full items-center bg-primary-light p-7 dark:bg-primary-dark">
      <button
        className="mr-5 rounded-full bg-accent-light dark:bg-accent-dark p-2 md:collapse"
        onClick={() => setShowNavDrawer(true)}
      >
        <Hamburger />
      </button>

      <h1 className="text-4xl font-bold uppercase">Joel Clarke</h1>

      <div className="shrink md:grow" />

      <NavBarButtonGroup className="invisible shrink md:visible md:flex md:text-lg" />

      {showNavDrawer && (
        <div className="absolute left-0 top-0 flex h-screen w-2/3 flex-col items-center bg-white md:invisible dark:bg-black">
          <NavBarButtonGroup
            className="m-10 space-y-5 text-4xl"
            onClick={() => setShowNavDrawer(false)}
          />

          <button
            className="mt-5 rounded-full bg-accent-light dark:bg-accent-dark p-2 md:collapse"
            onClick={() => setShowNavDrawer(false)}
          >
            <LeftArrow />
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
