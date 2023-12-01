import Marker from "@/components/Marker";

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
  isShowMenuBtn: boolean;
};

const MenuList = ({ isShowMenuBtn }: MenuListProps) => {
  const moveToSection = (e: any, section: string) => {
    e.preventDefault();
    (window as any).fullpage_api.moveTo(section);
  };

  return (
    <ul
      className={`flex flex-col ${
        isShowMenuBtn
          ? "lg:flex-col lg:items-start absolute top-10 right-10 bg-gray-100 pb-8 pt-24 pl-4 pr-24 shadow"
          : "lg:flex-row lg:py-0 lg:items-center"
      } items-start py-8`}
    >
      {NavData.map((nav, index) => {
        return (
          <li key={index} className="my-2">
            <a onClick={(e) => moveToSection(e, nav.href)}>
              <Marker>{nav.title}</Marker>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
