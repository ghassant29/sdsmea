import { useMemo } from "react";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import ContactUsSection from "../components/hompage/ContactUsSection";
import ProductCard from "../components/hompage/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Page from "../layouts/page"; // Adjust the import path as needed
import Routes from "../routes";
import { Product, ProductsCategory, ProductTypeEnum } from "../types/products";
import { printers, products } from "../utils/products/constants";

const flattenProducts = (
  products: Partial<Record<ProductTypeEnum, ProductsCategory>>[]
) => {
  return products.flatMap((productCategory) =>
    Object.values(productCategory).flatMap(
      (category) => category.products || []
    )
  );
};

const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const AllProducts = () => {
  const flattenedProducts = useMemo(
    () => flattenProducts(products),
    [products]
  );

  const selectedProducts = useMemo(
    () => getRandomProducts(flattenedProducts, 6),
    [flattenedProducts]
  );

  return (
    <Page title="Products">
      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8 px-8">
        <SectionHeader title="All Products" />

        <span className="text-center">
          Print optimization and Reduce Production costs!
        </span>
      </div>

      <div className="relative mx-auto w-11/12 md:w-3/4 md:h-fit bg-[#f5f5f5] flex flex-col items-center justify-center pb-10 md:pb-0 rounded-lg">
        <div className=" w-full h-fit flex items-center justify-center gap-6 md:p-10 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 md:max-w-lg w-full px-4 md:px-0">
            <h1 className="text-black font-medium text-md md:text-xl leading-tight">
              SDS MEA is your local partner for enhancing your print experience
              and optimizing your operational expenses. We offer a comprehensive
              range of top-quality product solutions for Rotogravure and
              flexographic printing.Our team is ready to advise and support you
              with any questions or special requirements you may have. <br />
              <br />
              Feel free to call us at{" "}
              <a href="tel:+971 4 880 3433" className="text-cblue font-bold">
                +971 4 880 3433
              </a>{" "}
              <br />
              Or send an inquiry to{" "}
              <a href="mailto:email@email.com" className="text-cblue font-bold">
                email@email.com
              </a>
            </h1>
            <div className="w-full flex items-center justify-center flex-col gap-4">
              <Link
                to={Routes.CONTACT}
                className="bg-cblue rounded-lg text-white font-medium text-sm md:text-md leading-tight p-4 w-full text-center mt-4 hover:bg-cblue/80 transition-all"
              >
                Inquires
                <CgArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>
          <div
            className="md:w-1/2 w-full md:h-[350px] h-[230px] rounded-lg"
            style={{
              backgroundImage: `url(/products/category/plate_mounting_tape.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "bottom"
            }}
          ></div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-16">
        <div className="w-11/12 md:w-3/4 flex items-center md:items-start justify-center flex-col gap-8">
          <div className="flex items-start justify-center flex-col gap-1 text-center">
            <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
              Printers
            </span>

            <div
              className="w-10 h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
              }}
            />
          </div>
          <div className="w-full flex items-center justify-evenly  gap-10 flex-wrap">
            {printers.map((printer) => (
              <ProductCard
                key={printer.id}
                productId={printer.id}
                name={printer.name}
                subTitle={printer.subTitle}
                image={printer.image}
                link={`/category/${printer.id}`}
              />
            ))}
          </div>
        </div>
        <div className="w-11/12 md:w-3/4 flex items-start justify-center flex-col gap-8">
          <div className="flex items-start justify-center flex-col gap-1 text-center">
            <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
              Various products
            </span>

            <div
              className="w-10 h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
              }}
            />
          </div>
          <div className="w-full flex items-center justify-evenly gap-10 flex-wrap">
            {selectedProducts.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                name={product.name}
                subTitle={product.subTitle}
                image={product.image}
                link={`/product/${product.category}/${product.parentId}/${product.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ContactUsSection />
    </Page>
  );
};

export default AllProducts;
