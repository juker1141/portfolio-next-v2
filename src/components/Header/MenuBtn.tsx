"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { middleScreenSize } from "@/util/screen";
import useMountRender from "@/hook/useMountRender";

const MenuBtn = ({
  handleToggleMenu,
  isShowMenu,
}: {
  handleToggleMenu: Function;
  isShowMenu: boolean;
}) => {
  const tlRef = useRef<any>(null);

  const isMounted = useMountRender();

  const isMiddleScreen = useMediaQuery({
    query: `(min-width: ${middleScreenSize})`,
  });
  const { contextSafe } = useGSAP();
  const showMenuRole: any = contextSafe(() => {
    const menuRoleEl = document.querySelector("#menuRoleEl");

    tlRef.current = gsap.timeline({ ease: "sine.inOut", clearProps: "all" });
    tlRef.current
      .to(menuRoleEl, {
        rotate: 180,
        duration: 0,
      })
      .to(menuRoleEl, {
        rotate: 180,
        y: -50,
        autoAlpha: 1,
        duration: 0.3,
      });
  });

  const hideMenuRole: any = contextSafe(() => {
    const menuRoleEl = document.querySelector("#menuRoleEl");
    if (tlRef.current) {
      const tl = gsap.timeline({ ease: "sine.inOut", clearProps: "all" });
      tl.to(menuRoleEl, {
        autoAlpha: 0,
        y: -100,
        duration: 0.2,
      }).to(menuRoleEl, {
        rotate: 0,
        duration: 0,
      });
    }
  });

  return (
    <div className="relative drop-shadow-images-xs lg:drop-shadow-images-sm">
      <button
        onMouseEnter={showMenuRole}
        onMouseLeave={hideMenuRole}
        onClick={() => {
          if (tlRef.current) {
            tlRef.current.kill();
            tlRef.current = null;
            handleToggleMenu();
          }
        }}
        id="menuBtnEl"
        className={`flex flex-col items-center justify-center relative w-24 md:w-48 lg:w-64`}
        type="button"
      >
        <div
          className={`before:absolute ${
            isShowMenu ? "before:bg-white" : "before:bg-primary"
          } lg:before:bg-primary before:h-96 before:w-0.5 before:bottom-1/2 origin-center before:left-1/2 before:-translate-x-1/2 before:-z-5`}
        ></div>
        <div className="font-amatic-sc font-bold flex flex-col text-6xl md:text-8xl leading-[8px] md:leading-4 z-10">
          <span
            className={`origin-center transition-all ease-in-out duration-200 ${
              isShowMenu
                ? "text-primary lg:text-primary rotate-45 scale-x-125 translate-y-2"
                : "text-primary"
            }`}
          >
            —
          </span>
          <span
            className={`${isShowMenu ? "invisible hidden" : "visible block"}`}
          >
            —
          </span>
          <span
            className={`origin-center transition-all ease-in-out duration-200 ${
              isShowMenu
                ? "text-primary lg:text-primary -rotate-45 scale-x-125 -translate-x-0.5 -translate-y-1 lg:-translate-x-1 lg:-translate-y-2"
                : "text-primary"
            }`}
          >
            —
          </span>
        </div>
        {isMounted && (
          <Image
            className="absolute left-1/2 -translate-x-1/2 z-5 drop-shadow group-hover:scale-125"
            src="/images/main/menu-btn.png"
            width={isMiddleScreen ? 160 : 100}
            height={isMiddleScreen ? 100 : 60}
            alt="menu-btn.png"
          />
        )}
      </button>
      <Image
        id="menuRoleEl"
        className="absolute -bottom-[7.5rem] left-1/2 -translate-x-1/2 -z-5 drop-shadow"
        src="/images/main/menu-role.svg"
        width={80}
        height={80}
        alt="menu-role.svg"
      />
    </div>
  );
};

export default MenuBtn;
