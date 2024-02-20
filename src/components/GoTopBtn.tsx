"use client";
import Image from "next/image";
import { Fragment, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize } from "@/util/screen";

const GoTopBtn = () => {
  const goTopBtnRef = useRef<HTMLButtonElement>(null);
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });

  const { contextSafe } = useGSAP({ scope: goTopBtnRef });

  useGSAP(
    () => {
      gsap.to(goTopBtnRef.current, {
        y: 90,
        autoAlpha: 0,
        duration: 0,
      });

      const checkHash: any = contextSafe(() => {
        const currentHash = window.location.hash;

        if (currentHash === "#Home" || currentHash === "") {
          // 在這裡執行你想要的操作
          gsap.to(goTopBtnRef.current, {
            y: 90,
            autoAlpha: 0,
            duration: 0.3,
          });
          // console.log("現在的錨點值是 #Banner", currentHash);
        } else {
          gsap.to(goTopBtnRef.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
          });
        }
      });
      checkHash();

      addEventListener("hashchange", checkHash);

      return () => {
        removeEventListener("hashchange", checkHash);
      };
    },
    { scope: goTopBtnRef }
  );

  const goTopSection: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    (window as any).fullpage_api.moveTo("Home");
  };

  return (
    <Fragment>
      <div className="fixed -bottom-16 lg:-bottom-24 right-4 lg:right-6 hover:animate-bounce-sm duration-75">
        <button
          ref={goTopBtnRef}
          type="button"
          onClick={goTopSection}
          className="relative"
        >
          <Image
            className="drop-shadow-lg"
            src="/images/main/go-top-role.svg"
            width={isLargeScreen ? 150 : 100}
            height={isLargeScreen ? 150 : 100}
            alt="go-top-role.svg"
          />
        </button>
      </div>
      <div id="reCaptchaEl" />
    </Fragment>
  );
};

export default GoTopBtn;
