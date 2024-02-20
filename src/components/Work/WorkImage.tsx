import Image from "next/image";

const WorkImage = ({
  imageUrl,
  imagePosition,
  className,
}: {
  imageUrl: string;
  imagePosition: string;
  className: string;
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative mx-0">
        <div
          style={{ backgroundImage: `url("${imageUrl}")` }}
          className={`${imagePosition} bg-no-repeat bg-cover absolute top-3 lg:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] h-[calc(100%-52px)] lg:w-[calc(100%-72px)] lg:h-[calc(100%-72px)]`}
        ></div>
        <Image
          width={500}
          height={500}
          className="absolute top-0 left-0 px-0 md:px-0"
          src={`/images/main/computer.svg`}
          alt="computer-monitor"
        />
        <Image
          width={500}
          height={500}
          className="opacity-0"
          src={`/images/main/computer.svg`}
          alt="computer-monitor"
        />
      </div>
    </div>
  );
};

export default WorkImage;
