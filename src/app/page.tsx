"use client";
import Script from "next/script";
import { Fragment, useState, useRef, useEffect, useCallback } from "react";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// 偵測使用者的環境
import { isDesktop } from "react-device-detect";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

import ReactFullpage from "@fullpage/react-fullpage";
import type { Item } from "@fullpage/react-fullpage";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import GoTopBtn from "@/components/GoTopBtn";

import { fullpageAnchors, getSlideDirection, Trigger } from "@/util/fullpage";
import {
  headerAnimateIn,
  animateMenu,
  pageAnimateIn,
  pageAnimateOut,
} from "@/util/animate";

export type FullpageApi = Object;
type Component = ({
  fullpageApi,
  experienceStage,
}: {
  fullpageApi: any;
  experienceStage?: number;
}) => JSX.Element;

export default function Home() {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const workSlideIndex = useRef(0);
  const experienceStage = useRef(0);

  const ready = useRef(false);
  const [isFirstRendered, setIsFirstRendered] = useState(false);
  const isFirstTimeOnLeaved = useRef(false);
  // const isDesktop = useRef(false);
  const isTriggerAnimate = useRef(false);

  const animationTimeout = useRef<NodeJS.Timeout>();
  const transitionTimeout = useRef<NodeJS.Timeout>();

  const fullpages = useRef<Component[]>([
    Banner,
    About,
    Experience,
    Work,
    Contact,
  ]);

  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   isDesktop.current = device.desktop();
    // }

    addEventListener(
      "load",
      function () {
        window.scrollTo(1, 0);
      },
      false
    );
  }, []);

  function afterLoad(origin: Item, destination: Item, direction: string) {
    headerAnimateIn(isFirstRendered, setIsFirstRendered);
    pageAnimateIn({
      currentIndex: destination.index,
      direction,
      isTriggerAnimate,
      experienceStage: experienceStage.current,
    });
  }

  function afterSlideLoad(
    section: Item,
    origin: Item,
    destination: Item,
    direction: string,
    trigger: Trigger
  ) {
    workSlideIndex.current = destination.index + 1;
    pageAnimateIn({
      currentIndex: destination.index,
      direction,
      isTriggerAnimate,
      experienceStage: experienceStage.current,
    });
  }

  const onLeave = useCallback(
    (origin: Item, destination: Item, direction: string, trigger: Trigger) => {
      if (ready.current) return;
      if (isTriggerAnimate.current) return false;
      isTriggerAnimate.current = true;
      clearTimeout(animationTimeout.current);
      clearTimeout(transitionTimeout.current);

      animateMenu({ isShowMenu, trigger });

      pageAnimateOut({
        currentIndex: origin.index,
        direction,
        trigger,
        experienceStage: experienceStage.current,
      });

      animationTimeout.current = setTimeout(() => {
        ready.current = true;
        transitionTimeout.current = setTimeout(() => {
          ready.current = false;
        }, 300);
        // Navigation Click or Menu Click or reload Page Case

        if (!isFirstTimeOnLeaved.current && trigger === null) {
          isFirstTimeOnLeaved.current = true;

          (window as any).fullpage_api.moveTo(destination.anchor);
          return false;
        }
        if (
          trigger === "verticalNav" ||
          trigger === "menu" ||
          (isDesktop && trigger === null)
        ) {
          (window as any).fullpage_api.moveTo(destination.anchor);
          return false;
        }

        // goTop Case
        if (destination.index === 0) {
          (window as any).fullpage_api.moveTo("Home");
          return false;
        }

        // Experience section
        if (origin.anchor === "Experience") {
          if (experienceStage.current === 0 && direction === "down") {
            (window as any).fullpage_api.setAllowScrolling(false, "down");
            // console.log("trigger1");
            experienceStage.current = 1;

            setTimeout(() => {
              pageAnimateIn({
                currentIndex: origin.index,
                direction,
                isTriggerAnimate,
                experienceStage: experienceStage.current,
              });
              (window as any).fullpage_api.setAllowScrolling(true, "down");
            }, 500);
            return false;
          } else if (experienceStage.current === 1 && direction === "up") {
            (window as any).fullpage_api.setAllowScrolling(false, "up");
            // console.log("trigger2");
            experienceStage.current = 0;

            setTimeout(() => {
              pageAnimateIn({
                currentIndex: origin.index,
                direction,
                isTriggerAnimate,
                experienceStage: experienceStage.current,
              });
              (window as any).fullpage_api.setAllowScrolling(true, "up");
            }, 500);
            return false;
          } else if (experienceStage.current === 1 && direction === "down") {
            // console.log("trigger3");
            (window as any).fullpage_api.moveSectionDown();
            return false;
          } else if (experienceStage.current === 0 && direction === "up") {
            // console.log("trigger4");
            (window as any).fullpage_api.moveSectionUp();
            return false;
          }
        }

        // Work section slide Case
        if (origin.anchor === "Work") {
          const methodKey = getSlideDirection(
            direction,
            workSlideIndex.current
          );
          const method: Function = (window as any).fullpage_api[methodKey];
          if (method) method();
          return false;
        }

        // normal Case
        if (direction === "down") {
          (window as any).fullpage_api.moveSectionDown();
          return false;
        } else if (direction === "up") {
          (window as any).fullpage_api.moveSectionUp();
          return false;
        }
      }, 300);

      return ready.current;
    },
    [experienceStage.current]
  );

  return (
    <Fragment>
      <Script src="https://kit.fontawesome.com/d973d1ccea.js" />
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
        container={{
          element: "reCaptchaEl",
          parameters: {
            badge: "bottomleft",
          },
        }}
      >
        <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
        <ReactFullpage
          anchors={fullpageAnchors}
          menu="#nav-menu"
          licenseKey={"gplv3-license"}
          navigation
          navigationPosition="right"
          scrollOverflow={false}
          scrollBar={false}
          scrollingSpeed={1200}
          credits={{
            enabled: true,
            label: "",
            position: "right",
          }}
          scrollOverflowMacStyle={true}
          afterLoad={afterLoad}
          afterSlideLoad={afterSlideLoad}
          onLeave={onLeave}
          controlArrows={false}
          loopHorizontal={false}
          slidesNavigation={true}
          slidesNavPosition={"bottom"}
          render={(comp: any) => (
            <ReactFullpage.Wrapper>
              {fullpages.current.map((Component, index) => (
                <Component key={index} fullpageApi={comp.fullpageApi} />
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
        <GoTopBtn />
      </GoogleReCaptchaProvider>
    </Fragment>
  );
}
