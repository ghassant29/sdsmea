import { Link } from "react-router-dom";

type Props = {
  productId: string;
  name: string;
  image: string;
  link: string;
  subTitle?: string;
  viewButtonText?: string;
};

const ProductCard = ({
  name,
  subTitle,
  image,
  link,
  productId,
  viewButtonText = "View Products"
}: Props) => {
  return (
    <Link
      key={productId}
      to={link}
      className="w-fit min-w-[350px] max-w-[350px] bg-[#f5f5f5] rounded-lg flex items-center justify-center flex-col gap-4 border overflow-hidden hover:shadow-sm hover:border-cblue transition-all"
    >
      <img
        src={image}
        alt={name}
        className="w-full object-cover max-h-[230px] min-h-[230px]"
      />
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-black font-medium text-md md:text-2xl leading-tight text-center">
          {name}
        </h1>
        {subTitle && (
          <span className="text-black font-normal text-sm md:text-md leading-tight text-center">
            {subTitle}
          </span>
        )}
      </div>

      <span className="font-medium text-sm md:text-md leading-tight p-4 bg-cblue text-white w-full text-center">
        {viewButtonText}
      </span>
    </Link>
  );
};

export default ProductCard;
