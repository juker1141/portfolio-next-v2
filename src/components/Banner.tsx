import Image from "next/image";

const titles = ["Frontend Software Developer", "Backend Software Developer"];

const Banner = () => {
  return (
    <section className="h-screen pt-52 px-4 lg:pt-0 lg:px-0 w-full relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          voluptatum.
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis
          quas, illo minima ut aperiam delectus exercitationem cumque rerum
          quasi sint reiciendis alias est rem.
        </p>
      </div>
      <div className="flex items-center">
        <Image
          width={1000}
          height={700}
          src="/images/banner_hero.webp"
          alt="exampleImage"
        />
      </div>
    </section>
  );
};

export default Banner;
