"use client";

import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Marker from "@/components/Marker";
import CloseBtn from "@/components/Header/CloseBtn";
import useMountRender from "@/hook/useMountRender";

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
  hideMenuAnimate: any;
  isLargeScreen: boolean;
};

const MenuList = ({ hideMenuAnimate, isLargeScreen }: MenuListProps) => {
  const isMounted = useMountRender();

  return (
    <div
      id="menuEl"
      className="lg:absolute -top-8 -right-5 lg:drop-shadow-images origin-center relative z-40"
    >
      <span className="absolute -top-1/2 left-1/4 w-0.5 h-1/2 bg-primary hidden lg:block"></span>
      <span className="absolute -top-1/2 right-1/4 w-0.5 h-1/2 bg-primary hidden lg:block"></span>
      <div className="fixed lg:absolute top-9 md:top-16 lg:top-12 right-6 md:right-16 lg:right-10 z-40">
        <CloseBtn handleToggleMenu={hideMenuAnimate} />
      </div>
      <div className="lg:border lg:border-primary lg:p-3 lg:bg-white lg:rounded-[20px]">
        <ul
          id="nav-menu"
          className={`flex flex-col lg:flex-col lg:items-start lg:bg-gray-100 lg:pb-8 lg:pt-24 lg:pl-4 lg:pr-24 items-start py-8 relative menu-border`}
        >
          {NavData.map((nav, index) => {
            return (
              <li data-menuanchor={nav.href} key={index} className="my-2">
                <a href={`#${nav.href}`} onClick={hideMenuAnimate}>
                  <Marker type="text">
                    <span className="px-4 py-2">{nav.title}</span>
                  </Marker>
                </a>
              </li>
            );
          })}
          <li className={`mb-2 pt-6 lg:block text-primary`}>
            <ul className="flex justify-center items-center mb-6 lg:mb-0 px-0 lg:px-2">
              <li className="mr-2">
                <a
                  href="https://www.linkedin.com/in/Ryu-Tu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-3 relative"
                >
                  <Marker type="icon">
                    {isMounted && (
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        color={!isLargeScreen ? "white" : ""}
                        size="2xs"
                      />
                    )}
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
                    {isMounted && (
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        color={!isLargeScreen ? "white" : ""}
                        size="2xs"
                      />
                    )}
                  </Marker>
                </a>
              </li>
              <li>
                <a
                  href="mailto:juker1141@gmail.com"
                  className="flex items-center px-3 relative"
                >
                  <Marker type="icon">
                    {isMounted && (
                      <FontAwesomeIcon
                        icon={faEnvelopeSquare}
                        color={!isLargeScreen ? "white" : ""}
                        size="2xs"
                      />
                    )}
                  </Marker>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
