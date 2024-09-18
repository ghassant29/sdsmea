class Routes {
  static readonly HOME = "/";
  static readonly PRODUCTS = "/products";
  // static readonly ABOUT_US = "/about_us";
  static readonly CONTACT = "/contact";
  static readonly CATEGORY = "/category/:categoryId";
  static readonly PRODUCTS_CATEGORY = "/products/:categoryId";
  static readonly PRODUCTS_CATEGORY_DETAIL = "/products-category/:productId";
  static readonly PRODUCT_DETAIL = "/product/:categoryId/:parentId/:productId";
}

export default Routes;
