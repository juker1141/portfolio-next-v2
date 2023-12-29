"use client";
import { useState, useEffect, useRef, useCallback } from "react";

import {
  isFirstSilder,
  isLastSilder,
  detectActiveSection,
  detectActiveSlider,
  type ScrollData,
} from "@/util/scroll";
import type { Component } from "@/util/types";

const useSmoothScroller = (
  fullpages: Component[],
  fullpagesString: string[]
) => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const sliderRefs = useRef<HTMLLIElement[]>([]);
  const slidersScrollRef = useRef<HTMLDivElement>(null);

  const isTriggered = useRef(false);
  const isIniting = useRef(false);

  const [scrollData, setScrollData] = useState<ScrollData>({
    section: "Banner",
    slider: 0,
  });

  const goTopScroll = () => {
    const bannerEl = sectionRefs.current[0];

    setScrollData((prevData) => ({
      slider: 0,
      section: fullpagesString[0],
    }));

    const slidersScrollEl = slidersScrollRef.current;

    bannerEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      slidersScrollEl?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1000);
  };

  const goSectionScroll = (target: string) => {
    const targetIndex = fullpages.findIndex(
      (page: Component) => target.toLowerCase() === page.name.toLowerCase()
    );
    const targetEl = sectionRefs.current[targetIndex];

    setScrollData((prevData) => ({
      slider: 0,
      section: fullpagesString[targetIndex],
    }));

    const slidersScrollEl = slidersScrollRef.current;

    targetEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      slidersScrollEl?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1000);
  };

  const detecthashLocation = async (
    sliderRefs: React.MutableRefObject<HTMLLIElement[]>
  ) => {
    if (window.location.hash) {
      let hash = window.location.hash;

      // 將 hash 拆分成陣列，以"/"作為分隔符
      const hashParts: string[] = hash.split("/");

      const hashEl = document.querySelector(
        hashParts[0].toLowerCase()
      ) as HTMLElement;

      if (hashEl) {
        if (hashParts[0] === "#Work") {
          // 做 #Work 的處理
          console.log("Handling #Work");

          hashEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // await scrollToTop(body, hashEl.offsetTop);
          // 如果有附加參數，例如 #Work/1
          if (hashParts.length > 1 && sliderRefs.current) {
            const sliderIndex = parseInt(hashParts[1], 10);

            setScrollData((prevData) => ({
              slider: sliderIndex - 1,
              section: hashParts[0].replace("#", ""),
            }));
            sliderRefs.current[sliderIndex - 1].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          setScrollData((prevData) => ({
            ...prevData,
            section: hashParts[0].replace("#", ""),
          }));
          hashEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        isIniting.current = false;
      }
    }
  };

  useEffect(() => {
    isIniting.current = true;
    detecthashLocation(sliderRefs);
  }, []);

  useEffect(() => {
    // TODO:要在用戶刷新後判斷切換的位置
    // console.log("data is change", scrollData);

    if (!isIniting.current) {
      const isWorkSection = scrollData.section === "Work";
      window.location.hash = `#${scrollData.section}${
        isWorkSection ? `/${scrollData.slider + 1}` : ``
      }`;
    }
  }, [scrollData]);

  const scrollToTop = async (target: HTMLElement, direction: number) => {
    await new Promise((resolve: any) => {
      target.scrollBy({
        top: direction,
        behavior: "smooth",
      });

      setTimeout(() => {
        isTriggered.current = false;
        resolve();
      }, 1500); // 這裡可以根據需要調整等待的時間，或者使用其他方式來確保Promise結束
    });
  };

  const handleWheelScroll = useCallback(
    async (e: WheelEvent) => {
      const delta = e.deltaY;

      const body = document.body;
      const elemIndex = fullpages.findIndex(
        (el: Component) => el.name === scrollData.section
      );
      const rect = sectionRefs.current[elemIndex].getBoundingClientRect();

      if (
        rect.bottom - window.innerHeight <= 10 &&
        elemIndex !== sectionRefs.current.length - 1 &&
        delta > 0 &&
        scrollData.section !== "Work"
      ) {
        // is near bottom
        e.preventDefault();

        if (!isTriggered.current) {
          isTriggered.current = true;

          await scrollToTop(body, delta);
        }
      } else if (
        rect.top >= -10 && // 距離
        elemIndex !== 0 && // 第一張投影片不能往上
        delta < 0 && // 方向往下
        scrollData.section !== "Work" // 除了 Work 以外
      ) {
        // is near top
        e.preventDefault();
        if (!isTriggered.current) {
          isTriggered.current = true;

          await scrollToTop(body, delta);
        }
      } else if (
        sectionRefs.current[elemIndex].offsetHeight === window.innerHeight
      ) {
        // 內容撐滿螢幕高
        e.preventDefault();
        isTriggered.current = false;
      }
    },
    [fullpages, scrollData.section]
  );
  const sliderHandleWheelScroll = useCallback(
    async (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const slidersScrollEl = slidersScrollRef.current;

      const delta = e.deltaY;

      if (!isTriggered.current) {
        isTriggered.current = true;
        if (
          scrollData.section === "Work" &&
          scrollData.slider === sliderRefs.current.length - 1 &&
          delta > 0
        ) {
          // 離開 - 去下一張投影片
          await scrollToTop(document.body, delta);
        } else if (
          scrollData.section === "Work" &&
          scrollData.slider === 0 &&
          delta < 0
        ) {
          // 離開 - 去上一張投影片
          await scrollToTop(document.body, delta);
        } else if (slidersScrollEl) {
          await scrollToTop(slidersScrollEl, delta);
        }
      }
    },
    [scrollData]
  );

  useEffect(() => {
    const slidersScrollEl = slidersScrollRef.current;

    document.body.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });
    slidersScrollEl?.addEventListener("wheel", sliderHandleWheelScroll, {
      passive: false,
    });
    return () => {
      document.body.removeEventListener("wheel", handleWheelScroll);
      slidersScrollEl?.removeEventListener("wheel", sliderHandleWheelScroll);
    };
  }, [handleWheelScroll, sliderHandleWheelScroll]);

  useEffect(() => {
    const body = document.body;

    const handleScroll = () => {
      const activeSection = detectActiveSection(sectionRefs.current);
      if (typeof activeSection === "string") {
        setScrollData((prevData) => ({
          ...prevData,
          section: activeSection,
        }));
      }
    };

    body.addEventListener("scroll", handleScroll, {
      passive: false,
    });

    const slidersScrollEl = slidersScrollRef.current;
    const sliderHandleScroll = () => {
      const activeSlider = detectActiveSlider(sliderRefs.current);

      if (typeof activeSlider === "string") {
        setScrollData((prevData) => ({
          ...prevData,
          slider: parseInt(activeSlider, 10),
        }));
      }
    };

    slidersScrollEl?.addEventListener("scroll", sliderHandleScroll, {
      passive: false,
    });

    return () => {
      body.removeEventListener("scroll", handleScroll);
      slidersScrollEl?.removeEventListener("scroll", sliderHandleScroll);
    };
  }, [scrollData]);

  return {
    sectionRefs,
    sliderRefs,
    slidersScrollRef,
    scrollData,
    goTopScroll,
    goSectionScroll,
  };
};

export default useSmoothScroller;
