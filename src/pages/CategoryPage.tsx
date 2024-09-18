import ReactPlayer from "react-player";
import { CgArrowRight } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import ContactUsSection from "../components/hompage/ContactUsSection";
import ProductCard from "../components/hompage/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Page from "../layouts/page"; // Adjust the import path as needed
import Routes from "../routes";
import { featuredCategories, printers } from "../utils/products/constants";
import NotFoundPage from "./NotFound";

const CaterogyPage = () => {
  const params = useParams();
  const caterogyId = params.categoryId;
  const printer = printers.find((printer) => printer.id === caterogyId);

  if (!caterogyId || !printer) return <NotFoundPage />;

  const productCategories = printer.relatedCategories.map((id) =>
    featuredCategories.find((category) => category.id === id)
  );

  return (
    <Page title={printer.name}>
      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8 px-8">
        <SectionHeader title={printer.name} />
        <span className="text-center">{printer.subTitle}</span>
      </div>

      <div className="relative mx-auto w-11/12 md:w-3/4 md:h-fit bg-white flex flex-col items-center justify-center pb-10 md:pb-0 rounded-lg border">
        <div className="w-full h-fit flex items-center justify-around md:flex-row flex-col-reverse">
          <div className="md:w-1/2 md:max-w-4xl w-full px-4 md:p-10">
            <h1
              className="text-black font-medium text-md md:text-2xl leading-tight"
              dangerouslySetInnerHTML={{ __html: printer.description }}
            />
            {/* Inquires button */}
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
            className="md:w-1/3 w-full h-[300px] rounded-lg"
            style={{
              backgroundImage: `url(${printer.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8">
        <div className="w-11/12 md:w-3/4 flex items-start justify-center flex-col gap-8">
          <div className="flex items-start justify-center flex-col gap-1 text-center">
            <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
              Various products
            </span>

            <div
              className="w-28 h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)",
              }}
            />
          </div>
          <div className="w-full flex items-center justify-center md:justify-evenly  gap-10 flex-wrap">
            {productCategories.map((categorie) =>
              categorie ? (
                <ProductCard
                  key={categorie.id}
                  productId={categorie.id}
                  name={categorie.name}
                  image={categorie.image}
                  link={`/products/${categorie.id}`}
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Conditional Video Section for Flexography */}
      {printer.name === "Flexography" && (
        <div className="w-full flex items-center justify-center mt-8 px-4 md:px-0">
          <div className="relative w-full max-w-[90%] md:max-w-[800px] h-[300px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=_cFCDjCKJyw"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      )}

      <ContactUsSection />
    </Page>
  );
};

export default CaterogyPage;
