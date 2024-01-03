"use client";
import Image from "next/image";
import { useState, Fragment, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import WorkImage from "@/components/Work/WorkImage";
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

  const renderWorkElement = (type: ElementType) => {
    switch (type) {
      case "sushi":
        return (
          <Fragment>
            <Image
              width={100}
              height={100}
              data-rellax-speed="-7"
              data-rellax-min-y="0"
              data-rellax-percentage=".15"
              data-rellax-vertical-scroll-axis="x"
              className="absolute top-12 lg:left-0 xl:left-20 rellax-work-el hidden lg:block"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={70}
              height={70}
              data-rellax-speed="-7"
              data-rellax-min-y="0"
              data-rellax-percentage="-.15"
              data-rellax-vertical-scroll-axis="x"
              className="absolute -top-0 lg:right-6 xl:right-24 rellax-work-el hidden lg:block"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={200}
              height={200}
              data-rellax-speed="5"
              data-rellax-min-y="0"
              data-rellax-vertical-scroll-axis="x"
              className="absolute -bottom-0 right-0 xl:-right-96 rellax-work-el hidden lg:block"
              src="images/element/e-22.svg"
              alt="e-22"
            />
          </Fragment>
        );
      case "drink":
        return (
          <Fragment>
            <Image
              width={160}
              height={160}
              data-rellax-speed="-7"
              data-rellax-min-y="0"
              data-rellax-percentage="-.2"
              data-rellax-vertical-scroll-axis="x"
              className="absolute -bottom-8 left-0 xl:left-12 rellax-work-el hidden lg:block"
              src="images/element/e-23.svg"
              alt="e-23"
            />
            <Image
              width={60}
              height={60}
              data-rellax-speed="2"
              data-rellax-min-y="0"
              // data-rellax-percentage="-.15"
              data-rellax-vertical-scroll-axis="x"
              className="absolute -top-10 lg:-left-8 xl:left-[450px] rotate-90 rellax-work-el hidden lg:block"
              src="images/element/e-17.svg"
              alt="e-17"
            />
            <Image
              width={30}
              height={30}
              data-rellax-speed="-3"
              data-rellax-min-y="0"
              data-rellax-percentage="-.8"
              data-rellax-vertical-scroll-axis="x"
              className="absolute bottom-10 lg:right-6 xl:right-36 rotate-45 rellax-work-el hidden lg:block"
              src="images/element/e-18.svg"
              alt="e-18"
            />
          </Fragment>
        );
      case "cactus":
        return (
          <Fragment>
            <Image
              width={40}
              height={40}
              data-rellax-speed="-5"
              data-rellax-percentage="-.2"
              className="absolute -top-12 lg:-left-8 xl:left-0 -rotate-12 rellax-el hidden lg:block"
              src="images/element/e-6.svg"
              alt="e-6"
            />
            <Image
              width={30}
              height={30}
              data-rellax-speed="-5"
              data-rellax-percentage="-.3"
              className="absolute -top-0 lg:left-0 xl:left-12 rellax-el hidden lg:block"
              src="images/element/e-5.svg"
              alt="e-5"
            />
            <Image
              width={100}
              height={100}
              className="absolute bottom-6 right-4 lg:right-6 xl:right-36 2xl:right-48  hidden lg:block"
              src="images/element/e-21.svg"
              alt="e-21"
            />
            <Image
              width={40}
              height={40}
              data-rellax-speed="5"
              data-rellax-percentage="-1.4"
              className="absolute bottom-24 lg:-right-6 xl:right-16 rotate-12 rellax-el hidden lg:block"
              src="images/element/e-5.svg"
              alt="e-5"
            />
          </Fragment>
        );
      default:
        return;
    }
  };

  const renderWorksList = () => {
    return worksList.map((work, index) => {
      return (
        // <li
        //   ref={(el: any) => (sliderRefs.current[index + 1] = el)}
        //   key={index + 1}
        //   data-slide={index + 1}
        //   className={styles.slider}
        // >
        //   <div className="container h-screen mx-auto flex justify-center items-center">
        //     <div className="px-4 lg:pt-0 lg:px-8 xl:px-0 w-full relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        //       <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center items-start">
        //         <ScrollAnimation
        //           animateIn="fadeIn"
        //           scrollableParentSelector="#work-scrollbar"
        //           initiallyVisible={true}
        //         >
        //           <h2 className="text-4xl lg:text-5xl mb-4">{work.title}</h2>
        //           <p className="text-xl">{work.content}</p>
        //         </ScrollAnimation>
        //       </div>
        //       <div className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center items-center relative px-0 lg:px-0">
        //         <WorkImage
        //           imageUrl={work.imageUrl}
        //           imagePosition={work.imagePosition}
        //         />
        //         {renderWorkElement(work.elementType)}
        //       </div>
        //     </div>
        //   </div>
        // </li>
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
