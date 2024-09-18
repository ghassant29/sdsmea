import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { featuredCategories } from "../../utils/products/constants";
import SectionHeader from "../SectionHeader";

const ProductsSection = () => {
  return (
    <div
      id="products"
      className="bg-white flex items-center justify-center flex-col pt-20 gap-16"
    >
      <SectionHeader title="Products" />

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl px-8">
        {featuredCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-stretch justify-between gap-6 shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full max-h-48 object-cover bg-[#f8f8f8] rounded-t-lg"
            />
            <div className="flex flex-col flex-grow justify-between  gap-4 px-6 py-8">
              <div className="flex-grow">
                <h2 className="text-[#333333] text-2xl font-bold">
                  {category.name}
                </h2>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: category.description }}
                />
              </div>
              <div className="flex-shrink-0 mt-4">
                <Link
                  to={`products/${category.id}`}
                  className="bg-cblue text-white py-2 px-4 rounded-md hover:bg-cblue/80 transition-colors"
                >
                  Learn More
                  <BiLinkExternal className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center bg-[#f8f8f8] shadow rounded-lg">
          {/* View all products button */}
          <Link
            to="/products"
            className="bg-cblue text-white py-2 px-4 rounded-md w-full md:w-fit text-center"
          >
            View All Products
            <BsArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
