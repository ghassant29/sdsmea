import AboustUsSection from "../components/hompage/AboustUsSection";
import ContactUsSection from "../components/hompage/ContactUsSection";
import HeroSection from "../components/hompage/HeroSection";
import ProductsSection from "../components/hompage/ProductsSection";

import { useHome } from "../context/providers/homepage.provider";
import Page from "../layouts/page";

const Homepage = () => {
  const { aboutRef, contactRef, heroRef, productsRef } = useHome();

  return (
    <Page>
      <div ref={heroRef} />
      <HeroSection />
      {/* <div ref={servicesRef} />
      <ServicesSection /> */}
      <div ref={productsRef} />
      <ProductsSection />
      <div ref={aboutRef} />
      <AboustUsSection />

      <div ref={contactRef} />
      <ContactUsSection />
    </Page>
  );
};

export default Homepage;
