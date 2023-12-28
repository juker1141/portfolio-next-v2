export type ComponentProps = {
  isWideScreen: boolean;
  sectionRefs: (el: HTMLElement) => HTMLElement;
  sliderRefs: React.MutableRefObject<HTMLLIElement[]>;
  slidersScrollRef: React.RefObject<HTMLDivElement>;
};
export type Component = (props: ComponentProps) => JSX.Element;
