"use client";
import { Fragment, useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import type { Item } from "@fullpage/react-fullpage";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Component = () => JSX.Element;

export default function Home() {
  var slideIndex = 1,
    sliding = false,
    slideLinkClick = false,
    link;
  const [fullpages, setFullpages] = useState<Component[]>([
    Banner,
    Hero,
    Experience,
    Work,
    Contact,
    Footer,
  ]);

  function onLeave(
    origin: Item,
    destination: Item,
    direction: string,
    trigger: string
  ): void {
    console.log(origin, destination, direction, trigger);
    // console.log("beforeLeave");
    if (destination.anchor === "Work") {
      if (direction === "up") {
        (window as any).fullpage_api.setAllowScrolling(false, "up");
      } else if (direction === "down") {
        (window as any).fullpage_api.setAllowScrolling(false, "down");
      }
    }

    if (origin.anchor === "Work") {
      if (direction === "up") {
        (window as any).fullpage_api.setAllowScrolling(false, "up");
      } else if (direction === "down") {
        (window as any).fullpage_api.setAllowScrolling(false, "down");
      }
    }
  }

  function afterSlideLoad(
    section: Item,
    origin: Item,
    destination: Item,
    direction: string,
    trigger: string
  ): void {
    console.log(section, origin, destination, direction, trigger);
    (window as any).fullpage_api.setAllowScrolling(true);
    if (section.anchor === "Work") {
    }
  }

  function onSlideLeave(
    section: Item,
    origin: Item,
    destination: Item,
    direction: string,
    trigger: string
  ): void {
    console.log(section, origin, destination, direction, trigger);
  }

  function afterRender(): void {
    console.log("after");
    (window as any).fullpage_api.setAllowScrolling(true);
  }

  return (
    <Fragment>
      <Header />
      <NavBar />
      <ReactFullpage
        scrollOverflow={true}
        anchors={["Banner", "Hero", "Experience", "Work", "Contact", "Footer"]}
        licenseKey={"gplv3-license"}
        navigation
        // pluginWrapper={pluginWrapper}
        // onLeave={onLeave}
        // scrollHorizontally={true}
        // sectionsColor={sectionsColor}
        credits={{
          enabled: true,
          label: "",
          position: "right",
        }}
        // beforeLeave={beforeLeave}
        onSlideLeave={onSlideLeave}
        afterSlideLoad={afterSlideLoad}
        onLeave={onLeave}
        afterRender={afterRender}
        controlArrows={false}
        loopHorizontal={false}
        slidesNavigation={true}
        slidesNavPosition={"bottom"}
        render={(comp: any) => (
          <ReactFullpage.Wrapper>
            {fullpages.map((Component, index) => (
              <Component key={index} />
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </Fragment>
  );
}
