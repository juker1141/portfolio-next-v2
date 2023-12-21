"use client";

import Image from "next/image";
import { useEffect } from "react";
import Underline from "@/components/Underline";
import Rellax from "rellax";

// const titles = ["Frontend Software Developer", "Backend Software Developer"];

const Banner = ({
  fullpageApi,
  isWideScreen,
}: {
  fullpageApi: any;
  isWideScreen: boolean;
}) => {
  return (
    <div className="section">
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="pt-12 md:pt-36 px-4 lg:pt-0 lg:px-8 xl:px-0 w-full relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-28 lg:gap-10">
          <div className="flex flex-col justify-center items-start relative">
            {/* <h2 className="text-5xl mb-2">
            {/* <span className="bg-hello bg-center bg-no-repeat bg-contain text-9xl text-transparent mr-3">
              Hello! I&apos;m Ryu
            </span> */}

            {/* <Image
              src="/images/hello.svg"
              height="48"
              width="200"
              alt="hello"
            /> */}
            {/* 52.456 47.799! I&apos;m Ryu */}
            {/* </h2> */}
            {/* <Image
              width={250}
              height={800}
              className="mb-2"
              src="images/hello.svg"
              alt="hello"
            />*/}
            <Image
              width={128}
              height={128}
              className="absolute top-0 xl:top-12 -right-6 xl:right-12 hidden lg:block z-[-10] rellax-el"
              data-rellax-speed="-5"
              src="images/element/e-1.svg"
              alt="e-1"
            />
            <h4 className="font-titan-one text-5xl mb-4 md:mb-6">
              <div className="mb-4">
                <Underline delay={"0s"}>Frontend</Underline> And
              </div>
              <div className="mb-4">
                <Underline delay={"500ms"}>Backend</Underline> Developer
              </div>
            </h4>
            <p className="text-xl lg:w-2/3">
              I love programming and turning ideas into reality. Curious about
              every detail of computer science. Try different ways to solve the
              problem when facing challenges.
            </p>
            <Image
              width={48}
              height={48}
              className="absolute bottom-16 right-20 xl:left-1/2 hidden lg:block z-[-10] rellax-el"
              data-rellax-speed="8"
              src="images/element/e-3.svg"
              alt="e-3"
            />
          </div>
          <div className="flex items-center relative">
            <Image
              width={64}
              height={64}
              data-rellax-speed="-2"
              className="absolute bottom-20 xl:bottom-36 -left-12 hidden lg:block rellax-el"
              src="images/element/banner-e-1.svg"
              alt="banner-e-1"
            />
            <Image
              width={1600}
              height={800}
              data-rellax-speed="5"
              className="lg:mt-16 hidden lg:block rellax-el"
              src="/images/banner-main.svg"
              alt="banner-main"
            />
            <Image
              width={1600}
              height={800}
              data-rellax-speed="5"
              className="lg:mt-16 block lg:hidden rellax-el"
              src="/images/banner-main-mobile.svg"
              alt="banner-main-mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
