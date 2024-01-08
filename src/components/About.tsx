import Image from "next/image";

const About = ({
  fullpageApi,
  isWideScreen,
}: {
  fullpageApi: any;
  isWideScreen: boolean;
}) => {
  return (
    <div className="section">
      <div className="container h-screen mx-auto flex justify-center items-center  overflow-y-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10 px-4 lg:px-0">
          <div className="lg:col-span-2 relative px-12 lg:px-8 xl:px-0 flex justify-center items-center">
            <Image
              src="/images/hero.webp"
              width={400}
              height={400}
              className="rounded-full border-8 border-primary"
              alt="Hero"
            />
            <Image
              width={120}
              height={120}
              className="absolute top-0 right-2 lg:-top-8 lg:-right-12"
              // className="absolute top-0 right-2 lg:-top-64 lg:-right-12 rellax-el"
              src="images/element/e-9.svg"
              alt="e-9"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center relative lg:pr-16 xl:pr-0">
            <h2
              className="text-8xl font-bold mb-4 font-amatic-sc"
              data-aos="fade-up"
            >
              About Me
            </h2>
            <span
              className="text-lg mb-4 font-light"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Frontend Developer / Backend Developer
            </span>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="300">
              I have been learning to program for three years. I am proficient
              in using popular <strong>React</strong> and <strong>Vue</strong>{" "}
              frameworks and have developed a complete website useing{" "}
              <strong>Express and MongoDB</strong>.
            </p>
            <Image
              width={120}
              height={120}
              className="absolute hidden lg:block -bottom-24 right-0 z-0"
              src="images/element/e-8.svg"
              alt="e-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
