"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize } from "@/util/screen";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import WorkImage from "@/components/Work/WorkImage";
import type { Work, ElementType } from "@/components/Work/types";
import Marker from "@/components/Marker";

import styles from "./workItem.module.css";

type ItemProps = {
  index: number;
  work: Work;
};

const WorkItem = ({ index, work }: ItemProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });

  useGSAP(
    () => {
      if (slideRef.current) {
        const target: any = slideRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading");
        const description = target.querySelector(".description");
        const images = target.querySelector(".images").children;

        gsap.to(layout, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(heading, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(description, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(images, {
          autoAlpha: 0,
          duration: 0,
        });
      }
    },
    { scope: slideRef }
  );

  const renderWorkElement = (type: ElementType) => {
    switch (type) {
      case "sushi":
        return (
          <Fragment>
            <Image
              width={isLargeScreen ? 120 : 90}
              height={isLargeScreen ? 120 : 90}
              className="absolute top-28 lg:top-12 -right-10 lg:right-0 lg:left-0 xl:left-20 drop-shadow"
              src="/images/element/cloud.svg"
              alt="cloud-left.svg"
            />
            <Image
              width={isLargeScreen ? 90 : 60}
              height={isLargeScreen ? 90 : 60}
              className="absolute top-4 lg:-top-0 right-[90%] lg:right-6 xl:right-24 drop-shadow"
              src="/images/element/cloud.svg"
              alt="cloud-right.svg"
            />
            <Image
              width={220}
              height={220}
              className="absolute -bottom-0 right-0 xl:right-16 drop-shadow-images-sm hidden lg:block"
              src="/images/element/sushi.svg"
              alt="sushi.svg"
            />
          </Fragment>
        );
      case "drink":
        return (
          <Fragment>
            <Image
              width={180}
              height={180}
              className="absolute -bottom-8 left-0 xl:left-12 drop-shadow-images-sm hidden lg:block"
              src="/images/element/drink.svg"
              alt="drink.svg"
            />
            <Image
              width={75}
              height={75}
              className="absolute -top-0 -left-4 lg:-left-8 xl:left-12 rotate-90 drop-shadow"
              src="/images/element/red-line.svg"
              alt="red-line.svg"
            />
            <Image
              width={50}
              height={50}
              className="absolute bottom-8 -right-2 lg:right-6 xl:right-36 rotate-45 drop-shadow"
              src="/images/element/yellow-line-ver.svg"
              alt="yellow-line-ver.svg"
            />
          </Fragment>
        );
      case "cactus":
        return (
          <Fragment>
            <Image
              width={isLargeScreen ? 60 : 40}
              height={isLargeScreen ? 60 : 40}
              className="absolute top-4 lg:-top-12 -left-4 lg:-left-8 xl:left-0 -rotate-12 drop-shadow"
              src="/images/element/music-1.svg"
              alt="music-1.svg"
            />
            <Image
              width={50}
              height={50}
              className="absolute -top-0 lg:left-0 xl:left-12 drop-shadow hidden lg:block"
              src="/images/element/music-2.svg"
              alt="music-2.svg"
            />
            <Image
              width={120}
              height={120}
              className="absolute bottom-6 right-4 lg:right-6 xl:right-36 2xl:right-48 drop-shadow-images-sm hidden lg:block"
              src="/images/element/cactus.svg"
              alt="cactus"
            />
            <Image
              width={isLargeScreen ? 60 : 30}
              height={isLargeScreen ? 60 : 30}
              className="absolute bottom-4 lg:bottom-24 right-2 lg:-right-6 xl:right-16 rotate-12 drop-shadow"
              src="/images/element/music-2.svg"
              alt="music-2.svg"
            />
          </Fragment>
        );
      default:
        return;
    }
  };

  return (
    <div
      ref={slideRef}
      className="slide"
      id={`workId${index + 2}`}
      key={index}
      data-anchor={`${index + 2}`}
    >
      <div className="container h-full-dvh mx-auto flex justify-center items-center">
        <div className="lg:pt-0 w-full relative grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 px-8 xl:px-0">
          <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center items-start">
            <div className="flex flex-col w-full heading">
              <div className="flex justify-between items-end font-bold w-full font-amatic-sc">
                <h2 className="text-6xl lg:text-8xl">{work.title}</h2>
                {work.source && (
                  <a
                    href={work.source}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center relative"
                  >
                    <Marker type="icon">
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        color="#543c1a"
                        size={isLargeScreen ? "3x" : "2x"}
                      />
                    </Marker>
                  </a>
                )}
              </div>
              <hr
                className={`${styles["border-hr"]} w-full mt-1 mb-2 lg:mt-2 lg:mb-4`}
              />
            </div>
            <div className="text-base lg:text-lg description">
              {work.description()}
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center items-center relative px-0 lg:px-0">
            <WorkImage
              className={"images"}
              imageUrl={work.imageUrl}
              imagePosition={work.imagePosition}
            />
            <div className="absolute h-full w-full layout">
              {renderWorkElement(work.elementType)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
