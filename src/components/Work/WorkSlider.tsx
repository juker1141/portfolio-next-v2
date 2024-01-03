"use client";
import Image from "next/image";
import { Fragment } from "react";

import WorkImage from "@/components/Work/WorkImage";

import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";

import "animate.css";

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

const WorkSlider = ({
  work,
  index,
  sliderRefs,
}: {
  work: Work;
  index: number;
  sliderRefs: React.MutableRefObject<HTMLLIElement[]>;
}) => {
  const { ref, inView, entry } = useInView();

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

  return (
    <li
      ref={(el: any) => (sliderRefs.current[index + 1] = el)}
      data-slide={index + 1}
      className={styles.slider}
    >
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="px-4 lg:pt-0 lg:px-8 xl:px-0 w-full relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div
            ref={ref}
            className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center items-start"
          >
            {inView && (
              <Fragment>
                <h2 className="text-4xl lg:text-5xl mb-4 animate__animated animate__fadeInLeft animate__faster animate__delay-0_3s">
                  {work.title}
                </h2>
                <p className="text-xl animate__animated animate__fadeInLeft animate__fast animate__delay-0_5s">
                  {work.content}
                </p>
              </Fragment>
            )}
          </div>
          <div className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center items-center relative px-0 lg:px-0">
            <WorkImage
              imageUrl={work.imageUrl}
              imagePosition={work.imagePosition}
            />
            {renderWorkElement(work.elementType)}
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkSlider;
