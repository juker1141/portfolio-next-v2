type NavBarPosition = "top" | "bottom" | "left" | "right";

const NavBar = ({
  className,
  position,
  navDatas,
  isActive,
  onClick,
}: {
  className: string;
  position: NavBarPosition;
  navDatas: HTMLElement[];
  isActive: (index: number) => boolean;
  onClick: (index: number) => void;
}) => {
  const renderPosition = (position: NavBarPosition) => {
    switch (position) {
      case "top":
        return "-translate-x-1/2 left-1/2 top-10";
      case "bottom":
        return "-translate-x-1/2 left-1/2 bottom-10";
      case "left":
        return "-translate-y-1/2 top-1/2 left-10";
      case "right":
        return "-translate-y-1/2 top-1/2 right-10";
      default:
        return "-translate-y-1/2 top-1/2 right-10";
    }
  };

  return (
    <ul
      className={`absolute transform z-30 ${renderPosition(
        position
      )} ${className}`}
    >
      {navDatas.map((section, index) => {
        return (
          <li key={index} className="m-3 flex items-center justify-center">
            <button
              onClick={() => onClick(index)}
              type="button"
              aria-label="Navigation Button"
              className={`rounded-full border-primary transition-all ${
                isActive(index)
                  ? "p-1 border-[5px] bg-[#f7be2a]"
                  : "p-0.5 border-4 bg-beige"
              }`}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
