import { NavItem } from "../../types/navbar";
import { ProdcutsCategoryEnum } from "../../types/products";

export const navItems: Array<NavItem> = [
  { id: "/", text: "Home" },
  {
    id: "/products",
    text: "Products",
    subItems: [
      {
        id: `/products/${ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS}`,
        text: "Chamber Blade End Seals"
      },
      {
        id: `/products/${ProdcutsCategoryEnum.DOCTOR_BLADE}`,
        text: "Doctor Blade"
      },
      { id: `/products/${ProdcutsCategoryEnum.DETERGENT}`, text: "Detergent" },
      {
        id: `/products/${ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE}`,
        text: "Plate Mounting Tape"
      },
      {
        id: `/products/${ProdcutsCategoryEnum.SPLICING_TAPE}`,
        text: "Splicing Tape"
      }
    ]
  },
  // { id: "/about_us", text: "About" },
  { id: "/contact", text: "Contact" }
];
