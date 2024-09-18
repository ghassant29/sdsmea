import { PropsWithChildren } from "react";
import HomepageProvider from "./providers/homepage.provider";

const ContextsProvider = ({ children }: PropsWithChildren) => {
  return <HomepageProvider>{children}</HomepageProvider>;
};

export default ContextsProvider;
