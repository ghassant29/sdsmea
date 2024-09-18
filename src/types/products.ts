export enum ProdcutsCategoryEnum {
  CHAMBER_BLADE_END_SEALS = "chamber_blade_end_seals",
  DOCTOR_BLADE = "doctor_blade",
  DETERGENT = "detergent",
  PLATE_MOUNTING_TAPE = "plate_mounting_tape",
  SPLICING_TAPE = "splicing_tape"
}

export enum PrinterTypeEnum {
  FLEXOGRAPHY = "flexography",
  ROTOGRAVURE = "rotogravure"
}

export enum ProductTypeEnum {
  DURO_SEAL = "duro_seal",
  LONG_LIFE_SEAL = "long_life_seal",
  RUBBER_SEAL = "rubber_seal",
  COATED_SEAL = "coated_seal",
  FOAM_SEAL = "foam_seal",
  GOLD_DOCTOR_BLADE = "gold_doctor_blade",
  PREMIUM_DOCTOR_BLADE = "premium_doctor_blade",
  STAINLESS_STEEL_DOCTOR_BLADE = "stainless_steel_doctor_blade",
  CARBON_DOCTOR_BLADE = "carbon_fiber_doctor_blade",
  PLATE_MOUNTING_TAPE = "plate_mounting_tape",
  SPLICING_TAPE = "splicing_tape",
  DETERGENT = "detergent"
}

export type ProductCategory = {
  id: ProdcutsCategoryEnum;
  name: string;
  description: string;
  image: string;
};

export type Printer = {
  id: PrinterTypeEnum;
  name: string;
  subTitle: string;
  description: string;
  image: string;
  relatedCategories: ProdcutsCategoryEnum[];
};

export type Product = {
  id: string;
  parentId: ProductTypeEnum;
  name: string;
  description: string;
  subTitle?: string;
  category: ProdcutsCategoryEnum;
  printersType: PrinterTypeEnum[];
  image: string;
  relatedKeywords?: string[];
};

export type ProductsCategory = {
  id: ProductTypeEnum;
  name: string;
  description: string;
  image: string;
  products: Product[];
};
