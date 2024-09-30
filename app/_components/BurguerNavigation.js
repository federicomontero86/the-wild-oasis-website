"use client";

import Link from "next/link";
import React from "react";

export default function BurguerNavigation() {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <HamburgerMenu textColor="text-primary-100">
      <HamburgerMenuToggler toggle={toggle} />
      <HamburgerMenuCollapse open={open}>
        <HamburgerMenuNav>
          <HamburgerMenuItem>
            <HamburgerMenuLink toggle={toggle} href="/cabins">
              Cabins
            </HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink toggle={toggle} href="/about">
              About
            </HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink toggle={toggle} href="/account">
              Guest area
            </HamburgerMenuLink>
          </HamburgerMenuItem>
        </HamburgerMenuNav>
      </HamburgerMenuCollapse>
    </HamburgerMenu>
  );
}

/* Logic */

const style = {
  nav: `block pl-0 mb-0`,
  navbar: `font-light py-2`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right text-3xl focus:outline-none`,
  link: `block cursor-pointer py-1.5 px-0 hover:text-gray-400 font-medium`,
};

function HamburgerMenu({ children, bgColor, textColor }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar} sm:hidden z-10`}>
      {children}
    </nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */

function HamburgerMenuToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }) {
  const ref = React.useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.clientHeight }
    : { height: 0, visibility: "hidden", opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuLink({ children, href, toggle }) {
  return (
    <Link href={href} className={style.link} onClick={toggle}>
      {children}
    </Link>
  );
}
