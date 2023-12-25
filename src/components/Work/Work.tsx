"use client";
import Image from "next/image";
import { useState, Fragment, useEffect, useRef } from "react";
import WorkImage from "@/components/Work/WorkImage";

type ElementType = "sushi" | "drink" | "cactus";

type Work = {
  title: string;
  content: string;
  imageUrl: string;
  imagePosition: string;
  elementType: ElementType;
};

const Work = ({ isWideScreen }: { isWideScreen: boolean }) => {
  const slidersScrollRef = useRef<any>();
  const slidersRef = useRef<any>();
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

  const renderWorkElement = (type: ElementType) => {
    switch (type) {
      case "sushi":
        return (
          <Fragment>
            <Image
              width={100}
              height={100}
              className="absolute top-12 lg:left-0 xl:left-20"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={70}
              height={70}
              className="absolute -top-0 lg:right-6 xl:right-24"
              src="images/element/e-9.svg"
              alt="e-9"
            />
            <Image
              width={200}
              height={200}
              className="absolute -bottom-0 right-0 xl:right-16"
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
              className="absolute -bottom-8 left-0 xl:left-12"
              src="images/element/e-23.svg"
              alt="e-23"
            />
            <Image
              width={60}
              height={60}
              className="absolute -top-10 lg:-left-8 xl:left-12 rotate-90"
              src="images/element/e-17.svg"
              alt="e-17"
            />
            <Image
              width={30}
              height={30}
              className="absolute bottom-10 lg:right-6 xl:right-36 rotate-45"
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
              className="absolute -top-12 lg:-left-8 xl:left-0 -rotate-12"
              src="images/element/e-6.svg"
              alt="e-6"
            />
            <Image
              width={30}
              height={30}
              className="absolute -top-0 lg:left-0 xl:left-12"
              src="images/element/e-5.svg"
              alt="e-5"
            />
            <Image
              width={100}
              height={100}
              className="absolute bottom-6 right-4 lg:right-6 xl:right-36 2xl:right-48"
              src="images/element/e-21.svg"
              alt="e-21"
            />
            <Image
              width={40}
              height={40}
              className="absolute bottom-24 lg:-right-6 xl:right-16 rotate-12"
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
          key={index}
          className="container h-screen mx-auto flex justify-center items-center"
        >
          <div className="px-4 lg:pt-0 lg:px-8 xl:px-0 w-full relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center items-start">
              <h2 className="text-4xl lg:text-5xl mb-2">{work.title}</h2>
              <p className="text-xl">{work.content}</p>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center items-center relative px-0 lg:px-0">
              <WorkImage
                imageUrl={work.imageUrl}
                imagePosition={work.imagePosition}
              />
              {renderWorkElement(work.elementType)}
            </div>
          </div>
        </div>
      );
    });
  };

  const detectActiveSection = (sliders: HTMLCollectionOf<HTMLElement>) => {
    let currentSectionSlide = null;

    for (let i = 0; i < sliders.length; i++) {
      var rect = sliders[i].getBoundingClientRect();

      if (rect.top === 0 && rect.left === 0) {
        currentSectionSlide = sliders[i].dataset.slide;
      }
    }
    // console.log(currentSectionSlide);
    // 更新URL中的hash
    if (currentSectionSlide) {
      window.location.hash = `#Work/${currentSectionSlide}`;
    }
  };

  useEffect(() => {
    const sliders = slidersRef.current.getElementsByTagName("li");
    const slider = slidersScrollRef.current;
    let lastScrollTop = slider.scrollTop;

    const handleScroll = (e: any) => {
      const scrollTopPosition = slider.scrollTop;

      if (scrollTopPosition > lastScrollTop) {
        console.log("scrolling down");
      } else if (scrollTopPosition < lastScrollTop) {
        console.log("scrolling up");
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
      detectActiveSection(sliders);
    };

    const handlewheelScroll = (event: any) => {
      event.preventDefault();
      const delta = event.deltaY;

      if (window.location.hash.indexOf("Work") !== -1) {
        slider.scrollBy({
          top: delta,
          behavior: "smooth",
        });
      }
    };
    slider.addEventListener("scroll", handleScroll, {
      passive: false,
    });
    slider.addEventListener("wheel", handlewheelScroll, { passive: false });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      data-anchor="Work"
      className="section relative overflow-hidden h-screen"
    >
      <div ref={slidersScrollRef} className="container-m disabled-scrollbar">
        <ul ref={slidersRef} className="wrapper-m">
          {Array.from(Array(4).keys()).map((n) => (
            <li
              key={n}
              data-slide={n + 1}
              className="slide-m flex items-center justify-center"
            >
              {n + 1}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
