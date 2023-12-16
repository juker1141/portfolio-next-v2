import Image from "next/image";

const WorkImage = ({
  imageUrl,
  imagePosition,
}: {
  imageUrl: string;
  imagePosition: string;
}) => {
  return (
    // <div className="flex flex-col items-center">
    //   <div className="relative mx-4 md:mx-0">
    //     {/* <Image
    //       priority
    //       width={450}
    //       height={250}
    //       className="m-4 mb-0 pb-7 rounded border-primary border-2"
    //       src={imageUrl}
    //       alt={imageAlt}
    //     /> */}
    //     <div
    //       style={{ backgroundImage: `url("${imageUrl}")` }}
    //       className="bg-center bg-no-repeat bg-cover w-[280px] h-40 md:w-[446px] md:h-[250px] m-3 mt-2 mb-2.5 md:m-4 md:mb-7 rounded border-primary border-2"
    //     ></div>
    //     <Image
    //       priority
    //       width={500}
    //       height={500}
    //       className="absolute top-0 left-0 px-2 md:px-0"
    //       src={`/images/computer-m.svg`}
    //       alt="computer-monitor"
    //     />
    //   </div>
    //   <Image
    //     priority
    //     width={540}
    //     height={500}
    //     className=""
    //     src={`/images/computer-k.svg`}
    //     alt="computer-keyboard"
    //   />
    // </div>
    <div className="flex flex-col items-center">
      <div className="relative mx-0 md:mx-0">
        <div
          style={{ backgroundImage: `url("${imageUrl}")` }}
          className={`${imagePosition} bg-no-repeat bg-cover absolute top-3 lg:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] h-[calc(100%-52px)] lg:w-[calc(100%-72px)] lg:h-[calc(100%-72px)]`}
        ></div>
        <Image
          priority
          width={500}
          height={500}
          className="absolute top-0 left-0 px-0 md:px-0"
          src={`/images/computer.svg`}
          alt="computer-monitor"
        />
        <Image
          priority
          width={500}
          height={500}
          className="opacity-0"
          src={`/images/computer.svg`}
          alt="computer-monitor"
        />
      </div>
    </div>
  );
};

export default WorkImage;
