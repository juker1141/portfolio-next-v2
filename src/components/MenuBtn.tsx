const MenuBtn = ({
  showMenu,
  isShowMenu,
}: {
  showMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isShowMenu: boolean;
}) => {
  return (
    <button
      onClick={showMenu}
      className="flex lg:hidden flex-col items-end justify-center h-10 w-10"
    >
      <span
        className={`border-b w-10 origin-center transition-all ease-in-out duration-300 ${
          isShowMenu
            ? "border-white rotate-45 translate-y-1 border-2"
            : "border-black mb-4"
        }`}
      ></span>
      <span
        className={`border-b border-2 origin-center transition-all ease-in-out duration-300 ${
          isShowMenu ? "border-white -rotate-45 w-10" : "border-black w-7"
        }`}
      ></span>
    </button>
  );
};

export default MenuBtn;
