import { FillingBottle } from "react-cssfx-loading";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div
      className={`absolute top-0 left-0 z-[9999999] transition-opacity duration-100 ${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-screen h-screen flex justify-center items-center relative content backdrop-blur-sm">
        <FillingBottle
          color="#543c1a"
          width="50px"
          height="50px"
          duration="3s"
        />
      </div>
    </div>
  );
};

export default Loading;
