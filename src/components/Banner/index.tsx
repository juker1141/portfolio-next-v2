"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize, middleScreenSize } from "@/util/screen";

import Underline from "@/components/Underline";
import styles from "./styles.module.css";
import useMountRender from "@/hook/useMountRender";

const Banner = ({ fullpageApi }: { fullpageApi: any }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const isMounted = useMountRender();

  const isMiddleScreen = useMediaQuery({
    query: `(min-width: ${middleScreenSize})`,
  });

  useGSAP(
    () => {
      if (sectionRef.current) {
        const target: any = sectionRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading").children;
        const images = target.querySelector(".images").children;
        const description = target.querySelector(".description");

        gsap.to(layout, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(heading, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(images, {
          autoAlpha: 0,
          x: "100vw",
          duration: 0,
        });
        gsap.to(description, {
          autoAlpha: 0,
          duration: 0,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section relative">
      <div className="container h-full-dvh mx-auto flex justify-center items-center">
        <div className="absolute w-full h-full top-0 left-0 -z-10 layout">
          <Image
            width={80}
            height={80}
            className="absolute bottom-20 xl:bottom-56 right-1/2 hidden lg:block mr-8 drop-shadow"
            src="/images/element/light.svg"
            alt="light.svg"
          />
          <Image
            width={150}
            height={150}
            className="absolute top-0 lg:top-36 right-1/2 mr-12 -rotate-6 hidden lg:block drop-shadow"
            src="/images/element/yellow-line.svg"
            alt="yellow-line.svg"
          />
          <Image
            width={60}
            height={60}
            className="absolute bottom-36 right-20 lg:left-1/3 hidden lg:block drop-shadow"
            src="/images/element/blue-line.svg"
            alt="blue-line.svg"
          />
        </div>
        <div className="pt-16 md:pt-36 lg:pt-0 px-8 xl:px-0 w-full relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-28 lg:gap-10">
          <div className="flex flex-col justify-center items-start lg:py-24">
            <h4 className="font-titan-one text-4xl lg:text-5xl mb-2 md:mb-6 heading">
              <div className="mb-3 lg:mb-4">
                <Underline delay={"1s"}>Frontend</Underline> And
              </div>
              <div className="mb-3 lg:mb-4">
                <Underline delay={"1.2s"}>Backend</Underline> Developer
              </div>
            </h4>
            <p className="text-lg lg:text-xl lg:w-2/3 description">
              Love programming and turning ideas into reality.
              {/* Curious about
              every detail of computer science.  */}
              Try different ways to solve the problem when facing challenges.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className={`${styles.images} images relative`}>
              <Image
                width={600}
                height={600}
                className="drop-shadow-images z-5 hidden lg:block"
                src="/images/main/banner-main.svg"
                alt="banner-main.svg"
              />
              {isMounted && (
                <Image
                  width={isMiddleScreen ? 400 : 300}
                  height={isMiddleScreen ? 400 : 300}
                  className="drop-shadow-images z-5 block lg:hidden"
                  src="/images/main/banner-main-mobile.svg"
                  alt="banner-main-mobile.svg"
                />
              )}
              <div className="absolute top-1/2 lg:top-2/3 left-0 h-[50vh] lg:h-[70vh] w-full -z-50 bg-stick-1 bg-center bg-contain bg-no-repeat drop-shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
