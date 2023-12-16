"use client";

import { useEffect } from "react";

import Marker from "@/components/Marker";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavData = [
  {
    title: "About",
    href: "About",
  },
  {
    title: "Experience",
    href: "Experience",
  },
  {
    title: "Works",
    href: "Work",
  },
  {
    title: "Contact",
    href: "Contact",
  },
];

type MenuListProps = {
  isShowMenuBtn: boolean;
  isWideScreen: boolean;
  setIsShowMenu: Function;
};

const MenuList = ({
  isShowMenuBtn,
  isWideScreen,
  setIsShowMenu,
}: MenuListProps) => {
  useEffect(() => {});

  const moveToSection = (e: any, section: string) => {
    e.preventDefault();

    (window as any).fullpage_api.moveTo(section);
    setIsShowMenu(false);
  };

  return (
    <ul
      className={`flex flex-col ${
        isShowMenuBtn
          ? "lg:flex-col lg:items-start lg:absolute -top-10 -right-5 lg:bg-gray-100 lg:pb-8 lg:pt-24 lg:pl-4 lg:pr-24 lg:shadow"
          : "lg:flex-row lg:py-0 lg:items-center"
      } items-start py-8`}
    >
      {NavData.map((nav, index) => {
        return (
          <li key={index} className="my-2">
            <a onClick={(e) => moveToSection(e, nav.href)}>
              <Marker type="text">
                <span className="px-4 py-2">{nav.title}</span>
              </Marker>
            </a>
          </li>
        );
      })}
      <li
        className={`mb-2 pt-6 ${
          isShowMenuBtn ? "lg:block text-primary" : "lg:hidden"
        }`}
      >
        <ul className="flex justify-center items-center mb-6 lg:mb-0 px-0 lg:px-2">
          <li className="mr-2">
            <a
              href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center px-3 relative"
            >
              <Marker type="icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color={!isWideScreen ? "white" : isShowMenuBtn ? "" : ""}
                  size="2xs"
                />
              </Marker>
            </a>
          </li>
          <li className="mr-2">
            <a
              href="https://github.com/juker1141"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center px-3 relative"
            >
              <Marker type="icon">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  color={!isWideScreen ? "white" : isShowMenuBtn ? "" : ""}
                  size="2xs"
                />
              </Marker>
            </a>
          </li>
          <li>
            <a
              href="mailto:juker1141@gmail.com"
              className="flex items-center px-3 relative"
            >
              <Marker type="icon">
                <FontAwesomeIcon
                  icon={faEnvelopeSquare}
                  color={!isWideScreen ? "white" : isShowMenuBtn ? "" : ""}
                  size="2xs"
                />
              </Marker>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MenuList;
