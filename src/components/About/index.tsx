import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize, middleScreenSize } from "@/util/screen";
import useMountRender from "@/hook/useMountRender";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMounted = useMountRender();

  const isMiddleScreen = useMediaQuery({
    query: `(min-width: ${middleScreenSize})`,
  });
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });

  useGSAP(
    () => {
      if (sectionRef.current) {
        const target: any = sectionRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading");
        const images = target.querySelector(".images");
        const content = target.querySelector(".content");
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
          duration: 0,
        });
        gsap.to(content, {
          autoAlpha: 0,
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
    <section className="section" ref={sectionRef}>
      <div className="container h-full-dvh mx-auto flex justify-center items-center  overflow-y-hidden">
        <div className="absolute w-full h-full top-0 left-0 layout">
          {isMounted && (
            <Image
              width={isLargeScreen ? 120 : 100}
              height={isLargeScreen ? 120 : 100}
              className="absolute top-28 z-5 lg:-z-5 right-2/3 lg:top-28 lg:right-1/2 lg:mr-12 drop-shadow"
              src="/images/element/cloud.svg"
              alt="cloud.svg"
            />
          )}
          <Image
            width={120}
            height={120}
            className="absolute hidden lg:block bottom-24 right-24 z-0 drop-shadow"
            src="/images/element/flower-1.svg"
            alt="flower-1.svg"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 px-8 lg:px-0">
          <div className="lg:col-span-2 relative px-12 lg:px-8 xl:px-0 flex justify-center items-center group">
            <div className="images bg-white p-3 rounded-full drop-shadow-images-xs lg:drop-shadow-images-sm">
              <div className="z-0 rounded-full relative overflow-hidden border-4 border-primary">
                {isMounted && (
                  <Image
                    src="/images/main/hero.jpg"
                    width={isMiddleScreen ? 400 : 250}
                    height={isMiddleScreen ? 400 : 250}
                    className="rounded-full"
                    alt="Hero"
                  />
                )}
                {isMounted && (
                  <Image
                    src="/images/main/about-role.svg"
                    width={isMiddleScreen ? 200 : 150}
                    height={isMiddleScreen ? 200 : 150}
                    className="absolute -bottom-8 -right-1/2 md:-right-20 lg:-right-24 z-5 drop-shadow lg:-rotate-6 transition-all duration-500 ease-out origin-bottom group-hover:-rotate-45 group-hover:-translate-y-8 lg:group-hover:-translate-y-12 group-hover:-translate-x-8"
                    alt="about-role.svg"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center relative lg:pr-16 xl:pr-0">
            <h2 className="text-7xl lg:text-8xl font-bold font-amatic-sc heading">
              About Me
            </h2>
            <span className="text-base lg:text-lg mb-4 font-light description">
              Frontend Developer / Backend Developer
            </span>
            <p className="text-lg lg:text-xl content">
              Hi! I'm Ryu. I have been working as a developer for{" "}
              {/* 2021.10 */}
              {new Date().getFullYear() - 2022} years. I am proficient in using
              popular <strong>React</strong>, <strong>Next</strong> and{" "}
              <strong>Vue</strong> frameworks and have developed a complete
              website using <strong>Node</strong> and <strong>Golang</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
