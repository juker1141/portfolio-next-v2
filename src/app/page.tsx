"use client";
import Script from "next/script";
import { Fragment, useState, useEffect, useRef } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AOS from "aos";
import Rellax from "rellax";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

import useCheckIsWide from "@/hooks/useCheckIsWide";
import useSmoothScroller from "@/hooks/useSmoothScroller";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import GoTopBtn from "@/components/GoTopBtn";

import { Component } from "@/util/types";

export type FullpageApi = Object;

export default function Home() {
  const rellaxEl = useRef<any>();
  const rellaxHoriEl = useRef<any>();
  const rellaxWorkHoriEl = useRef<any>();
  const [fullpages, setFullpages] = useState<Component[]>([
    Banner,
    About,
    Experience,
    Work,
    Contact,
  ]);
  const { isWideScreen } = useCheckIsWide();

  const fullpagesString = fullpages.map((page: Component) => page.name);
  const {
    sectionRefs,
    sliderRefs,
    slidersScrollRef,
    scrollData,
    goTopScroll,
    goSectionScroll,
  } = useSmoothScroller(fullpages, fullpagesString, isWideScreen);

  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    rellaxEl.current = new Rellax(".rellax-el", {
      wrapper: "body",
      speed: 0,
    });
    rellaxHoriEl.current = new Rellax(".rellax-h-el", {
      wrapper: "body",
      speed: 0,
      horizontal: true,
    });
    rellaxWorkHoriEl.current = new Rellax(".rellax-work-el", {
      wrapper: "#work-scrollbar",
      speed: 0,
      horizontal: true,
    });
    AOS.init();
    const aosAnimation = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("aos-animate");
        } else {
          entry.target.classList.remove("aos-animate");
        }
      });
    });
    console.log(aosAnimation);
    aosAnimation.forEach((aosObject) => {
      observer.observe(aosObject);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      rellaxEl.current.refresh();
      rellaxHoriEl.current.refresh();
      rellaxWorkHoriEl.current.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Header
          isWideScreen={isWideScreen}
          scrollData={scrollData}
          goTopScroll={goTopScroll}
          goSectionScroll={goSectionScroll}
        />
        {/* <Tomato /> */}
        {/* <NavBar /> */}
        {fullpages.map((Component, index) => (
          <Component
            sectionRefs={(el: HTMLElement) => (sectionRefs.current[index] = el)}
            sliderRefs={sliderRefs}
            slidersScrollRef={slidersScrollRef}
            key={index}
            isWideScreen={isWideScreen}
          />
        ))}
        <GoTopBtn goTopScroll={goTopScroll} />
      </GoogleReCaptchaProvider>
    </Fragment>
  );
}
