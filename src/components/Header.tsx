"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MenuBtn from "@/components/MenuBtn";
import MenuList from "@/components/MenuList";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowMenuBtn, setIsShowMenuBtn] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      setIsShowMenu(false);
    };

    const checkHash = () => {
      const currentHash = window.location.hash;
      console.log(currentHash);
      // const isWideScreen = window.innerWidth > 1024;
      // if (!isWideScreen) return;
      if (currentHash === "#Home" || currentHash === "") {
        // 在這裡執行你想要的操作
        setIsShowMenu(false);
        setIsShowMenuBtn(false);
        // console.log("現在的錨點值是 #Banner", currentHash);
      } else {
        setIsShowMenuBtn(true);
      }
    };

    checkHash();

    addEventListener("resize", hideMenu);
    addEventListener("hashchange", checkHash);

    return () => {
      removeEventListener("resize", hideMenu);
      removeEventListener("hashchange", checkHash);
    };
  }, []);

  const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsShowMenu(!isShowMenu);
  };

  return (
    <header
      className={`z-10 fixed w-full px-6 lg:px-16 py-8 lg:py-10 flex lg:items-center lg:justify-between transition-colors duration-300 ease-in-out lg:transition-none flex-col lg:flex-row ${
        isShowMenu
          ? "bg-black text-white lg:bg-transparent lg:text-secondary"
          : ""
      }`}
    >
      <div
        className={`w-full ${
          isShowMenuBtn ? "lg:w-full" : "lg:w-auto"
        } flex items-center justify-between`}
      >
        <h1 className="text-2xl flex items-center">
          {/* <Link href="#banner">Logo</Link> */}
          <Link href="#Home">
            <Image
              className={`${
                isShowMenu ? "hidden lg:block" : "block"
              } stroke-white`}
              src="/images/logo.svg"
              alt="logo"
              width="60"
              height="60"
            />
            <Image
              className={`${isShowMenu ? "block lg:hidden" : "hidden"}`}
              src="/images/logo-white.svg"
              alt="logo"
              width="60"
              height="60"
            />
          </Link>
        </h1>
        <MenuBtn
          isShowMenuBtn={isShowMenuBtn}
          isShowMenu={isShowMenu}
          showMenu={showMenu}
        />
      </div>
      <nav
        className={`${
          isShowMenu
            ? "visible opacity-100 lg:opacity-100"
            : "invisible lg:visible opacity-0 lg:opacity-100"
        } ${
          !isShowMenuBtn
            ? "lg:flex lg:text-5xl"
            : isShowMenu
            ? "lg:flex lg:text-5xl"
            : "lg:hidden"
        } transition-opacity duration-300 ease-in-out  h-screen lg:h-auto font-amatic-sc font-bold`}
      >
        <MenuList isShowMenuBtn={isShowMenuBtn} />
      </nav>
    </header>
  );
};

export default Header;
