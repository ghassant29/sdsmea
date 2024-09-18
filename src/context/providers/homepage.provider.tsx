import {
  createContext,
  LegacyRef,
  PropsWithChildren,
  useContext,
  useRef
} from "react";

type HomepageContextType = {
  heroRef: LegacyRef<HTMLDivElement> | undefined;
  aboutRef: LegacyRef<HTMLDivElement> | undefined;
  servicesRef: LegacyRef<HTMLDivElement> | undefined;
  contactRef: LegacyRef<HTMLDivElement> | undefined;
  teamRef: LegacyRef<HTMLDivElement> | undefined;
  productsRef: LegacyRef<HTMLDivElement> | undefined;
};

const HomepageContext = createContext<HomepageContextType>({
  heroRef: { current: null },
  aboutRef: { current: null },
  servicesRef: { current: null },
  contactRef: { current: null },
  productsRef: { current: null },
  teamRef: { current: null }
});

const HomepageProvider = ({ children }: PropsWithChildren) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);

  return (
    <HomepageContext.Provider
      value={{
        heroRef: heroRef,
        aboutRef: aboutRef,
        servicesRef: servicesRef,
        contactRef: contactRef,
        productsRef: productsRef,
        teamRef: teamRef
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};

export const useHome = () => useContext(HomepageContext);

export default HomepageProvider;
