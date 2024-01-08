"use client";
import Script from "next/script";
import { Fragment, useState, useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AOS from "aos";
import Rellax from "rellax";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

import ReactFullpage from "@fullpage/react-fullpage";
import type { Item } from "@fullpage/react-fullpage";

import useCheckIsWide from "@/hooks/useCheckIsWide";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import GoTopBtn from "@/components/GoTopBtn";

export type FullpageApi = Object;
type Component = ({
  fullpageApi,
  isWideScreen,
}: {
  fullpageApi: any;
  isWideScreen: boolean;
}) => JSX.Element;

export default function Home() {
  const { isWideScreen } = useCheckIsWide();
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [slideIndex, setSlideIndex] = useState(0);
  const sliding = false;
  const [fullpages, setFullpages] = useState<Component[]>([
    Banner,
    About,
    Experience,
    Work,
    Contact,
  ]);

  useEffect(() => {
    // new Rellax(".rellax-el", {
    //   speed: 0,
    // });
    // new Rellax(".rellax-h-el", {
    //   speed: 0,
    //   horizontal: true,
    // });
    AOS.init();
  }, []);

  function afterSlideLoad(
    section: Item,
    origin: Item,
    destination: Item,
    direction: string,
    trigger: string
  ) {
    setSlideIndex(destination.index + 1);
  }

  function onLeave(
    origin: Item,
    destination: Item,
    direction: string,
    trigger: string
  ) {
    document.body.classList.add("fp-moving-vertically");
    destination.item.querySelector(".trainers")?.classList.add("animate");
    // console.log((window as any).fullpage_api.getActiveSection());
    // console.log("Index: " + origin.index + " Slide Index: " + slideIndexS);
    console.log(origin, destination, direction, trigger);
    if (origin.anchor === "Work" && destination.anchor === "Home") {
      return true;
    }
    if (origin.index === 3 && !sliding) {
      if (direction === "down" && slideIndex < 4) {
        (window as any).fullpage_api.moveSlideRight();
        return false;
      } else if (direction === "up" && slideIndex > 1) {
        (window as any).fullpage_api.moveSlideLeft();
        return false;
      }
    } else if (sliding) {
      return false;
    }
  }

  return (
    <Fragment>
      <Script src="https://kit.fontawesome.com/d973d1ccea.js" />
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
        // container={{
        //   element: "reCaptchaEl",
        //   parameters: {
        //     badge: "bottomleft",
        //   },
        // }}
      >
        <Header isWideScreen={isWideScreen} />
        {/* <Tomato /> */}
        {/* <NavBar /> */}
        <ReactFullpage
          anchors={["Home", "About", "Experience", "Work", "Contact", "Footer"]}
          licenseKey={"gplv3-license"}
          navigation
          scrollOverflow={false}
          normalScrollElements={".work-slide"}
          scrollBar={true}
          scrollingSpeed={1200}
          // responsiveWidth={1024}
          // pluginWrapper={pluginWrapper}
          // scrollHorizontally={true}
          // sectionsColor={sectionsColor}
          credits={{
            enabled: true,
            label: "",
            position: "right",
          }}
          scrollOverflowMacStyle={true}
          afterSlideLoad={afterSlideLoad}
          onLeave={onLeave}
          controlArrows={false}
          loopHorizontal={false}
          slidesNavigation={true}
          slidesNavPosition={"bottom"}
          render={(comp: any) => (
            <ReactFullpage.Wrapper>
              {fullpages.map((Component, index) => (
                <Component
                  key={index}
                  fullpageApi={comp.fullpageApi}
                  isWideScreen={isWideScreen}
                />
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
        <GoTopBtn />
        {/* <Footer /> */}
      </GoogleReCaptchaProvider>
    </Fragment>
  );
}
