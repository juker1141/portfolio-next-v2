"use client";
import { useState, useEffect } from "react";

import { isFirstSilder } from "@/util/slider";

const useSmoothScroller = () => {
  const [wheelEventTriggered, setWheelEventTriggered] = useState(false);
  const [activeSection, setActiveSection] = useState("Banner");

  const scrollToTop = async (target: HTMLElement, direction: number) => {
    await new Promise((resolve: any) => {
      target.scrollBy({
        top: direction,
        behavior: "smooth",
      });
      setTimeout(() => {
        resolve();
        setWheelEventTriggered(false);
      }, 1500); // 這裡可以根據需要調整等待的時間，或者使用其他方式來確保Promise結束
    });
  };
  const scrollToLeft = async (target: HTMLElement, direction: number) => {
    await new Promise((resolve: any) => {
      target.scrollBy({
        left: direction,
        behavior: "smooth",
      });

      setTimeout(() => {
        resolve();
        setWheelEventTriggered(false);
      }, 1500); // 這裡可以根據需要調整等待的時間，或者使用其他方式來確保Promise結束
    });
  };

  const detectActiveSection = (sections: HTMLCollectionOf<HTMLElement>) => {
    let currentSectionAnchor = null;

    for (let i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSectionAnchor = sections[i].dataset.anchor;
      }
    }
    console.log(currentSectionAnchor);
    // 更新URL中的hash
    if (currentSectionAnchor) {
      setActiveSection(currentSectionAnchor);
      window.location.hash = "#" + currentSectionAnchor;
    }
  };

  const detecthashLocation = async (body: HTMLElement) => {
    if (window.location.hash) {
      let hash = window.location.hash;

      // 將 hash 拆分成陣列，以"/"作為分隔符
      const hashParts: string[] = hash.split("/");

      const hashEl = document.querySelector(
        hashParts[0].toLowerCase()
      ) as HTMLElement;

      if (hashEl) {
        hashEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (hashParts[0] === "#Work") {
          // 做 #Work 的處理
          console.log("Handling #Work");

          // await scrollToTop(body, hashEl.offsetTop);
          // 如果有附加參數，例如 #Work/1
          if (hashParts.length > 1) {
            const slideScrollBar = document.getElementById("work-scrollbar");
            const sliders = hashEl.getElementsByTagName("li");
            const additionalParam = parseInt(hashParts[1], 10);

            if (slideScrollBar) {
              sliders[additionalParam - 1].scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            // 做帶有附加參數的處理
            console.log(`Handling additional param: ${additionalParam}`);
          }
        }
      }
    }
  };

  useEffect(() => {
    const body = document.body;
    const sections = body.getElementsByTagName("section");
    detecthashLocation(body);

    const handlewheelScroll = async (event: any) => {
      event.preventDefault();

      let hash = window.location.hash;

      // 將 hash 拆分成陣列，以"/"作為分隔符
      const hashParts: string[] = hash.split("/");

      if (!wheelEventTriggered) {
        setWheelEventTriggered(
          (wheelEventTriggered) => (wheelEventTriggered = true)
        );
        const delta = event.deltaY;
        if (hash.indexOf("#Work") === -1) {
          await scrollToTop(body, delta);
        } else if (isFirstSilder(hash, "Work") && delta < 0) {
          await scrollToTop(body, delta);
        }
      }
    };

    const handleScroll = () => detectActiveSection(sections);

    body.addEventListener("wheel", handlewheelScroll, { passive: false });
    body.addEventListener("scroll", handleScroll, {
      passive: false,
    });

    return () => {
      body.removeEventListener("wheel", handlewheelScroll);
      body.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useSmoothScroller;
