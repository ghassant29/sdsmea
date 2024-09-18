import LogoSVG from "../../../assets/logo";
import { navItems } from "../../../utils/navbar/constants";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="md:sticky z-50 md:top-0 md:left-0  flex justify-between px-8 md:px-0 md:justify-center items-center w-full mx-auto text-white bg-white shadow-sm">
      <div className="w-full block md:hidden">
        <img className="h-28 w-28" src="/logo.svg" />
      </div>

      <ul className="hidden md:flex md:items-center md:justify-center gap-8">
        <div>
          <LogoSVG className="h-16 w-fit" clipped />
        </div>
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.id}
              text={item.text}
              subItems={item.subItems}
            />
          ))}
        </div>
      </ul>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
