import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Fragment } from "react/jsx-runtime";
import useMobile from "../../../hooks/useMobile";
import { NavItem } from "../../../types/navbar";
import { navItems } from "../../../utils/navbar/constants";
import { tw } from "../../../utils/tw";
import NavLink from "./NavLink";

const MobileNav: React.FC = () => {
  const [nav, setNav] = useState(false);
  // eslint-disable-next-line no-empty-pattern
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleNav = () => setNav((prev) => !prev);

  const toggleSubItems = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isMobile = useMobile();

  if (!isMobile) return null;

  return (
    <Fragment>
      {!nav && (
        <div onClick={handleNav} className="block mr-8 md:hidden">
          <AiOutlineMenu size={26} color="#333" className="font-bold" />
        </div>
      )}

      <ul
        className={
          nav
            ? "z-20 fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-300 bg-light ease-in-out duration-500"
            : "ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        {nav && (
          <div onClick={handleNav} className="absolute top-4 right-4">
            <AiOutlineClose size={26} color="#333" className="font-bold" />
          </div>
        )}
        <div className="w-full flex justify-center md:hidden">
          <img className="h-28 w-28" src="/logo-transparent.svg" />
        </div>

        {navItems.map((item) => (
          <li key={item.id} className="w-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
              <NavLink
                href={item.id}
                text={item.text}
                className="text-primary cursor-pointer duration-300"
                onClick={handleNav}
              />
              {item.subItems && item.subItems.length > 0 && (
                <BiChevronDown
                  onClick={() => toggleSubItems(item.id)}
                  className="ml-2 text-xl cursor-pointer text-black"
                />
              )}
            </div>
            {item.subItems &&
              item.subItems.length > 0 &&
              openItems[item.id] && (
                <ul className="pl-8 pr-4 pb-2">
                  {item.subItems.map((subItem: NavItem) => (
                    <li key={subItem.id} className="py-2">
                      <NavLink
                        href={subItem.id}
                        text={subItem.text}
                        className="text-primary cursor-pointer duration-300"
                        onClick={handleNav}
                      />
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>

      <div
        className={tw(
          "fixed top-0 left-0 w-full h-full bg-black duration-300 z-10",
          nav
            ? "bg-opacity-50 pointer-events-auto"
            : "bg-opacity-0 pointer-events-none"
        )}
        onClick={handleNav}
      ></div>
    </Fragment>
  );
};

export default MobileNav;
