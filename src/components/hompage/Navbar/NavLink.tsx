import { cloneElement, Fragment, ReactElement, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMobile from "../../../hooks/useMobile";
import { NavItem } from "../../../types/navbar";
import { tw } from "../../../utils/tw";

type Props = {
  href: string;
  text: string;
  className?: string;
  subItems?: NavItem[];

  onClick?: () => void;
};

const NavLink = ({ href, text, subItems, className, onClick }: Props) => {
  const isMobile = useMobile();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const isActive = location.pathname === href || location.hash === href;
  const haveSubMenu = subItems && subItems.length > 0;

  const handleMouseEnter = () => {
    if (haveSubMenu) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (haveSubMenu) {
      setDropdownOpen(false);
    }
  };

  const commonProps = {
    className: tw(
      className ??
        "relative py-6 px-2 text-[#333] font-semibold rounded-xl cursor-pointer hover:text-black duration-300 group",
      isActive && "text-black",
      haveSubMenu && "px-1"
    ),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: (
      <Fragment>
        <div className="relative flex items-center">
          <span className={tw(isMobile && isActive ? "text-cpink" : "")}>
            {text}
          </span>
          {haveSubMenu && <BiChevronDown className="inline-block ml-1.5" />}

          {haveSubMenu && (
            <div
              className={tw(
                "absolute -left-4 top-10 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300",
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              )}
            >
              {subItems.map((item) => (
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(false);
                  }}
                  key={item.id}
                  to={item.id}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>
        {!isMobile && (
          <span
            style={{
              backgroundImage: isActive
                ? "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
                : ""
            }}
            className={tw(
              "absolute left-0 bottom-0 h-0.5",
              isActive
                ? "w-full"
                : "w-0 bg-cpink group-hover:w-full transition-all duration-300"
            )}
          ></span>
        )}
      </Fragment>
    )
  };

  const element: ReactElement =
    href.startsWith("/") || href.startsWith("#") ? (
      haveSubMenu ? (
        <button
          {...commonProps}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(href);
          }}
        >
          <span>{text}</span>
          <BiChevronDown className="inline-block ml-1.5" />
        </button>
      ) : (
        <Link to={href} />
      )
    ) : (
      <button onClick={onClick} />
    );

  return cloneElement(element, commonProps);
};

export default NavLink;
