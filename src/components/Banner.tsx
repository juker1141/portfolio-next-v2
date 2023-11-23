import Image from "next/image";

const titles = ["Frontend Software Developer", "Backend Software Developer"];

const Banner = () => {
  return (
    <section className="container mx-auto h-screen flex justify-center items-center">
      <div className="pt-52 px-4 lg:pt-0 lg:px-0 w-full relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl mb-2">
            {/* <span className="bg-hello bg-center bg-no-repeat bg-contain text-6xl text-transparent mr-3">
              Hello
            </span> */}
            {/* <Image
              src="/images/hello.svg"
              height="48"
              width="200"
              alt="hello"
            /> */}
            {/* 52.456 47.799 */}
            Hello! I&apos;m Ryu
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptatibus blanditiis nulla suscipit atque
            veritatis quas, illo minima ut aperiam delectus exercitationem
            cumque rerum quasi sint reiciendis alias est rem.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            width={1600}
            height={700}
            src="/images/banner-main.webp"
            alt="exampleImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
