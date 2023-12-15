import Image from "next/image";
import { Fragment } from "react";

const GoTopBtn = () => {
  return (
    <Fragment>
      <Image
        className="fixed bottom-10 right-4"
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
