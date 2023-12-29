import { WheelEvent } from "react";

export type ScrollData = {
  section: string;
  slider: number;
};

// export const isTrackPadScroll = (eventCount: number) => {
//   let eventCountStart = 0;
//   if (eventCount === 0) {
//     eventCountStart = performance.now();
//   }

//   eventCount++;

//   if (performance.now() - eventCountStart > 66) {
//     if (eventCount > 5) {
//       // isTrackPad = true;
//       // updateText("Using trackpad");
//       return true;
//     } else {
//       // isTrackPad = false;
//       // updateText("Using mouse");
//       return false;
//     }
//     // isTrackPadDefined = true;
//   }
// };

export const isFirstSilder = (hash: string, section: string) => {
  const hashParts = hash.split("/");

  if (
    (hash.indexOf(`#${section}/1`) !== -1 ||
      hash.indexOf(`#${section}`) !== -1) &&
    (hashParts[1] === "1" || hashParts[1] === undefined)
  ) {
    return true;
  }
  return false;
};

export const isLastSilder = (hash: string, section: string) => {
  const hashParts = hash.split("/");
  const sectionEl = document.getElementById(section.toLowerCase());
  const sliders = sectionEl?.getElementsByTagName("li");

  if (
    sliders &&
    hash.indexOf(`#${section}/${sliders.length}`) !== -1 &&
    hashParts[1] === sliders.length.toString()
  ) {
    // console.log(
    //   `#${section}/${sliders.length}`,
    //   hashParts[1] === sliders.length.toString()
    // );
    return true;
  }
  return false;
};

export const detectActiveSection = (sections: HTMLElement[]) => {
  let currentSectionAnchor = null;

  for (let i = 0; i < sections.length; i++) {
    let rect = sections[i].getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentSectionAnchor = sections[i].dataset.anchor;
    }
  }

  return currentSectionAnchor;
};

export const isActiveSectionTop = (sections: HTMLElement[]) => {
  for (let i = 0; i < sections.length; i++) {
    let rect = sections[i].getBoundingClientRect();
    if (rect.top <= 0) {
      return true;
    }
  }

  return false;
};

export const isActiveSectionBottom = (sections: HTMLElement[]) => {
  for (let i = 0; i < sections.length; i++) {
    let rect = sections[i].getBoundingClientRect();
    if (rect.bottom >= 0) {
      return true;
    }
  }

  return false;
};

export const detectActiveSlider = (sliders: HTMLLIElement[]) => {
  let currentSectionSlide = null;

  for (let i = 0; i < sliders.length; i++) {
    var rect = sliders[i].getBoundingClientRect();

    // console.log(rect.top, rect.left);
    if (rect.top <= 1 && rect.left <= 10) {
      currentSectionSlide = sliders[i].dataset.slide;
    }
  }
  // console.log(currentSectionSlide);

  // 更新URL中的hash
  if (currentSectionSlide) {
    return currentSectionSlide;
  }
};
