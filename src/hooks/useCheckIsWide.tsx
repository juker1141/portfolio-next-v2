"use client";
import { useState, useEffect } from "react";

const useCheckIsWide = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const checkIsWide = () => {
      const isWide = window.innerWidth > 1024;
      setIsWideScreen(isWide);
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

  return isWideScreen;
};

export default useCheckIsWide;
