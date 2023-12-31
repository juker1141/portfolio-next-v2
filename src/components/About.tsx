import Image from "next/image";

const About = () => {
  return (
    <div className="section">
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10">
          <div className="lg:col-span-2 relative">
            <Image
              src="/images/banner_hero.webp"
              width={400}
              height={400}
              className="rounded-full border-8 border-secondary"
              alt="Hero"
            />
            <Image
              width={120}
              height={120}
              className="absolute -top-8 -right-12"
              src="images/element/e-9.svg"
              alt="e-9"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center relative">
            <h2 className="text-8xl font-bold mb-4 font-amatic-sc">About Me</h2>
            <span className="text-lg mb-4 font-light">
              Frontend Developer / Backend Developer
            </span>
            <p className="text-xl">
              I have been learning to program for three years. I am proficient
              in using popular <strong>React</strong> and <strong>Vue</strong>{" "}
              frameworks and have developed a complete website useing{" "}
              <strong>Express and MongoDB</strong>.
            </p>
            <Image
              width={120}
              height={120}
              className="absolute -bottom-16 right-0"
              src="images/element/e-8.svg"
              alt="e-8"
            />
          </div>
          {/* <div className="flex flex-col justify-center">
            <div className="w-full flex justify-start">
              <div className="w-1/2">
                <h3 className="text-5xl font-bold mb-2">Frontend</h3>
                <p className="text-xl mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sunt maiores iusto! Itaque, nam odit doloremque
                  perspiciatis ducimus officia repellendus aliquam neque
                  mollitia libero rerum sapiente cum autem rem beatae.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-1/2">
                <h3 className="text-5xl font-bold mb-2">Backend</h3>
                <p className="text-xl mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sunt maiores iusto! Itaque, nam odit doloremque
                  perspiciatis ducimus officia repellendus aliquam neque
                  mollitia libero rerum sapiente cum autem rem beatae.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
