"use client";
import Image from "next/image";
import { useRef, Fragment } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize } from "@/util/screen";

import type { Work } from "@/components/Work/types";
import { workDatas } from "@/components/Work/data";
import useMountRender from "@/hook/useMountRender";

import WorkItem from "./WorkItem";

const Work = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const worksList = useRef<Work[]>(workDatas);

  const isMounted = useMountRender();

  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });

  useGSAP(
    () => {
      if (slideRef.current) {
        const target: any = slideRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading");
        const content = target.querySelector(".content");
        const images = target.querySelector(".images");

        gsap.to(layout, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(heading, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(content, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(images, {
          autoAlpha: 0,
          x: "-100vw",
          duration: 0,
        });
      }
    },
    { scope: slideRef }
  );

  return (
    <section className="section">
      <Fragment>
        <div ref={slideRef} className="slide" id="workId1" data-anchor="1">
          <div className="container h-full-dvh mx-auto flex flex-col justify-center items-start lg:items-center relative px-8 lg:px-0 pb-16 lg:pb-0">
            <div className="absolute h-full w-full layout -z-5">
              <Image
                width={35}
                height={35}
                style={{
                  width: 35,
                  height: 35,
                }}
                className={`absolute top-60 lg:top-1/3 xl:top-72 right-10 lg:right-36 xl:right-36 drop-shadow`}
                src="/images/element/yellow-star.svg"
                alt="yellow-star.svg"
              />
              <Image
                width={60}
                height={60}
                style={{
                  width: 60,
                  height: 60,
                }}
                className={`absolute top-32 lg:top-52 xl:top-24 left-10 lg:left-36 xl:right-52 drop-shadow`}
                src="/images/element/stars.svg"
                alt="stars.svg"
              />
            </div>
            <div
              className={`images absolute bottom-16 lg:bottom-24 left-6 lg:left-12`}
            >
              {isMounted && (
                <Image
                  width={isLargeScreen ? 220 : 160}
                  height={isLargeScreen ? 220 : 160}
                  className="drop-shadow-images-xs lg:drop-shadow-images-sm"
                  src="/images/main/bone.svg"
                  alt="bone.svg"
                />
              )}
              <div className="absolute top-1/3 xl:top-1/2 left-0 h-[50vh] w-full -z-50 bg-stick-4 bg-center bg-contain bg-no-repeat hidden lg:block" />
            </div>
            <h4 className="font-amatic-sc font-bold text-7xl lg:text-8xl text-left mb-6 heading">
              Side Projects
            </h4>
            <div className="w-full lg:w-1/2 text-base lg:text-lg lg:text-center content">
              I frequently dedicate my spare time to researching new
              technologies or engaging in practical exercises.
              <br />
              For additional information, you can visit
              <a
                className="font-bold ml-1 underline caret-primary underline-offset-1"
                href="https://github.com/juker1141"
              >
                My Github
              </a>
              .
            </div>
          </div>
        </div>
        {worksList.current.map((work, index) => {
          return <WorkItem work={work} key={index} index={index} />;
        })}
      </Fragment>
    </section>
  );
};

export default Work;
