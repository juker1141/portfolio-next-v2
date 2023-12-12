import Image from "next/image";

const GoTopBtn = () => {
  return (
    <Image
      className="fixed bottom-10 right-4"
      src="/images/go-top-btn.svg"
      width="40"
      height="40"
      alt="GoTopBtn"
    />
  );
};

export default GoTopBtn;
