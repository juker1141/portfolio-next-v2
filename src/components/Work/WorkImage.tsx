import Image from "next/image";

const WorkImage = ({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* <Image
          priority
          width={450}
          height={250}
          className="m-4 mb-0 pb-7 rounded border-secondary border-2"
          src={imageUrl}
          alt={imageAlt}
        /> */}
        <div
          style={{ backgroundImage: `url("${imageUrl}")` }}
          className="bg-center bg-no-repeat bg-cover w-[446px] h-[250px] m-4 mb-7 rounded border-secondary border-2"
        ></div>
        <Image
          priority
          width={500}
          height={500}
          className="absolute top-0 left-0"
          src={`/images/computer-m.svg`}
          alt="computer-monitor"
        />
      </div>
      <Image
        priority
        width={540}
        height={500}
        className=""
        src={`/images/computer-k.svg`}
        alt="computer-keyboard"
      />
    </div>
  );
};

export default WorkImage;
