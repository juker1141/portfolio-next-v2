"use client";
import { useState, useEffect } from "react";

const useCheckIsWide = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isIpadScreen, setIsIpadScreen] = useState(false);

  useEffect(() => {
    const checkIsWide = () => {
      const isWide = window.innerWidth > 1024;
      setIsWideScreen(isWide);
      const isIpadWide = window.innerWidth <= 1024 && window.innerWidth > 820;
      setIsIpadScreen(isIpadWide);
    };

    checkIsWide();

    addEventListener("resize", () => {
      checkIsWide();
    });

    return () => {
      removeEventListener("resize", () => {
        checkIsWide();
      });
    };
  }, []);

  return { isWideScreen, isIpadScreen };
};

export default useCheckIsWide;
