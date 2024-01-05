import type { ScrollData } from "@/util/scroll";

export type ComponentProps = {
  isWideScreen: boolean;
  sectionRefs: (el: HTMLElement) => HTMLElement;
  sliderRefs: React.MutableRefObject<HTMLLIElement[]>;
  slidersScrollRef: React.RefObject<HTMLDivElement>;
  scrollData: ScrollData;
  goSliderScroll: (index: number) => void;
};

export type Component = (props: ComponentProps) => JSX.Element;
