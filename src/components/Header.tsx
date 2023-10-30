"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuBtn from "@/components/MenuBtn";

const NavData = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      setIsShowMenu(false);
    };

    addEventListener("resize", hideMenu);

    return () => {
      removeEventListener("resize", hideMenu);
    };
  }, []);

  const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsShowMenu(!isShowMenu);
  };

  return (
    <header
      className={`z-10 fixed w-full px-6 lg:px-16 py-8 lg:py-10 flex lg:items-center lg:justify-between transition-colors duration-300 ease-in-out lg:transition-none flex-col lg:flex-row ${
        isShowMenu ? "bg-black text-white lg:text-black lg:bg-white" : ""
      }`}
    >
      <div className="w-full lg:w-auto flex justify-between">
        <h1 className="text-2xl flex items-center">
          <Link href="#banner">Logo</Link>
        </h1>
        <MenuBtn isShowMenu={isShowMenu} showMenu={showMenu} />
      </div>
      <nav
        className={`${
          isShowMenu
            ? "visible opacity-100 lg:opacity-100"
            : "invisible lg:visible opacity-0 lg:opacity-100"
        } transition-opacity duration-300 ease-in-out lg:flex h-screen lg:h-auto`}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center py-8 lg:py-0">
          {NavData.map((nav) => {
            return (
              <li className="px-4 py-2" key={nav.title}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
