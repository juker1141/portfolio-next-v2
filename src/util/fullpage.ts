export type Trigger =
  | "wheel"
  | "keydown"
  | "menu"
  | "slideArrow"
  | "verticalNav"
  | "horizontalNav";

export const fullpageAnchors = [
  "Home",
  "About",
  "Experience",
  "Work",
  "Contact",
  "Footer",
];

export function getSlideDirection(direction: string, slideIndex: number) {
  if (direction === "down" && slideIndex < 4) {
    return "moveSlideRight";
  } else if (direction === "up" && slideIndex > 1) {
    return "moveSlideLeft";
  } else if (direction === "down") {
    return "moveSectionDown";
  } else if (direction === "up") {
    return "moveSectionUp";
  }
  return "";
}
