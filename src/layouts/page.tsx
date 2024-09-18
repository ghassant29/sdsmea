import { PropsWithChildren, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "./default";

type Props = {
  title?: string;
};

const Page = ({ children, title }: PropsWithChildren<Props>) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    document.title = title ? `${title} | SDS MEA` : "SDS MEA";
  }, []);

  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Page;
