import { useMediaQuery } from "usehooks-ts";

const useMobile = () => {
  return useMediaQuery("(max-width: 768px)");
};

export default useMobile;
