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

import useCheckIsWide from "@/hooks/useCheckIsWide";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import GoTopBtn from "@/components/GoTopBtn";

export type FullpageApi = Object;
type Component = ({ isWideScreen }: { isWideScreen: boolean }) => JSX.Element;

export default function Home() {
  const { isWideScreen } = useCheckIsWide();
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  // const [slideIndex, setSlideIndex] = useState(0);
  // const sliding = false;
  const [fullpages, setFullpages] = useState<Component[]>([
    Banner,
    About,
    Experience,
    Work,
    Contact,
  ]);

  useEffect(() => {
    new Rellax(".rellax-el", {
      wrapper: "body",
      speed: 0,
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
    aosAnimation.forEach((aosObject) => {
      observer.observe(aosObject);
    });
  }, []);

  // function afterSlideLoad(
  //   section: Item,
  //   origin: Item,
  //   destination: Item,
  //   direction: string,
  //   trigger: string
  // ) {
  //   setSlideIndex(destination.index + 1);
  // }

  // function onLeave(
  //   origin: Item,
  //   destination: Item,
  //   direction: string,
  //   trigger: string
  // ) {
  //   // console.log((window as any).fullpage_api.getActiveSection());
  //   // console.log("Index: " + origin.index + " Slide Index: " + slideIndexS);
  //   // console.log(origin, destination, trigger);
  //   if (origin.anchor === "Work" && destination.anchor === "Home") {
  //     return true;
  //   }
  //   if (origin.index === 3 && !sliding) {
  //     if (direction === "down" && slideIndex < 4) {
  //       (window as any).fullpage_api.moveSlideRight();
  //       return false;
  //     } else if (direction === "up" && slideIndex > 1) {
  //       (window as any).fullpage_api.moveSlideLeft();
  //       return false;
  //     }
  //   } else if (sliding) {
  //     return false;
  //   }
  // }

  const detectActiveSection = (sections: HTMLCollectionOf<HTMLElement>) => {
    let currentSectionAnchor = null;

    for (let i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSectionAnchor = sections[i].dataset.anchor;
      }
    }

    // 更新URL中的hash
    if (currentSectionAnchor) {
      window.location.hash = "#" + currentSectionAnchor;
    }
  };

  useEffect(() => {
    const body = document.body;
    const sections = body.getElementsByTagName("section");

    detectActiveSection(sections);

    let lastScrollTop = body.scrollTop;

    const handleScroll = (e: any) => {
      const scrollTopPosition = body.scrollTop;
      if (scrollTopPosition > lastScrollTop) {
        console.log("scrolling down");
      } else if (scrollTopPosition < lastScrollTop) {
        console.log("scrolling up");
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;

      detectActiveSection(sections);
    };

    const handlewheelScroll = (event: any) => {
      event.preventDefault();
      const delta = event.deltaY;

      if (window.location.hash.indexOf("Work") === -1) {
        body.scrollBy({
          top: delta,
          behavior: "smooth",
        });
      } else if (
        delta < 0 &&
        (window.location.hash.indexOf("Work/1") !== -1 ||
          window.location.hash === "#Work")
      ) {
        body.scrollBy({
          top: delta,
          behavior: "smooth",
        });
      } else if (delta > 0 && window.location.hash.indexOf("Work/4") !== -1) {
        body.scrollBy({
          top: delta,
          behavior: "smooth",
        });
      }
    };

    body.addEventListener("scroll", handleScroll, { passive: false });
    body.addEventListener("wheel", handlewheelScroll, { passive: false });

    return () => {
      body.removeEventListener("scroll", handleScroll);
      body.removeEventListener("wheel", handlewheelScroll);
    };
  }, []);

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
        {/* <Header isWideScreen={isWideScreen} /> */}
        {/* <Tomato /> */}
        {/* <NavBar /> */}
        {/* <ReactFullpage
          anchors={["Home", "About", "Experience", "Work", "Contact", "Footer"]}
          licenseKey={"gplv3-license"}
          navigation
          scrollOverflow={false}
          scrollBar={true}
          // responsiveWidth={1024}
          // pluginWrapper={pluginWrapper}
          // scrollHorizontally={true}
          // sectionsColor={sectionsColor}
          credits={{
            enabled: true,
            label: "",
            position: "right",
          }}
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
                  isWideScreen={isWideScreen}
                />
              ))}
            </ReactFullpage.Wrapper>
          )}
        /> */}
        {fullpages.map((Component, index) => (
          <Component key={index} isWideScreen={isWideScreen} />
        ))}
        <GoTopBtn />
        {/* <Footer /> */}
      </GoogleReCaptchaProvider>
    </Fragment>
  );
}
