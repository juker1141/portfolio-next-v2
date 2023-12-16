"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const GoTopBtn = () => {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash;

      if (currentHash === "#Home" || currentHash === "") {
        // 在這裡執行你想要的操作
        setIsShowBtn(false);
        // console.log("現在的錨點值是 #Banner", currentHash);
      } else {
        setIsShowBtn(true);
      }
    };

    checkHash();

    addEventListener("hashchange", checkHash);

    return () => {
      removeEventListener("hashchange", checkHash);
    };
  }, []);
  const goTopSection: React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    (window as any).fullpage_api.moveTo("Home");
  };

  return (
    <Fragment>
      <Image
        onClick={goTopSection}
        className={`fixed bottom-10 right-4 lg:right-6 drop-shadow-md hover:animate-bounce duration-75 ${
          isShowBtn ? "blcok" : "hidden"
        }`}
        src="/images/go-top-btn.svg"
        width="40"
        height="40"
        alt="GoTopBtn"
      />
      <div id="reCaptchaEl" />
    </Fragment>
  );
};

export default GoTopBtn;
