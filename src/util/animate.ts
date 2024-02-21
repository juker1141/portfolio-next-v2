import type { Item } from "@fullpage/react-fullpage";
import { gsap } from "gsap";

export const headerAnimateIn = (
  isFirstRendered: boolean,
  setIsFirstRendered: React.Dispatch<React.SetStateAction<boolean>>
) => {
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

export const animateMenu = ({
  isShowMenu,
  trigger,
}: {
  isShowMenu: boolean;
  trigger: string;
}) => {
  const menuBtnEl = document.querySelector("#menuBtnEl")?.children;

  // 如果是menu 點擊觸發，就不需要觸發常規動畫
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
};

export const pageAnimateIn = ({
  currentIndex,
  direction,
  isTriggerAnimate,
  experienceStage,
}: {
  currentIndex: number;
  direction: string;
  isTriggerAnimate: React.MutableRefObject<boolean>;
  experienceStage: number;
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

    if (experienceStage === 0 && direction === "down") {
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
    } else if (experienceStage === 0 && direction === "up") {
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
    } else if (experienceStage === 1 && direction === "up") {
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
    } else if (experienceStage === 1 && direction === "down") {
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
};

export const pageAnimateOut = ({
  currentIndex,
  direction,
  trigger,
  experienceStage,
}: {
  currentIndex: number;
  direction: string;
  trigger: string;
  experienceStage: number;
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

    if (experienceStage === 0 && direction === "down") {
      gsap.to(content1, {
        autoAlpha: 0,
        delay: 0.5,
        x: -30,
        duration: 0.3,
      });
    } else if (experienceStage === 1 && direction === "up") {
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
};
