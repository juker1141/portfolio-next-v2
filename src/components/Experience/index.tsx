"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./styles.module.css";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (sectionRef.current) {
        const target: any = sectionRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading");
        const content1 = target.querySelector(".content1");
        const content2 = target.querySelector(".content2");
        const images = target.querySelector(".images");

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
        gsap.to(content1, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(content2, {
          autoAlpha: 0,
          duration: 0,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section experience">
      <div className="container h-full-dvh mx-auto flex justify-center items-center">
        <div className="absolute w-full h-full top-0 left-0 -z-10 layout">
          <Image
            width={120}
            height={120}
            style={{ width: 120, height: 120 }}
            className="absolute hidden lg:block top-24 right-1/2 translate-x-1/2 mr-36 drop-shadow"
            src="/images/element/cloud.svg"
            alt="cloud-left-top.svg"
          />
          <Image
            width={100}
            height={100}
            className="absolute top-44 right-52 hidden lg:block drop-shadow"
            src="/images/element/cloud.svg"
            alt="cloud-right.svg"
          />
          <Image
            width={80}
            height={80}
            className="absolute lg:hidden top-24 md:top-64 right-4 drop-shadow"
            src="/images/element/flower-2.svg"
            alt="flower-2.svg"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 lg:gap-10 px-8 xl:px-0">
          <div className="lg:col-span-2 font-amatic-sc font-bold text-8xl flex flex-col justify-center items-center relative">
            <div className="relative px-8 lg:px-0 hidden lg:block animate-main trainers images z-20">
              <div className={`${styles.images} relative`}>
                <Image
                  width={500}
                  height={500}
                  style={{ width: 500, height: 500 }}
                  src="/images/main/ex-main.svg"
                  className="drop-shadow-images"
                  alt="ex-main"
                />
                <div className="absolute top-3/4 left-0 h-full w-full -z-50 bg-stick-2 bg-center bg-contain bg-no-repeat" />
              </div>
              <Image
                width={120}
                height={120}
                style={{ width: 120, height: 120 }}
                className="absolute bottom-1 -left-12 animate-breath hidden lg:block"
                src="/images/main/ex-wind.svg"
                alt="ex-wind.svg"
              />
            </div>
            <ul className="speed-lines absolute top-1/2 translate-y-1/2 -left-10 animate-fix-0.5 z-20">
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-primary"></li>
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-primary"></li>
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-primary"></li>
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center lg:pr-16 xl:pr-0 relative">
            <h4 className="text-7xl lg:text-8xl font-amatic-sc font-bold mb-6 lg:mb-6 heading">
              Experience
            </h4>
            <div className="flex flex-col relative">
              <div className="flex flex-col relative content1">
                <div className="text-base lg:text-xl font-light flex justify-between items-end">
                  Oct 2021 - Oct 2022
                  <span className="text-sm font-light lg:font-normal lg:text-base">
                    RealTime Ltd.
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">
                  Frontend Developer
                </h3>
                <p className="text-sm lg:text-lg mb-2 lg:mb-4">
                  I specialize in frontend web development, heavily
                  incorporating Functional Programming principles. I've
                  introduced TypeScript and Unit Tests to ensure code stability
                  and scalability. Despite being the sole frontend developer, I
                  can independently handle most project tasks.
                </p>
                <p className="text-sm lg:text-lg">
                  In the past few months, I completed two projects using{" "}
                  <strong>Next.js</strong> and <strong>Web3</strong> blockchain
                  technology, along with two backend systems using{" "}
                  <strong>Vue 3</strong>. Additionally, I developed a real-time
                  chatbot with <strong>React</strong> and{" "}
                  <strong>WebSocket</strong> technology.
                  {/* 我專攻前端網頁開發，大量運用 Functional Programming 理念。引入 TypeScript 和單元測試以確保程式碼穩定性和擴展性。儘管是唯一的前端開發者，我能獨立完成大部分專案任務。最近，我完成了兩個使用 Next.js 和 Web3 區塊鏈技術的專案，以及兩個使用 Vue 3 的後台系統。此外，我還開發了一個使用 React 和 WebSocket 技術的即時聊天機器人。*/}
                </p>
              </div>
              <div className="flex flex-col absolute top-0 left-0 content2">
                <div className="text-base lg:text-xl font-light flex justify-between items-end">
                  Oct 2022 - Present
                  <span className="text-sm font-light lg:font-normal lg:text-base">
                    RealTime Ltd.
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">
                  Frontend & Backend Developer
                </h3>
                <p className="text-sm lg:text-lg mb-2 lg:mb-4">
                  To align with the company’s development direction, I gradually
                  transitioned to the backend field. My primary responsibilities
                  include assisting with online projects to develop new APIs,
                  fixing bugs, and self-learning <strong>Docker</strong>,{" "}
                  <strong>AWS ECR</strong> and <strong>Nginx</strong> for
                  deploying test sites. Additionally, I frequently collaborate
                  with the MIS team to research more efficient project
                  deployment methods.
                </p>
                <p className="text-sm lg:text-lg">
                  Despite this focus, I remain actively engaged in maintaining
                  and developing front-end pages, and assisting my colleagues in
                  resolving front-end rendering issues.
                  {/* 因應公司的發展方向，我逐漸轉向後端領域的發展。我的主要工作內容包括協助在線專案開發新的 API、修復 Bug，以及自主學習 Docker 和 Nginx 來進行測試站部署。我也經常與 MIS 團隊討論，共同研究更有效的專案部署方式。儘管如此，我仍積極參與前端頁面的維護和開發，並協助同事解決前端渲染問題。 */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
