"use client";
import Image from "next/image";
import { useState, Fragment, useRef } from "react";
import { useInView } from "react-intersection-observer";

import WorkSlider from "@/components/Work/WorkSlider";

import { ComponentProps } from "@/util/types";

import styles from "./styles.module.css";

type ElementType = "sushi" | "drink" | "cactus";

type Work = {
  title: string;
  content: string;
  imageUrl: string;
  imagePosition: string;
  elementType: ElementType;
  animateIn: string;
  animateOut: string;
  delay: number;
};

const Work = ({
  isWideScreen,
  sectionRefs,
  slidersScrollRef,
  sliderRefs,
}: ComponentProps) => {
  const slidersRef = useRef<any>();

  const { ref, inView } = useInView();

  const [worksList, setWorksList] = useState<Work[]>([
    {
      title: "Project1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/maskMap_1.jpg",
      imagePosition: "bg-left",
      elementType: "sushi",
      animateIn: "",
      animateOut: "hinge",
      delay: 200,
    },
    {
      title: "Project2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/music_1.jpg",
      imagePosition: "bg-center",
      elementType: "drink",
      animateIn: "",
      animateOut: "slideOutLeft",
      delay: 0,
    },
    {
      title: "Project3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/stores_1.jpg",
      imagePosition: "bg-center",
      elementType: "cactus",
      animateIn: "",
      animateOut: "fadeInUpBig",
      delay: 100,
    },
  ]);

  const renderWorksList = () => {
    return worksList.map((work, index) => {
      return (
        <WorkSlider
          key={index + 1}
          work={work}
          index={index}
          sliderRefs={sliderRefs}
        />
      );
    });
  };

  return (
    <section
      ref={sectionRefs}
      id="work"
      data-anchor="Work"
      className="section relative overflow-hidden min-h-screen"
    >
      <div
        ref={slidersScrollRef}
        id="work-scrollbar"
        className={styles.sliderContainer}
      >
        <ul ref={slidersRef} id="work-wrapper" className={styles.sliderWrapper}>
          <li
            ref={(el: any) => (sliderRefs.current[0] = el)}
            data-slide="0"
            className={styles.slider}
          >
            <div className="container h-screen mx-auto flex justify-center items-center relative overflow-x-hidden">
              <Image
                width={isWideScreen ? 200 : 150}
                height={isWideScreen ? 200 : 150}
                data-rellax-speed="-10"
                data-rellax-vertical-scroll-axis="x"
                className="absolute bottom-24 left-6 lg:left-12 rellax-work-el"
                src="images/sp-main.svg"
                alt="sp-main"
              />
              <Image
                width={20}
                height={20}
                className="absolute top-60 lg:top-1/3 xl:top-72 right-10 lg:right-36 xl:right-36 rellax-work-el"
                data-rellax-speed="-3"
                data-rellax-vertical-scroll-axis="x"
                src="images/element/e-13.svg"
                alt="e-13"
              />
              <Image
                width={30}
                height={30}
                className="absolute top-32 lg:top-52 xl:top-24 left-10 lg:left-36 xl:right-52 rellax-work-el"
                data-rellax-speed="-7"
                data-rellax-vertical-scroll-axis="x"
                src="images/element/e-14.svg"
                alt="e-14"
              />
              <Image
                width={15}
                height={15}
                className="absolute top-40 lg:top-64 xl:top-32 left-16 lg:left-48 xl:right-48 rellax-work-el"
                data-rellax-speed="-7"
                data-rellax-vertical-scroll-axis="x"
                src="images/element/e-13.svg"
                alt="e-13"
              />
              <div
                ref={ref}
                data-rellax-speed="5"
                data-rellax-vertical-scroll-axis="x"
                className="flex flex-col items-center justify-center rellax-work-el"
              >
                {inView && (
                  <Fragment>
                    <h4 className="font-amatic-sc font-bold text-8xl mb-6 animate__animated animate__fadeInUp animate__faster animate__delay-0_3s">
                      Side Projects
                    </h4>
                    <p className="w-full lg:w-1/2 text-lg text-center animate__animated animate__fadeInUp animate__fast animate__delay-0_5s">
                      I frequently dedicate my spare time to researching new
                      technologies or engaging in practical exercises.
                      <br /> For additional information, you can visit{" "}
                      <a className="font-bold" href="http://google.com">
                        My Github
                      </a>
                      .
                    </p>
                  </Fragment>
                )}
              </div>
            </div>
          </li>
          {renderWorksList()}
        </ul>
      </div>
    </section>
  );
};

export default Work;
