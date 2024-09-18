import {
  Printer,
  PrinterTypeEnum,
  ProdcutsCategoryEnum,
  Product,
  ProductCategory,
  ProductsCategory,
  ProductTypeEnum
} from "../../types/products";

export const featuredCategories: Array<ProductCategory> = [
  {
    id: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    name: "Chamber Blade End Seals",
    description:
      "Our Chamber Blade End Seals make a decisive contribution to the smooth functioning of the ink chamber With the right application, excellent sealing of the doctor blade chamber, as well as perfect doctoring, is made possible. This reduces downtime and saves time and money. For every ink system, for every chamber type.",
    image: "/products/category/chamber_blade_end_seals.jpg"
  },
  {
    id: ProdcutsCategoryEnum.DOCTOR_BLADE,
    name: "Doctor Blade",
    description:
      "A coordinated doctor blade is a <b>decisive success factor in gravure and flexographic printing</b> With our range of different doctor blades, we can help you achieve the perfect print result",
    image: "/products/category/doctor_blade.jpg"
  },
  {
    id: ProdcutsCategoryEnum.DETERGENT,
    name: "Detergent",
    description:
      "Effective anilox roller Detergent for removing stubborn dirt, ink residue and contamination",
    image: "/products/category/detergent.jpg"
  },
  {
    id: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    name: "Plate Mounting Tape",
    description:
      "As a <b>3M premium partner</b>, we offer you a wide range of plate mounting tapes for flexographic printing. The plate mounting tapes are available in various hardnesses and different adhesive strengths. With our cutting system, we can produce any width you require. Our strength: express deliveries within 48 hours <b>throughout Germany!</b>",
    image: "/products/category/plate_mounting_tape.jpg"
  },
  {
    id: ProdcutsCategoryEnum.SPLICING_TAPE,
    name: "Splicing Tape",
    description:
      "For splicing film and foil webs at process speeds\n\nFor flying reel changes\n\nSplicing leaves no residue\n\nNo cleaning of fiber residues required",
    image: "/products/category/splicing_tape.jpg"
  }
];

export const printers: Array<Printer> = [
  {
    id: PrinterTypeEnum.FLEXOGRAPHY,
    name: "Flexography",
    subTitle:
      "Top quality in flexographic printing – with the right consumables!",
    description:
      "We pursue one goal: <b>to help you achieve the highest possible quality with the best possible efficiency!</b> With our wide range of products, we want to meet your individual requirements and exceed your expectations.",
    image: "/products/printers/flexography.jpeg",
    relatedCategories: [
      ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
      ProdcutsCategoryEnum.DOCTOR_BLADE,
      ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
      ProdcutsCategoryEnum.SPLICING_TAPE,
      ProdcutsCategoryEnum.DETERGENT
    ]
  },
  {
    id: PrinterTypeEnum.ROTOGRAVURE,
    name: "Rotogravure",
    subTitle: "Top quality gravure printing – with the right consumables!",
    description:
      "We pursue one goal: <b>to help you achieve the highest possible quality with the best possible efficiency!</b> With our wide range of products, we want to meet your individual requirements and exceed your expectations.",
    image: "/products/printers/rotogravure.jpeg",
    relatedCategories: [
      ProdcutsCategoryEnum.DOCTOR_BLADE,
      ProdcutsCategoryEnum.DETERGENT,
      ProdcutsCategoryEnum.SPLICING_TAPE
    ]
  }
];

export const duroSealProducts: Product[] = [
  {
    id: "duro_seal_suitable_for_wh_miraflex",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal suitable for W&H (Miraflex)",
    subTitle: "Duro Seal SDS-007",
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure.\n\nThis reduces downtime and saves time and money. For every ink system, for every chamber type.",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/miraflex.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  },
  {
    id: "duro_seal_suitable_for_uto_onyx",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal suitable for UTECO Onyx",
    subTitle: "Duro Seal SDS-486",
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure.\n\nThis reduces downtime and saves time and money. For every ink system, for every chamber type.",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/onyx.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  },
  {
    id: "duro_seal_suitable_for_soma_optima",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal suitable for SOMA Optima",
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure.\n\nThis reduces downtime and saves time and money. For every ink system, for every chamber type.",
    subTitle: "Duro Seal SDS-099",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/optima.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  },
  {
    id: "duro_seal_suitable_for_comexi_f1_f2",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal suitable for Comexi F1/F2",
    description:
      "Duro Seal make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure. This reduces downtime and saves time and money. For every ink system, for every chamber type.",
    subTitle: "Duro Seal SDS-061",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/comexi.png",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  },
  {
    id: "duro_seal_suitable_for_bobst_16s_20six",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal suitable for BOBST 16S and 20SIX",
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure.\n\nThis reduces downtime and saves time and money. For every ink system, for every chamber type..",
    subTitle: "Duro Seal SDS-178",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/bobst.png",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  },
  {
    id: "duro_seal_suitable_for_allstein_hydro",
    parentId: ProductTypeEnum.DURO_SEAL,
    name: "Duro Seal fits ALLSTEIN Hydro",
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor blade chamber. They ensure complete tightness with moderate doctor blade pressure.\n\nThis reduces downtime and saves you time and money. For every ink system, for every chamber type.",
    subTitle: "Duro Seal SDS-070",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/duro_seals/hydro.png",
    relatedKeywords: ["seal", "chamber", "blade", "duro"]
  }
];

export const longLifeSealProducts: Product[] = [
  {
    id: "long_life_seal_suitable_for_allstein_hydro",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal suitable for ALLSTEIN Hydro",
    description:
      "Long Life Seals are the first choice when it comes to durability and maximum speed. Special channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-070",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/hydro.png",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  },
  {
    id: "long_life_seal_suitable_for_uto_onyx",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal suitable for UTECO Onyx",
    description:
      "Long Life seals are the first choice when it comes to durability and maximum speed.\n\nSpecial channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-437",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/onyx.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  },
  {
    id: "long_life_seal_suitable_for_comexi_f1_f2",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal suitable for Comexi F1/F2",
    description:
      "Long Life seals are the first choice when it comes to durability and maximum speed. Special channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-551",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/comexi.png",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  },
  {
    id: "long_life_seal_suitable_for_wh_astra_primaflex",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal SDS-446 suitable for W&H (Astra and Primaflex)",
    description:
      "Long Life Seals are the first choice when it comes to durability and maximum speed.\n\nSpecial channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-446",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/astra_primaflex.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  },
  {
    id: "long_life_seal_suitable_for_wh_miraflex",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal suitable for W&H (Miraflex) among others",
    description:
      "Long Life seals are the first choice when it comes to durability and maximum speed.\n\nSpecial channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-112",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/miraflex.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  },
  {
    id: "long_life_seal_suitable_for_bobst_16s_20six",
    parentId: ProductTypeEnum.LONG_LIFE_SEAL,
    name: "Long Life Seal suitable for BOBST 16S and 20SIX among others",
    description:
      "Long Life Seals are the first choice when it comes to longevity and maximum speed. Special channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    subTitle: "Long Life Seal SDS-1176",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/long_life_seals/bobst.png",
    relatedKeywords: ["seal", "chamber", "blade", "long", "life"]
  }
];

export const rubberSealProducts: Product[] = [
  {
    id: "rubber_seal_suitable_for_bobst_masterflex_hd",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for Bobst Masterflex HD, among others",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system.\n\nSuitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-012",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/masterflex_hd.png",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  },
  {
    id: "rubber_seal_suitable_for_tresu_d3",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for TRESU (D3), among others",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system. Suitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-1130",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/tresu_d3.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  },
  {
    id: "rubber_seal_suitable_for_koenig_bauer_celmacch",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for KOENIG & BAUER / CELMACCH",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system. Suitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-1127",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/koenig_bauer_celmacch.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  },
  {
    id: "rubber_seal_suitable_for_gallus",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for GALLUS",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system. Suitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-566",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/gallus.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  },
  {
    id: "rubber_seal_suitable_for_tresu_d5",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for TRESU (D5), among others",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system. Suitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-1129",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/tresu_d5.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  },
  {
    id: "rubber_seal_suitable_for_tresu_d2",
    parentId: ProductTypeEnum.RUBBER_SEAL,
    name: "Rubber seal suitable for Tresu (D2), among others",
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks.\n\nThe seal absorbs shocks and vibrations and helps to optimize the service life of your production system. Suitable for special paints, varnishes and coatings.",
    subTitle: "Rubber Seal SDS-1128",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/rubber_seals/tresu_d2.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "rubber"]
  }
];

export const coatedSealProducts: Product[] = [
  {
    id: "coated_seal_suitable_for_wh_vistaflex_cl",
    parentId: ProductTypeEnum.COATED_SEAL,
    name: "Coated seal suitable for W&H (Vistaflex CL)",
    description:
      "Coated Seal is the all-rounder for medium-duty use.\n\nThe high-quality foam with excellent memory effect provides a solid seal for the chamber. The additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    subTitle: "Coated Seal SDS-448",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/coated_seals/vistaflex_cl.png",
    relatedKeywords: ["seal", "chamber", "blade", "coated"]
  },
  {
    id: "coated_seal_suitable_for_wh_astra_primaflex",
    parentId: ProductTypeEnum.COATED_SEAL,
    name: "Coated seal suitable for W&H (Astra- and Primaflex)",
    description:
      "Coated Seal is the all-rounder for medium-duty use.\n\nThe high-quality foam with excellent memory effect provides a solid seal for the chamber. The additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    subTitle: "Coated Seal SDS-117",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/coated_seals/astra_primaflex.jpg",
    relatedKeywords: ["seal", "chamber", "blade", "coated"]
  },
  {
    id: "coated_seal_suitable_for_wh_novoflex_ii",
    parentId: ProductTypeEnum.COATED_SEAL,
    name: "Coated Seal suitable for W&H (Novoflex II)",
    description:
      "Coated Seal is the all-rounder for medium-duty use.\n\nThe high-quality foam with excellent memory effect provides a solid seal for the chamber. The additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    subTitle: "Coated Seal SDS-120",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/coated_seals/novoflex_ii.jpg"
  },
  {
    id: "coated_seal_suitable_for_wh_miraflex_vistaflex",
    parentId: ProductTypeEnum.COATED_SEAL,
    name: "Coated seal suitable for W&H (Miraflex and Vistaflex)",
    description:
      "Coated Seal is the all-rounder for medium-duty use.\n\nThe high-quality foam with excellent memory effect provides a solid seal for the chamber. The additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    subTitle: "Coated Seal SDS-011",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/coated_seals/miraflex_vistaflex.png"
  },
  {
    id: "coated_seal_suitable_for_allstein_hydro",
    parentId: ProductTypeEnum.COATED_SEAL,
    name: "Coated seal suitable for ALLSTEIN Hydro",
    description:
      "Coated Seal is the all-rounder for medium-duty use. The high-quality foam with excellent memory effect provides a solid seal for the chamber. The additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    subTitle: "Coated Seal SDS-070",
    category: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/seals/coated_seals/hydro.png"
  }
];

export const plateMountingTapeProducts: Product[] = [
  {
    id: "plate_mounting_tape_e1020",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1020",
    description:
      "3M Plate Mounting Tape E1020 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1020.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  },
  {
    id: "plate_mounting_tape_e1320",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1320",
    description:
      "3M Plate Mounting Tape E1320 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1320.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  },
  {
    id: "plate_mounting_tape_e1520",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1520",
    description:
      "3M Plate Mounting Tape E1520 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1520.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  },
  {
    id: "plate_mounting_tape_e1720",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1720",
    description:
      "3M Plate Mounting Tape E1720 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1720.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  },
  {
    id: "plate_mounting_tape_e1820",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1820",
    description:
      "3M Plate Mounting Tape E1820 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1820.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  },
  {
    id: "plate_mounting_tape_e1920",
    parentId: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    name: "3M Plate Mounting Tape E1920",
    description:
      "3M Plate Mounting Tape E1920 is a double-sided foam tape with a high adhesive strength. The adhesive tape is used for mounting printing plates in flexographic printing. The adhesive tape is available in various thicknesses and adhesive strengths.",
    category: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/plate_mounting_tape/e1920.png",
    relatedKeywords: ["tape", "mounting", "plate"]
  }
];

export const splicingTapeProducts: Product[] = [
  {
    id: "splicing_tape_7387_sfs",
    parentId: ProductTypeEnum.SPLICING_TAPE,
    name: "3M Splicing Tape 7387 SFS",
    description:
      "3M Splicing Tape 7387 SFS is a double-sided adhesive tape with a high adhesive strength. The adhesive tape is used for splicing film and foil webs at process speeds. Splicing leaves no residue and no cleaning of fiber residues is required.",
    category: ProdcutsCategoryEnum.SPLICING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/splicing_tape/7387_sfs.webp",
    relatedKeywords: ["tape", "splicing"]
  },
  {
    id: "splicing_tape_9353r",
    parentId: ProductTypeEnum.SPLICING_TAPE,
    name: "3M Splicing Tape 9353R",
    description:
      "3M Splicing Tape 9353R is a double-sided adhesive tape with a high adhesive strength. The adhesive tape is used for splicing film and foil webs at process speeds. Splicing leaves no residue and no cleaning of fiber residues is required.",
    category: ProdcutsCategoryEnum.SPLICING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/splicing_tape/9353r.png",
    relatedKeywords: ["tape", "splicing"]
  },
  {
    id: "splicing_tape_8387",
    parentId: ProductTypeEnum.SPLICING_TAPE,
    name: "3M Splicing Tape 8387",
    description:
      "3M Splicing Tape 8387 is a double-sided adhesive tape with a high adhesive strength. The adhesive tape is used for splicing film and foil webs at process speeds. Splicing leaves no residue and no cleaning of fiber residues is required.",
    category: ProdcutsCategoryEnum.SPLICING_TAPE,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    image: "/products/tapes/splicing_tape/8387.png",
    relatedKeywords: ["tape", "splicing"]
  }
];

export const detergentProducts: Product[] = [
  {
    id: "anilox_cleaner_m",
    parentId: ProductTypeEnum.DETERGENT,
    name: "Anilox Cleaner M",
    description:
      "Thorough deep cleaning without damaging the surfaces\n\nRemoves solvent-, water- and UV-based paint types\n\nHighly economical cleaning process\n\nOptimum cell volume of your anilox rollers\n\nPH-neutral and biodegradable\n\nNo chemical dissolution\n\nFlash point above 95°C",
    category: ProdcutsCategoryEnum.DETERGENT,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    subTitle: "Highly effective anilox roller cleaner for all common ink types",
    image: "/products/detergent/anilox_cleaner_m.jpg",
    relatedKeywords: ["detergent", "cleaner", "anilox"]
  },
  {
    id: "anilox_cleaner_c",
    parentId: ProductTypeEnum.DETERGENT,
    name: "Anilox Cleaner C",
    description:
      "Application as manual cleaner\n\nConcentration especially for cleaning anilox rollers\n\nComplete deep cleaning against all common ink types",
    category: ProdcutsCategoryEnum.DETERGENT,
    printersType: [PrinterTypeEnum.FLEXOGRAPHY],
    subTitle: "Powerful cleaning gel for your anilox rollers",
    image: "/products/detergent/anilox_cleaner_c.png",
    relatedKeywords: ["detergent", "cleaner", "anilox"]
  }
];

export const chamberBladeEndSealsProducts: Partial<
  Record<ProductTypeEnum, ProductsCategory>
> = {
  [ProductTypeEnum.DURO_SEAL]: {
    id: ProductTypeEnum.DURO_SEAL,
    description:
      "Duro Seals make a decisive contribution to the smooth functioning of the doctor chamber. They ensure complete tightness with moderate Doctor blade pressure at the same time. In this way, you reduce downtimes and ensure time and cost savings. For every ink system, for every chamber type.",
    name: "Duro Seal",
    image: "/products/seals/duro_seal.png",
    products: duroSealProducts
  },
  [ProductTypeEnum.LONG_LIFE_SEAL]: {
    id: ProductTypeEnum.LONG_LIFE_SEAL,
    description:
      "Long Life seal are the first choice when it comes to durability and maximum speed. Special channels on the surface allow the ink to run in during printing and keep the area between the anilox roller and the seal cool. Long Life Seals help your printing press to achieve maximum service life.",
    name: "Long Life Seal",
    image: "/products/seals/long_life_seal.png",
    products: longLifeSealProducts
  },
  [ProductTypeEnum.RUBBER_SEAL]: {
    id: ProductTypeEnum.RUBBER_SEAL,
    description:
      "When it comes to special applications, our Rubber Seal fully fulfills its purpose. Thanks to the water and solvent-resistant rubber, the seal neither swells nor shrinks. The seal absorbs shocks and vibrations and helps to optimize the service life of your production system.\n\nSuitable for special paints, varnishes and coatings.",
    name: "Rubber Seal",
    image: "/products/seals/rubber_seal.png",
    products: rubberSealProducts
  },
  [ProductTypeEnum.COATED_SEAL]: {
    id: ProductTypeEnum.COATED_SEAL,
    description:
      "Coated Seal is the all-rounder for medium-duty use.\n\nThe high-quality foam with excellent memory effect provides a solid seal for the chamber.\n\nThe additional coating on the surface slows down the wear caused by the abrasion of the anilox roller, which makes the seal even more durable compared to standard seals.",
    name: "Coated Seal",
    image: "/products/seals/coated_seal.png",
    products: coatedSealProducts
  },
  [ProductTypeEnum.FOAM_SEAL]: {
    id: ProductTypeEnum.FOAM_SEAL,
    description: "High-quality foam seal for standard applications.",
    name: "Foam Seal",
    image: "/products/seals/foam_seal.png",
    products: duroSealProducts
  }
};

export const doctorBladeProducts: Partial<
  Record<ProductTypeEnum, ProductsCategory>
> = {
  [ProductTypeEnum.GOLD_DOCTOR_BLADE]: {
    id: ProductTypeEnum.GOLD_DOCTOR_BLADE,
    description:
      "Our Gold doctor blade is the first choice when it comes to exceptional wear resistance. The special microstructure of the Gold doctor blade enables a significant service life and is resistant to all types of abrasive inks and varnishes. The high quality alloy of the Gold doctor blade also enables a very high print quality, a short run-in time and is very gentle on the anilox roller due to its flexible nature.",
    name: "Gold",
    image: "/products/doctor_blade/gold.png",
    products: []
  },
  [ProductTypeEnum.PREMIUM_DOCTOR_BLADE]: {
    id: ProductTypeEnum.PREMIUM_DOCTOR_BLADE,
    description:
      "Our premium doctor blade for gravure printing impresses with its unique surface treatment in terms of service life and print quality. The excellent bond between steel and coating offers maximum wear resistance. Our premium doctor blade reduces scumming and streaking, avoids waste and delivers outstanding printing results while protecting the anilox roller at the same time.",
    name: "Premium",
    image: "/products/doctor_blade/premium.png",
    products: [
      {
        id: "doctor_premium_blade",
        parentId: ProductTypeEnum.PREMIUM_DOCTOR_BLADE,
        name: "Doctor Premium blade",
        description:
          "Our Doctor premium blade for Rotogravure printing impresses with its unique surface treatment in terms of service life and print quality. The excellent bond between steel and coating offers maximum wear resistance. Our Doctor premium blade reduces scumming and streaking, avoids waste and delivers outstanding printing results while protecting the anilox roller at the same time.",
        category: ProdcutsCategoryEnum.DOCTOR_BLADE,
        printersType: [
          PrinterTypeEnum.FLEXOGRAPHY,
          PrinterTypeEnum.ROTOGRAVURE
        ],
        image: "/products/doctor_blade/premium.png",
        relatedKeywords: ["seal", "chamber", "blade", "coated"]
      }
    ]
  },
  [ProductTypeEnum.STAINLESS_STEEL_DOCTOR_BLADE]: {
    id: ProductTypeEnum.STAINLESS_STEEL_DOCTOR_BLADE,
    description:
      "Our stainless doctor blade is the optimum compromise between hardness, wear resistance and corrosion resistance. The intelligent material composition enables a very good service life whenever there is a risk of undesirable material reactions.",
    name: "Stainless Steel",
    image: "/products/doctor_blade/stailness_steel.png",
    products: []
  },
  [ProductTypeEnum.CARBON_DOCTOR_BLADE]: {
    id: ProductTypeEnum.CARBON_DOCTOR_BLADE,
    description:
      "Our carbon doctor blade made of European carbon steel is the reliable all-rounder for numerous printing applications. The intelligent material composition and special surface treatment ensure a very long service life, precise doctoring and a high level of user-friendliness.",
    name: "Carbon",
    image: "/products/doctor_blade/carbon.png",
    products: [
      {
        id: "doctor_premium_blade",
        parentId: ProductTypeEnum.CARBON_DOCTOR_BLADE,
        name: "Doctor Blade Carbon",
        description:
          "Our Carbon Doctor Blade made of European carbon steel is the reliable all-rounder for numerous printing applications. The intelligent material composition and special surface treatment ensure a very long service life, precise doctoring and a high level of user-friendliness.",
        category: ProdcutsCategoryEnum.DOCTOR_BLADE,
        printersType: [
          PrinterTypeEnum.FLEXOGRAPHY,
          PrinterTypeEnum.ROTOGRAVURE
        ],
        image: "/products/doctor_blade/carbon.png",
        relatedKeywords: ["seal", "chamber", "blade", "coated"]
      }
    ]
  }
};

export const plateMouningTapeProductsObject: Partial<
  Record<ProductTypeEnum, ProductsCategory>
> = {
  [ProductTypeEnum.PLATE_MOUNTING_TAPE]: {
    id: ProductTypeEnum.PLATE_MOUNTING_TAPE,
    description:
      "As a <b>3M premium partner</b>, we offer you a wide range of plate mounting tapes for flexographic printing. The plate mounting tapes are available in various hardnesses and different adhesive strengths. With our cutting system, we can produce any width you require. Our strength: express deliveries within 48 hours <b>throughout Germany!</b>",
    name: "Plate Mounting Tapes",
    image: "/products/category/plate_mounting_tape.jpg",
    products: plateMountingTapeProducts
  }
};

export const spliceTapeProductsObject: Partial<
  Record<ProductTypeEnum, ProductsCategory>
> = {
  [ProductTypeEnum.SPLICING_TAPE]: {
    id: ProductTypeEnum.SPLICING_TAPE,
    description:
      "<b>For splicing film and foil webs at process speeds</b><br/><br/>For flying reel changes<br/><br/>Splicing leaves no residue<br/><br/>No cleaning of fiber residues required",
    name: "Splicing Tapes",
    image: "/products/category/splicing_tape.jpg",
    products: splicingTapeProducts
  }
};

export const detergentProductsObject: Partial<
  Record<ProductTypeEnum, ProductsCategory>
> = {
  [ProductTypeEnum.DETERGENT]: {
    id: ProductTypeEnum.DETERGENT,
    description:
      "Special cleaner for removing stubborn dirt, ink residue and contamination from anilox rollers. Suitable for all anilox rollers and gentle on the material.",
    name: "Detergents",
    image: "/products/category/detergent.jpg",
    products: detergentProducts
  }
};

export const productsGroupedByCategory: Record<
  ProdcutsCategoryEnum,
  Partial<Record<ProductTypeEnum, ProductsCategory>>
> = {
  [ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS]: chamberBladeEndSealsProducts,
  [ProdcutsCategoryEnum.DOCTOR_BLADE]: doctorBladeProducts,
  [ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE]: plateMouningTapeProductsObject,
  [ProdcutsCategoryEnum.SPLICING_TAPE]: spliceTapeProductsObject,
  [ProdcutsCategoryEnum.DETERGENT]: detergentProductsObject
};

export const products = [
  chamberBladeEndSealsProducts,
  doctorBladeProducts,
  plateMouningTapeProductsObject,
  spliceTapeProductsObject,
  detergentProductsObject
];
