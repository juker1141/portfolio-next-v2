"use client";
import Image from "next/image";
import { useState } from "react";

type Work = {
  title: string;
  content: string;
  imageUrl: string;
};

const Work = () => {
  const [worksList, setWorksList] = useState<Work[]>([
    {
      title: "Project1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/images/banner_hero.webp",
    },
    {
      title: "Project2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/images/banner_hero.webp",
    },
    {
      title: "Project3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus blanditiis nulla suscipit atque veritatis quas, illo minima ut aperiam delectus exercitationem cumque rerum quasi sint reiciendis alias est rem.",
      imageUrl: "/images/banner_hero.webp",
    },
  ]);

  const renderWorksList = () => {
    return worksList.map((work, index) => {
      return (
        <div key={index}>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-5xl mb-2">{work.title}</h2>
            <p className="text-xl">{work.content}</p>
          </div>
          <div className="flex items-center">
            <Image
              width={500}
              height={500}
              src={`${work.imageUrl}`}
              alt="exampleImage"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
      <div className="pt-52 px-4 lg:pt-0 lg:px-0 w-full relative flex flex-col">
        {renderWorksList()}
      </div>
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
    </section>
  );
};

export default Work;
