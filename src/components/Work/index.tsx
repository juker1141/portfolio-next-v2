"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import WorkImage from "@/components/Work/WorkImage";

type ElementType = "sushi" | "drink" | "cactus";

type Work = {
  title: string;
  content: string;
  imageUrl: string;
  imagePosition: string;
  elementType: ElementType;
};

const Work = ({
  fullpageApi,
  isWideScreen,
}: {
  fullpageApi: any;
  isWideScreen: boolean;
}) => {
  const [worksList, setWorksList] = useState<Work[]>([
    {
      title: "Project1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/maskMap_1.jpg",
      imagePosition: "bg-left",
      elementType: "sushi",
    },
    {
      title: "Project2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/music_1.jpg",
      imagePosition: "bg-center",
      elementType: "drink",
    },
    {
      title: "Project3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/works/stores_1.jpg",
      imagePosition: "bg-center",
      elementType: "cactus",
    },
  ]);

  // useEffect(() => {
  //   if (fullpageApi) {
  //     fullpageApi.reBuild();
  //   }
  // }, [fullpageApi]);

  const renderWorkElement = (type: ElementType) => {
    switch (type) {
      case "sushi":
        return (
          <Fragment>
            {/* <Image
              width={100}
              height={100}
              className="absolute top-12 left-20"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={40}
              height={40}
              className="absolute bottom-24 right-12"
              src="images/element/e-6.svg"
              alt="e-6"
            />
            <Image
              width={40}
              height={40}
              className="absolute bottom-0 right-6 origin-bottom -rotate-12"
              src="images/element/e-5.svg"
              alt="e-5"
            /> */}
            <Image
              width={100}
              height={100}
              className="absolute top-12 left-20"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={70}
              height={70}
              className="absolute -top-0 right-24"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={200}
              height={200}
              className="absolute -bottom-0 right-16"
              src="images/element/e-22.svg"
              alt="e-22"
            />
          </Fragment>
        );
      case "drink":
        return (
          <Fragment>
            <Image
              width={160}
              height={160}
              className="absolute -bottom-8 left-12"
              src="images/element/e-23.svg"
              alt="e-23"
            />
            <Image
              width={60}
              height={60}
              className="absolute -top-10 left-12 rotate-90"
              src="images/element/e-17.svg"
              alt="e-17"
            />
            <Image
              width={30}
              height={30}
              className="absolute bottom-10 right-36 rotate-45"
              src="images/element/e-18.svg"
              alt="e-18"
            />
          </Fragment>
        );
      case "cactus":
        return (
          <Fragment>
            <Image
              width={40}
              height={40}
              className="absolute -top-12 left-0 -rotate-12"
              src="images/element/e-6.svg"
              alt="e-6"
            />
            <Image
              width={30}
              height={30}
              className="absolute -top-0 left-12"
              src="images/element/e-5.svg"
              alt="e-5"
            />
            <Image
              width={100}
              height={100}
              className="absolute bottom-6 right-36"
              src="images/element/e-21.svg"
              alt="e-21"
            />
            <Image
              width={40}
              height={40}
              className="absolute bottom-24 right-16 rotate-12"
              src="images/element/e-5.svg"
              alt="e-5"
            />
          </Fragment>
        );
      default:
        return;
    }
  };

  const renderWorksList = () => {
    return worksList.map((work, index) => {
      return (
        <div
          className="slide"
          id={`workId${index + 2}`}
          key={index}
          data-anchor={`${index + 2}`}
        >
          <div className="container h-screen mx-auto flex justify-center items-center">
            <div className="px-4 lg:pt-0 lg:px-0 w-full relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
              <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center items-start">
                <h2 className="text-4xl lg:text-5xl mb-2">{work.title}</h2>
                <p className="text-xl">{work.content}</p>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center items-center relative px-0 lg:px-0">
                <WorkImage
                  imageUrl={work.imageUrl}
                  imagePosition={work.imagePosition}
                />
                {isWideScreen && renderWorkElement(work.elementType)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="section">
      <Fragment>
        <div className="slide" id="workId1" data-anchor="workBanner">
          <div className="container h-screen mx-auto flex flex-col justify-center items-center relative">
            <Image
              width={isWideScreen ? 200 : 150}
              height={isWideScreen ? 200 : 150}
              className="absolute bottom-24 left-6 lg:left-12"
              src="images/sp-main.svg"
              alt="sp-main"
            />
            <Image
              width={20}
              height={20}
              className="absolute top-60 lg:top-72 right-10 lg:left-72"
              src="images/element/e-13.svg"
              alt="e-13"
            />
            <Image
              width={30}
              height={30}
              className="absolute top-32 lg:top-24 left-10 lg:right-52"
              src="images/element/e-14.svg"
              alt="e-14"
            />
            <Image
              width={15}
              height={15}
              className="absolute top-40 lg:top-32 left-16 lg:right-48"
              src="images/element/e-13.svg"
              alt="e-13"
            />
            <h4 className="font-amatic-sc font-bold text-8xl mb-6">
              Side Projects
            </h4>
            <p className="w-full lg:w-1/2 text-lg text-center">
              I frequently dedicate my spare time to researching new
              technologies or engaging in practical exercises.
              <br /> For additional information, you can visit{" "}
              <a className="font-bold" href="http://google.com">
                My Github
              </a>
              .
            </p>
          </div>
        </div>
        {renderWorksList()}
      </Fragment>
      {/* {isWideScreen ? (
        <Fragment>
          <div className="slide" id="workId1" data-anchor="workBanner">
            <div className="container h-screen mx-auto flex flex-col justify-center items-center relative">
              <Image
                width={200}
                height={200}
                className="absolute bottom-24 left-12"
                src="images/sp-main.svg"
                alt="sp-main"
              />
              <Image
                width={20}
                height={20}
                className="absolute top-72 left-72"
                src="images/element/e-13.svg"
                alt="e-13"
              />
              <Image
                width={30}
                height={30}
                className="absolute top-24 right-52"
                src="images/element/e-14.svg"
                alt="e-14"
              />
              <Image
                width={15}
                height={15}
                className="absolute top-32 right-48"
                src="images/element/e-13.svg"
                alt="e-13"
              />
              <h4 className="font-amatic-sc font-bold text-8xl mb-6">
                Side Projects
              </h4>
              <p className="w-full lg:w-1/2 text-lg text-center">
                I frequently dedicate my spare time to researching new
                technologies or engaging in practical exercises.
                <br /> For additional information, you can visit{" "}
                <a className="font-bold" href="http://google.com">
                  My Github
                </a>
                .
              </p>
            </div>
          </div>
          {renderWorksList()}
        </Fragment>
      ) : (
        <div></div>
      )} */}
      {/* <div className="slide" id="slide2" data-anchor="slide2">
        <div className="container mx-auto flex justify-center items-center">
          <div className="pt-52 px-4 lg:pt-0 lg:px-0 w-full relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10">
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-5xl mb-2">Project1</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus voluptatibus blanditiis nulla suscipit atque
                veritatis quas, illo minima ut aperiam delectus exercitationem
                cumque rerum quasi sint reiciendis alias est rem.
              </p>
            </div>
            <div className="flex items-center">
              <Image
                width={500}
                height={500}
                src="/images/banner_hero.webp"
                alt="exampleImage"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slide" id="slide3" data-anchor="slide3">
        <h1>Slide 3</h1>
      </div>
      <div className="slide" id="slide3" data-anchor="slide3">
        <h1>Slide 4</h1>
      </div>
      <div className="slide" id="slide3" data-anchor="slide3">
        <h1>Slide 5</h1>
      </div> */}
      {/* <div className="container mx-auto flex justify-center items-center"></div> */}
      {/* <div className="w-screen overflow-x-scroll">
        {works.map((work, i) => (
          <section
            key={i}
            className="h-full w-[1800px] flex justify-center items-center"
          >
            <h1 className="text-3xl">{work}</h1>
          </section>
        ))}
      </div> */}
    </div>
  );
};

export default Work;
