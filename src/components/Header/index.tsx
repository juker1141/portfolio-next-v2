"use client";

import Image from "next/image";
import { useRef } from "react";
import MenuBtn from "@/components/Header/MenuBtn";
import MenuList from "@/components/Header/MenuList";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ClickAwayListener from "react-click-away-listener";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize, middleScreenSize } from "@/util/screen";

const Header = ({
  isShowMenu,
  setIsShowMenu,
}: {
  isShowMenu: boolean;
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMiddleScreen = useMediaQuery({
    query: `(min-width: ${middleScreenSize})`,
  });
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });
  const headerRef = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      const logoEl = headerRef.current?.querySelector("#logoEl")?.children;
      const menuBtnEl =
        headerRef.current?.querySelector("#menuBtnEl")?.children;

      const menuRoleEl = headerRef.current?.querySelector("#menuRoleEl");

      if (logoEl && menuBtnEl && menuRoleEl) {
        gsap.to(logoEl, {
          y: -200,
          autoAlpha: 0,
          rotate: 15,
          duration: 0,
        });

        gsap.to(menuBtnEl, {
          y: -200,
          autoAlpha: 0,
          rotate: -15,
          duration: 0,
        });

        gsap.to(menuRoleEl, {
          y: -100,
          autoAlpha: 0,
          duration: 0,
        });
      }
    },
    { scope: headerRef }
  );

  const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsShowMenu(!isShowMenu);
  };

  const goTopSection: React.MouseEventHandler<HTMLAnchorElement> = contextSafe(
    (e) => {
      e.preventDefault();
      const logoEl = headerRef.current?.querySelector("#logoEl")?.children;

      const tl = gsap.timeline({ ease: "power3.inOut" });
      if (logoEl) {
        tl.to(logoEl, {
          onStart: () => (window as any).fullpage_api.moveTo("Home"),
          duration: 0.2,
          y: 30,
        }).to(logoEl, {
          duration: 0.2,
          y: 0,
        });
      }
    }
  );

  const showMenuAnimate = () => {
    const menuBtnEl = document.querySelector("#menuBtnEl")?.children;
    const menuEl = document.querySelector("#menuEl")?.children;
    const menuRoleEl = document.querySelector("#menuRoleEl");

    if (menuBtnEl && menuEl && menuRoleEl && !isShowMenu) {
      const tl = gsap.timeline({ ease: "sine.inOut" });
      gsap.set(menuRoleEl, {
        rotate: 0,
        y: -100,
        autoAlpha: 0,
      });

      tl.to(menuRoleEl, {
        duration: 0.3,
        y: 0,
        delay: 0.2,
        autoAlpha: 1,
      })
        .to([menuBtnEl, menuRoleEl], {
          y: 50,
          rotate: 5,
          duration: 0.7,
        })
        .to([menuBtnEl, menuRoleEl], {
          y: "-50vh",
          duration: 0.5,
          onComplete: () => setIsShowMenu(true),
        })
        .to(menuRoleEl, {
          y: -100,
          duration: 0,
          autoAlpha: 0,
        })
        .from(menuEl, {
          y: "-100vh",
          ease: "power3.inOut",
          duration: 0.4,
        })
        .to(menuEl, {
          y: 0,
        });
    }
  };

  const hideMenuAnimate = () => {
    const menuBtnEl = document.querySelector("#menuBtnEl")?.children;
    const menuEl = document.querySelector("#menuEl")?.children;

    if (menuBtnEl && menuEl && isShowMenu) {
      const tl = gsap.timeline({ ease: "power3.inOut" });
      tl.to(menuEl, {
        y: "30",
        delay: 0.3,
        duration: 0.3,
      })
        .to(menuEl, {
          y: "-100vh",
          duration: 0.4,
          onComplete: () => setIsShowMenu(false),
        })
        .to(menuBtnEl, {
          y: 30,
          rotate: 15,
          duration: 0.5,
        })
        .to(menuBtnEl, {
          y: -10,
          rotate: -5,
          duration: 0.2,
        })
        .to(menuBtnEl, {
          y: 0,
          rotate: 0,
          duration: 0.1,
        });
    }
  };

  const handleToggleMenu = () => {
    if (isShowMenu) {
      hideMenuAnimate();
    } else {
      showMenuAnimate();
    }
  };

  return (
    <header
      ref={headerRef}
      id="header"
      className={`z-10 fixed w-full px-6 md:px-16 py-4 md:py-10 flex items-center justify-between transition-colors duration-300 ease-in-out lg:transition-none ${
        isShowMenu ? "text-white lg:text-primary" : ""
      }`}
    >
      <div className={`w-full flex items-center justify-between`}>
        <h1
          id="logoEl"
          data-depth="0.2"
          className="flex items-center relative w-16 h-16 lg:w-20 lg:h-20 z-10"
        >
          <a href="/" onClick={goTopSection}>
            <Image
              src={
                isShowMenu && !isLargeScreen
                  ? "/images/main/logo-white.svg"
                  : "/images/main/logo.svg"
              }
              className="drop-shadow-images-xs lg:drop-shadow-images-sm"
              alt="logo.svg"
              width={isMiddleScreen ? "80" : "50"}
              height={isMiddleScreen ? "80" : "50"}
            />
            <div
              className={`before:absolute ${
                isShowMenu ? "before:bg-white" : "before:bg-primary"
              } lg:before:bg-primary before:h-[200%] before:w-0.5 before:bottom-1/2 origin-center before:left-1/2 before:-translate-x-1/2 before:-z-5`}
            ></div>
          </a>
        </h1>
        <MenuBtn
          handleToggleMenu={handleToggleMenu}
          isShowMenu={isShowMenu}
          showMenu={showMenu}
        />
      </div>
      <ClickAwayListener onClickAway={hideMenuAnimate}>
        <nav
          id="navEl"
          className={`
        z-5 w-full lg:w-auto fixed lg:relative top-0 left-0 px-6 pt-[145px] lg:p-0
        ${isShowMenu ? "block bg-secondary lg:bg-transparent" : "hidden"}
        flex text-5xl lg:text-5xl h-full-dvh lg:opacity-100 transition-opacity duration-300 ease-in-out lg:h-auto font-amatic-sc font-bold`}
        >
          <MenuList
            hideMenuAnimate={hideMenuAnimate}
            isLargeScreen={isLargeScreen}
          />
        </nav>
      </ClickAwayListener>
    </header>
  );
};

export default Header;
