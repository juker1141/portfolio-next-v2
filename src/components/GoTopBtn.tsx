"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const GoTopBtn = ({ goTopScroll }: { goTopScroll: () => void }) => {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash;

      if (currentHash === "#Banner" || currentHash === "") {
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
  const goTopSection: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // (window as any).fullpage_api.moveTo("Home");
    goTopScroll();
  };

  return (
    <Fragment>
      <button onClick={goTopSection}>
        <Image
          className={`fixed bottom-10 right-4 lg:right-6 drop-shadow-md hover:animate-bounce duration-100 ${
            isShowBtn ? "blcok" : "hidden"
          }`}
          src="/images/go-top-btn.svg"
          width="40"
          height="40"
          alt="GoTopBtn"
        />
      </button>
      <div id="reCaptchaEl" />
    </Fragment>
  );
};

export default GoTopBtn;
