"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useCheckIsWide from "@/hooks/useCheckIsWide";
import MenuBtn from "@/components/MenuBtn";
import MenuList from "@/components/MenuList";

const Header = ({ isWideScreen }: { isWideScreen: boolean }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  // const [isWideScreen, setIsWideScreen] = useState(false);
  const [isShowMenuBtn, setIsShowMenuBtn] = useState(false);

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

    addEventListener("resize", () => {
      hideMenu();
    });
    addEventListener("hashchange", checkHash);

    return () => {
      removeEventListener("resize", () => {
        hideMenu();
      });
      removeEventListener("hashchange", checkHash);
    };
  }, []);

  const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsShowMenu(!isShowMenu);
  };

  const goTopSection: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    (window as any).fullpage_api.moveTo("Home");
  };

  return (
    <header
      className={`z-10 fixed w-full px-6 lg:px-16 py-8 lg:py-10 flex lg:items-center lg:justify-between transition-colors duration-300 ease-in-out lg:transition-none flex-col lg:flex-row ${
        isShowMenu ? "text-white lg:text-primary" : ""
      }`}
    >
      <div
        className={`w-full ${
          isShowMenuBtn ? "lg:w-full" : "lg:w-auto"
        } flex items-center justify-between z-10`}
      >
        <h1 className=" flex items-center w-12 h-12 lg:w-16 lg:h-16">
          {/* <Link href="#banner">Logo</Link> */}
          <a href="/" onClick={goTopSection}>
            <Image
              className={`${isShowMenu ? "hidden lg:block" : "block"}`}
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
          </a>
        </h1>
        <MenuBtn
          isShowMenuBtn={isShowMenuBtn}
          isShowMenu={isShowMenu}
          showMenu={showMenu}
        />
      </div>
      <nav
        className={`
        z-[1] fixed lg:relative top-0 left-0 w-screen lg:w-auto px-6 pt-[135px] lg:p-0
        ${
          isShowMenu
            ? "visible opacity-100 bg-secondary lg:bg-transparent"
            : "invisible lg:visible opacity-0"
        } ${
          !isShowMenuBtn || isShowMenu ? "lg:flex" : "lg:hidden"
        } flex text-5xl lg:text-5xl h-screen lg:opacity-100 transition-opacity duration-300 ease-in-out lg:h-auto font-amatic-sc font-bold`}
      >
        <MenuList
          isShowMenuBtn={isShowMenuBtn}
          isWideScreen={isWideScreen}
          setIsShowMenu={setIsShowMenu}
          // isShowMenu={isShowMenu}
        />
      </nav>
    </header>
  );
};

export default Header;
