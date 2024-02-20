"use client";
import Script from "next/script";
import { Fragment, useState, useRef, useEffect, useCallback } from "react";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// 偵測使用者的環境
import device from "current-device";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

import ReactFullpage from "@fullpage/react-fullpage";
import type { Item } from "@fullpage/react-fullpage";

import { gsap } from "gsap";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import GoTopBtn from "@/components/GoTopBtn";

import { fullpageAnchors, getSlideDirection, Trigger } from "@/util/fullpage";

export type FullpageApi = Object;
type Component = ({
  fullpageApi,
  experienceStage,
}: {
  fullpageApi: any;
  experienceStage?: number;
}) => JSX.Element;

export default function Home() {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const workSlideIndex = useRef(0);
  const experienceStage = useRef(0);

  const ready = useRef(false);
  const isFirstTimeOnLeaved = useRef(false);
  const isDesktop = useRef(false);
  const isTriggerAnimate = useRef(false);
  const animationTimeout = useRef<NodeJS.Timeout>();
  const transitionTimeout = useRef<NodeJS.Timeout>();

  const fullpages = useRef<Component[]>([
    Banner,
    About,
    Experience,
    Work,
    Contact,
  ]);

  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isDesktop.current = device.desktop();
    }

    addEventListener(
      "load",
      function () {
        window.scrollTo(1, 0);
      },
      false
    );
  }, []);

  const animateIn = useCallback(
    ({
      currentIndex,
      direction,
    }: {
      currentIndex: number;
      direction: string;
    }) => {
      const target: Item = (window as any).fullpage_api.getActiveSection();
      const targetItem = target.item;

      if (target.anchor === "Home") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading")?.children;
        const description = targetItem.querySelector(".description");
        const images = targetItem.querySelector(".images")?.children;

        if (heading) {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
        }
        gsap.to(description, {
          autoAlpha: 1,
          delay: 0.5,
          x: 0,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
        }

        if (images) {
          const tl = gsap.timeline({
            ease: "power1.inOut",
          });
          tl.to(images, {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          })
            .to(images, {
              y: -20,
              duration: 0.3,
            })
            .to(images, {
              y: 0,
              x: 0,
              delay: 0.3,
              duration: 0.2,
            });
        }
      }

      if (target.anchor === "About") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const description = targetItem.querySelector(".description");
        const content = targetItem.querySelector(".content");
        const images = targetItem.querySelector(".images");
        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
        });
        gsap.to(description, {
          autoAlpha: 1,
          delay: 0.5,
          x: 0,
          duration: 0.3,
        });
        gsap.to(content, {
          autoAlpha: 1,
          delay: 0.7,
          x: 0,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
        }
        gsap.to(images, {
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.3,
        });
      }

      if (target.anchor === "Experience") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const content1 = targetItem.querySelector(".content1");
        const content2 = targetItem.querySelector(".content2");
        const images = targetItem.querySelector(".images");
        console.log(experienceStage.current, direction);
        if (experienceStage.current === 0 && direction === "down") {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });

          gsap.to(content1, {
            autoAlpha: 1,
            delay: 0.5,
            x: 0,
            duration: 0.3,
          });

          if (layout) {
            gsap.to(layout, {
              stagger: 0.15,
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
            });
          }
          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            x: 100,
            duration: 0.5,
          }).to(images, {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
          });
        } else if (experienceStage.current === 0 && direction === "up") {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
          gsap.to(content1, {
            autoAlpha: 1,
            delay: 0.5,
            x: 0,
            duration: 0.3,
          });

          if (layout) {
            gsap.to(layout, {
              stagger: 0.15,
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
            });
          }
          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            x: 100,
            duration: 0.5,
          }).to(images, {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
          });
        } else if (experienceStage.current === 1 && direction === "up") {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
          gsap.to(content2, {
            delay: 0.5,
            autoAlpha: 1,
            x: 0,
            duration: 0.3,
          });
          if (layout) {
            gsap.to(layout, {
              stagger: 0.15,
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
            });
          }
          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            x: 100,
            duration: 0.5,
          }).to(images, {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
          });
        } else if (experienceStage.current === 1 && direction === "down") {
          gsap.to(content2, {
            delay: 0.5,
            autoAlpha: 1,
            x: 0,
            duration: 0.3,
          });
        }
      }

      if (target.anchor === "Work") {
        const target: Item = (window as any).fullpage_api.getActiveSlide();
        const targetItem = target.item;

        if (target.anchor === "1") {
          const layout = targetItem.querySelector(".layout")?.children;
          const heading = targetItem.querySelector(".heading");
          const content = targetItem.querySelector(".content");
          const images = targetItem.querySelector(".images");
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
          gsap.to(content, {
            autoAlpha: 1,
            delay: 0.5,
            x: 0,
            duration: 0.3,
          });
          if (layout) {
            gsap.to(layout, {
              stagger: 0.15,
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
            });
          }
          const tl = gsap.timeline({ ease: "power3.inOut" });
          tl.to(images, {
            autoAlpha: 1,
            x: 200,
            duration: 0.4,
          }).to(images, {
            delay: 0.2,
            x: 0,
            duration: 0.2,
          });
        } else {
          const layout = targetItem.querySelector(".layout")?.children;
          const heading = targetItem.querySelector(".heading");
          const description = targetItem.querySelector(".description");
          const images = targetItem.querySelector(".images")?.children;

          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
          gsap.to(description, {
            autoAlpha: 1,
            delay: 0.5,
            x: 0,
            duration: 0.3,
          });
          if (layout) {
            gsap.to(layout, {
              stagger: 0.15,
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
            });
          }
          if (images) {
            gsap.to(images, {
              autoAlpha: 1,
              x: 0,
              stagger: 0.1,
              duration: 0.3,
            });
          }
        }
      }

      if (target.anchor === "Contact") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const content = targetItem.querySelector(".content");
        const images = targetItem.querySelector(".images");
        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
        });
        gsap.to(content, {
          autoAlpha: 1,
          delay: 0.3,
          x: 0,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          });
        }
        const tl = gsap.timeline({ ease: "power1.inOut" });
        tl.to(images, {
          autoAlpha: 1,
          x: 100,
          duration: 0.5,
        }).to(images, {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
        });
      }

      isTriggerAnimate.current = false;
    },
    [experienceStage.current]
  );

  const animateOut = useCallback(
    ({
      currentIndex,
      direction,
      trigger,
    }: {
      currentIndex: number;
      direction: string;
      trigger: string;
    }) => {
      const target: Item = (window as any).fullpage_api.getActiveSection();
      const targetItem = target.item;

      if (target.anchor === "Home") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading")?.children;
        const description = targetItem.querySelector(".description");
        const images = targetItem.querySelector(".images")?.children;
        if (heading) {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 0,
            x: -30,
            duration: 0.5,
          });
        }
        gsap.to(description, {
          autoAlpha: 0,
          delay: 0.5,
          x: -30,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            autoAlpha: 0,
            stagger: 0.1,
            delay: 0.1,
            x: -30,
            duration: 0.3,
          });
        }
        if (images) {
          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            // autoAlpha: 0,
            // stagger: 0.1,
            // delay: 0.3,
            x: -100,
            // rotate: 30,
            duration: 0.5,
          }).to(images, {
            autoAlpha: 0,
            // stagger: 0.1,
            delay: 0.2,
            x: "100vw",
            duration: 1,
          });
        }
      }

      if (target.anchor === "About") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const description = targetItem.querySelector(".description");
        const content = targetItem.querySelector(".content");
        const images = targetItem.querySelector(".images");

        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 0,
          x: -30,
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(description, {
          autoAlpha: 0,
          delay: 0.3,
          x: -30,
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(content, {
          autoAlpha: 0,
          delay: 0.5,
          x: -30,
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(images, {
          autoAlpha: 0,
          stagger: 0.1,
          delay: 0.1,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            autoAlpha: 0,
            stagger: 0.1,
            delay: 0.1,
            x: -30,
            duration: 0.3,
          });
        }
      }
      if (target.anchor === "Experience") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const content1 = targetItem.querySelector(".content1");
        const content2 = targetItem.querySelector(".content2");
        const images = targetItem.querySelector(".images");

        if (trigger !== null && trigger !== "wheel") {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 0,
            x: -30,
            duration: 0.5,
          });

          gsap.to([content1, content2], {
            autoAlpha: 0,
            delay: 0.5,
            x: -30,
            duration: 0.3,
          });
          if (layout) {
            gsap.to(layout, {
              autoAlpha: 0,
              stagger: 0.1,
              delay: 0.1,
              x: -30,
              duration: 0.3,
            });
          }

          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            x: -100,
            delay: 0.1,
            duration: 0.4,
          })
            .to(images, {
              x: "100vw",
              delay: 0.3,
              duration: 0.5,
            })
            .to(images, {
              x: "-100vw",
              delay: 0.5,
              duration: 0,
            });
        }

        if (experienceStage.current === 0 && direction === "down") {
          gsap.to(content1, {
            autoAlpha: 0,
            delay: 0.5,
            x: -30,
            duration: 0.3,
          });
        } else if (experienceStage.current === 1 && direction === "up") {
          gsap.to(content2, {
            autoAlpha: 0,
            delay: 0.5,
            x: -30,
            duration: 0.3,
          });
        } else {
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 0,
            x: -30,
            duration: 0.5,
          });

          gsap.to([content1, content2], {
            autoAlpha: 0,
            delay: 0.5,
            x: -30,
            duration: 0.3,
          });
          if (layout) {
            gsap.to(layout, {
              autoAlpha: 0,
              stagger: 0.1,
              delay: 0.1,
              x: -30,
              duration: 0.3,
            });
          }

          const tl = gsap.timeline({ ease: "power1.inOut" });
          tl.to(images, {
            x: -100,
            delay: 0.1,
            duration: 0.4,
          })
            .to(images, {
              x: "100vw",
              delay: 0.3,
              duration: 0.5,
            })
            .to(images, {
              x: "-100vw",
              delay: 0.5,
              duration: 0,
            });
        }
      }

      if (target.anchor === "Work") {
        const target: Item = (window as any).fullpage_api.getActiveSlide();
        const targetItem = target.item;

        if (target.anchor === "1") {
          const layout = targetItem.querySelector(".layout")?.children;
          const heading = targetItem.querySelector(".heading");
          const content = targetItem.querySelector(".content");
          const images = targetItem.querySelector(".images");
          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 0,
            x: -30,
            duration: 0.5,
            ease: "power1.inOut",
          });
          gsap.to(content, {
            autoAlpha: 0,
            delay: 0.5,
            x: -30,
            duration: 0.3,
            ease: "power1.inOut",
          });

          if (layout) {
            gsap.to(layout, {
              autoAlpha: 0,
              stagger: 0.1,
              delay: 0.1,
              duration: 0.3,
            });
          }

          const tl = gsap.timeline({ ease: "power3.inOut" });
          tl.to(images, {
            x: "-50",
            duration: 0.2,
          })
            .to(images, {
              x: "200",
              duration: 0.2,
            })
            .to(images, {
              autoAlpha: 0,
              x: "-30vw",
              delay: 0.3,
              duration: 0.2,
            });
        } else {
          const layout = targetItem.querySelector(".layout")?.children;
          const heading = targetItem.querySelector(".heading");
          const description = targetItem.querySelector(".description");
          const images = targetItem.querySelector(".images")?.children;

          gsap.to(heading, {
            stagger: 0.15,
            autoAlpha: 0,
            x: -30,
            duration: 0.5,
            ease: "power1.inOut",
          });
          gsap.to(description, {
            autoAlpha: 0,
            delay: 0.3,
            x: -30,
            duration: 0.3,
            ease: "power1.inOut",
          });
          if (layout) {
            gsap.to(layout, {
              autoAlpha: 0,
              stagger: 0.1,
              delay: 0.1,
              x: -30,
              duration: 0.3,
            });
          }
          if (images) {
            gsap.to(images, {
              autoAlpha: 0,
              stagger: 0.1,
              delay: 0.1,
              x: -30,
              duration: 0.3,
            });
          }
        }
      }

      if (target.anchor === "Contact") {
        const layout = targetItem.querySelector(".layout")?.children;
        const heading = targetItem.querySelector(".heading");
        const content = targetItem.querySelector(".content");
        const images = targetItem.querySelector(".images");
        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 0,
          x: -30,
          duration: 0.5,
        });
        gsap.to(content, {
          autoAlpha: 0,
          delay: 0.3,
          x: -30,
          duration: 0.3,
        });
        if (layout) {
          gsap.to(layout, {
            autoAlpha: 0,
            stagger: 0.1,
            delay: 0.1,
            x: -30,
            duration: 0.3,
          });
        }

        const tl = gsap.timeline({ ease: "power3.inOut" });
        tl.to(images, {
          x: 100,
          delay: 0.1,
          duration: 0.4,
        }).to(images, {
          x: "-100vw",
          autoAlpha: 0,
          delay: 0.3,
          duration: 0.5,
        });
      }
    },
    [experienceStage.current]
  );

  const [isFirstRendered, setIsFirstRendered] = useState(false);

  const headerAnimateIn = () => {
    const logoEl = document.querySelector("#logoEl")?.children;
    const menuBtnEl = document.querySelector("#menuBtnEl")?.children;

    if (!isFirstRendered) {
      setIsFirstRendered(true);

      if (logoEl && menuBtnEl) {
        const logoTl = gsap.timeline({ ease: "power3.inOut" });
        logoTl
          .to(logoEl, {
            y: -30,
            autoAlpha: 1,
            rotate: -15,
            duration: 0.3,
          })
          .to(logoEl, {
            y: 10,
            rotate: 10,
            duration: 0.1,
          })
          .to(logoEl, {
            y: -5,
            rotate: -5,
            duration: 0.4,
          })
          .to(logoEl, {
            y: 3,
            rotate: 3,
            duration: 0.1,
          })
          .to(logoEl, {
            rotate: 0,
            duration: 0.2,
          });

        const menuTl = gsap.timeline({ ease: "power3.inOut" });
        menuTl
          .to(menuBtnEl, {
            y: -30,
            autoAlpha: 1,
            rotate: 10,
            duration: 0.3,
          })
          .to(menuBtnEl, {
            y: 10,
            rotate: -5,
            duration: 0.1,
          })
          .to(menuBtnEl, {
            y: -5,
            rotate: 5,
            duration: 0.4,
          })
          .to(menuBtnEl, {
            y: 3,
            rotate: -2,
            duration: 0.1,
          })
          .to(menuBtnEl, {
            rotate: 0,
            duration: 0.2,
          });
      }
    }
  };

  function afterLoad(origin: Item, destination: Item, direction: string) {
    headerAnimateIn();
    animateIn({ currentIndex: destination.index, direction });
  }

  function afterSlideLoad(
    section: Item,
    origin: Item,
    destination: Item,
    direction: string,
    trigger: Trigger
  ) {
    workSlideIndex.current = destination.index + 1;
    animateIn({ currentIndex: destination.index, direction });
  }

  function animateMenu({ trigger }: { trigger: string }) {
    const menuBtnEl = document.querySelector("#menuBtnEl")?.children;

    if (trigger === "menu") {
      return;
    }
    if (menuBtnEl && !isShowMenu) {
      console.log("trigger");
      const tl = gsap.timeline({ ease: "bounce.inOut" });
      tl.to(menuBtnEl, {
        duration: 0.2,
        y: 30,
      }).to(menuBtnEl, {
        duration: 0.2,
        y: 0,
      });
    }
  }

  const onLeave = useCallback(
    (origin: Item, destination: Item, direction: string, trigger: Trigger) => {
      if (ready.current) return;
      if (isTriggerAnimate.current) return false;
      isTriggerAnimate.current = true;
      clearTimeout(animationTimeout.current);
      clearTimeout(transitionTimeout.current);

      animateMenu({ trigger });

      animateOut({ currentIndex: origin.index, direction, trigger });

      animationTimeout.current = setTimeout(() => {
        ready.current = true;
        transitionTimeout.current = setTimeout(() => {
          ready.current = false;
        }, 300);
        // Navigation Click or Menu Click or reload Page Case

        if (!isFirstTimeOnLeaved.current && trigger === null) {
          isFirstTimeOnLeaved.current = true;

          (window as any).fullpage_api.moveTo(destination.anchor);
          return false;
        }
        if (
          trigger === "verticalNav" ||
          trigger === "menu" ||
          (isDesktop.current && trigger === null)
        ) {
          (window as any).fullpage_api.moveTo(destination.anchor);
          return false;
        }

        // goTop Case
        if (destination.index === 0) {
          (window as any).fullpage_api.moveTo("Home");
          return false;
        }

        // Experience section
        if (origin.anchor === "Experience") {
          if (experienceStage.current === 0 && direction === "down") {
            (window as any).fullpage_api.setAllowScrolling(false, "down");
            // console.log("trigger1");
            experienceStage.current = 1;

            setTimeout(() => {
              animateIn({ currentIndex: origin.index, direction });
              (window as any).fullpage_api.setAllowScrolling(true, "down");
            }, 500);
            return false;
          } else if (experienceStage.current === 1 && direction === "up") {
            (window as any).fullpage_api.setAllowScrolling(false, "up");
            // console.log("trigger2");
            experienceStage.current = 0;

            setTimeout(() => {
              animateIn({ currentIndex: origin.index, direction });
              (window as any).fullpage_api.setAllowScrolling(true, "up");
            }, 500);
            return false;
          } else if (experienceStage.current === 1 && direction === "down") {
            // console.log("trigger3");
            (window as any).fullpage_api.moveSectionDown();
            return false;
          } else if (experienceStage.current === 0 && direction === "up") {
            // console.log("trigger4");
            (window as any).fullpage_api.moveSectionUp();
            return false;
          }
        }

        // Work section slide Case
        if (origin.anchor === "Work") {
          const methodKey = getSlideDirection(
            direction,
            workSlideIndex.current
          );
          const method: Function = (window as any).fullpage_api[methodKey];
          if (method) method();
          return false;
        }

        // normal Case
        if (direction === "down") {
          (window as any).fullpage_api.moveSectionDown();
          return false;
        } else if (direction === "up") {
          (window as any).fullpage_api.moveSectionUp();
          return false;
        }
      }, 300);

      return ready.current;
    },
    [experienceStage.current]
  );

  return (
    <Fragment>
      <Script src="https://kit.fontawesome.com/d973d1ccea.js" />
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
        container={{
          element: "reCaptchaEl",
          parameters: {
            badge: "bottomleft",
          },
        }}
      >
        <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
        <ReactFullpage
          anchors={fullpageAnchors}
          menu="#nav-menu"
          licenseKey={"gplv3-license"}
          navigation
          navigationPosition="right"
          scrollOverflow={false}
          scrollBar={false}
          scrollingSpeed={1200}
          credits={{
            enabled: true,
            label: "",
            position: "right",
          }}
          // fixedElements={"#header"}
          // touchSensitivity={0.1}
          scrollOverflowMacStyle={true}
          afterLoad={afterLoad}
          afterSlideLoad={afterSlideLoad}
          onLeave={onLeave}
          controlArrows={false}
          loopHorizontal={false}
          slidesNavigation={true}
          slidesNavPosition={"bottom"}
          render={(comp: any) => (
            <ReactFullpage.Wrapper>
              {fullpages.current.map((Component, index) => (
                <Component key={index} fullpageApi={comp.fullpageApi} />
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
        <GoTopBtn />
      </GoogleReCaptchaProvider>
    </Fragment>
  );
}
