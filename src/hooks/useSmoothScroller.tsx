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

  const [scrollData, setScrollData] = useState<ScrollData>({
    section: "Banner",
    slider: 0,
  });

  useEffect(() => {
    // console.log("data is change", scrollData);
  }, [scrollData]);

  function smoothScroll(target: HTMLElement, direction: number, offset = 0) {
    const elemIndex = fullpages.findIndex(
      (el: Component) => el.name === scrollData.section
    );
    const rect = sectionRefs.current[elemIndex + 1].getBoundingClientRect();
    let targetPosition = Math.floor(rect.top + self.pageYOffset + offset);
    target.scrollTo({
      top: direction,
      behavior: "smooth",
    });

    return new Promise<void>((resolve, reject) => {
      const failed = setTimeout(() => {
        reject();
      }, 2000);

      const scrollHandler = () => {
        if (self.pageYOffset === targetPosition) {
          window.removeEventListener("scroll", scrollHandler);
          clearTimeout(failed);
          resolve();
        }
      };
      if (self.pageYOffset === targetPosition) {
        clearTimeout(failed);
        resolve();
      } else {
        window.addEventListener("scroll", scrollHandler);
        sectionRefs.current[elemIndex + 1].getBoundingClientRect();
      }
    });
  }

  const scrollToTop = async (target: HTMLElement, direction: number) => {
    await new Promise((resolve: any) => {
      target.scrollBy({
        top: direction,
        behavior: "smooth",
      });
      // target.focus({ preventScroll: true });
      setTimeout(() => {
        isTriggered.current = false;
        resolve();
      }, 1200); // 這裡可以根據需要調整等待的時間，或者使用其他方式來確保Promise結束
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
      console.log(rect.top);

      if (
        rect.bottom - window.innerHeight <= 10 &&
        elemIndex !== sectionRefs.current.length - 1 &&
        delta > 0 &&
        scrollData.section !== "Work"
      ) {
        // the desired place
        // console.log("is bottom");
        e.preventDefault();

        if (!isTriggered.current) {
          isTriggered.current = true;

          await scrollToTop(body, delta);
        }
      } else if (
        rect.top >= -30 &&
        elemIndex !== 0 &&
        delta < 0 &&
        scrollData.section !== "Work"
      ) {
        // rect.top <=
        //   (window.innerHeight || document.documentElement.clientHeight) / 2;
        console.log("is top");
        e.preventDefault();
        if (!isTriggered.current) {
          isTriggered.current = true;

          await scrollToTop(body, delta);
        }
      } else if (
        sectionRefs.current[elemIndex].offsetHeight === window.innerHeight
      ) {
        e.preventDefault();
        isTriggered.current = false;
      } else {
        console.log("trigger");
      }
      // let hash = window.location.hash;

      // 將 hash 拆分成陣列，以"/"作為分隔符
      // const hashParts: string[] = hash.split("/");
    },
    [fullpages, scrollData.section]
  );
  const sliderHandleWheelScroll = useCallback(
    async (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const slidersScrollEl = slidersScrollRef.current;

      const delta = e.deltaY;

      console.log(isTriggered.current);
      if (!isTriggered.current) {
        isTriggered.current = true;
        console.log(scrollData, delta);
        if (
          scrollData.section === "Work" &&
          scrollData.slider === sliderRefs.current.length - 1 &&
          delta > 0
        ) {
          // 去下層
          console.log("triggerrrr");
          await scrollToTop(document.body, delta);
        } else if (
          scrollData.section === "Work" &&
          scrollData.slider === 0 &&
          delta < 0
        ) {
          // 去上層
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
    // TODO:要在用戶刷新後判斷切換的位置
    // detecthashLocation(body);
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
      // detectActiveSlider("Work");
      const activeSlider = detectActiveSlider(sliderRefs.current);
      console.log(activeSlider);
      if (typeof activeSlider === "string") {
        console.log(parseInt(activeSlider, 10));
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
  };
};

export default useSmoothScroller;
