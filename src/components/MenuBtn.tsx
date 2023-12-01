import Image from "next/image";

const MenuBtn = ({
  isShowMenuBtn,
  showMenu,
  isShowMenu,
}: {
  isShowMenuBtn: boolean;
  showMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isShowMenu: boolean;
}) => {
  return (
    <button
      onClick={showMenu}
      className={`flex ${
        isShowMenuBtn ? "lg:flex" : "lg:hidden"
      } flex-col items-center justify-between z-30`}
      type="button"
    >
      <div className=" font-amatic-sc font-bold flex flex-col text-8xl leading-4">
        <span
          className={`origin-center transition-all ease-in-out duration-200 ${
            isShowMenu
              ? "text-white lg:text-secondary rotate-45 translate-y-3.5 translate-x-1"
              : "text-secondary"
          }`}
        >
          —
        </span>
        <span
          className={`${isShowMenu ? "invisible hidden" : "visible block"}`}
        >
          —
        </span>
        <span
          className={`origin-center transition-all ease-in-out duration-200 ${
            isShowMenu
              ? "text-white lg:text-secondary -rotate-45 -translate-y-1"
              : "text-secondary"
          }`}
        >
          —
        </span>
      </div>
      {/* <Image
        className={`${
          isShowMenu ? "border-white rotate-45 translate-y-1" : "border-white"
        }`}
        src="/images/menu-1.svg"
        alt="menu-1"
        width={120}
        height={3}
      />
      <Image
        className={`${isShowMenu ? "invisible hidden" : "visible block"}`}
        src="/images/menu-2.svg"
        alt="menu-2"
        width={120}
        height={3}
      />
      <Image src="/images/menu-3.svg" alt="menu-3" width={120} height={3} /> */}
      {/* <span
        className={`border-b w-10 origin-center transition-all ease-in-out duration-200 ${
          isShowMenu
            ? "border-white rotate-45 translate-y-1 border-2"
            : "border-black mb-4"
        }`}
      ></span>
      <span
        className={`border-b border-2 origin-center transition-all ease-in-out duration-200 ${
          isShowMenu ? "border-white -rotate-45 w-10" : "border-black w-7"
        }`}
      ></span> */}
    </button>
  );
};

export default MenuBtn;
