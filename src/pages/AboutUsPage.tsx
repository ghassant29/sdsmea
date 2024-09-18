import { FaChevronRight } from "react-icons/fa";
import ContactUsSection from "../components/hompage/ContactUsSection";
import Page from "../layouts/page"; // Adjust the import path as needed

const AboutUsPage = () => {
  return (
    <Page title="About Us">
      <div className="about-us-page bg-secondary flex flex-col items-center justify-center py-28 gap-20 px-12 md:px-0">
        <section className="intro-section bg-white flex flex-col md:flex-row items-center justify-center md:justify-between p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <img
            src="/images/about-us.png"
            alt="About Us"
            className="w-96 rounded-xl md:-rotate-6 border-8"
          />
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center">
              <FaChevronRight className="text-4xl font-bold text-primary pt-1 pr-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                SDS Ltd.
              </h2>
            </div>
            <p className="text-primary md:text-lg font-light">
              Founded in 2012 in the Swiss community of Pfäffikon, SDS GmbH is
              still committed to setting new quality standards in the printing
              and packaging industry, saving its more than 400 customer
              companies worldwide time, money and nerves. As an experienced team
              of problem solvers and innovators, SDS GmbH has remained committed
              to the vision of developing the world’s best seals for chambered
              doctor blade systems. No avenue remains unexplored, no material
              untouched and no testing phase too costly to ensure that this
              claim is met. The focus of all our considerations: the customer.
              To achieve this, we combine sound, technical knowledge from many
              years of experience in Rotogravure and flexographic printing with
              modern design and engineering expertise.
            </p>
          </div>
        </section>

        <section className="statistics-section bg-white flex flex-wrap justify-around p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="stat-item flex flex-col items-center justify-center p-4">
            <h3 className="text-4xl font-bold text-primary">400</h3>
            <p className="text-primary md:text-lg">
              worldwide customer companies
            </p>
          </div>
          <div className="stat-item flex flex-col items-center justify-center p-4">
            <h3 className="text-4xl font-bold text-primary">2012</h3>
            <p className="text-primary md:text-lg">
              founded in the Swiss community of Pfäffikon
            </p>
          </div>
          <div className="stat-item flex flex-col items-center justify-center p-4">
            <h3 className="text-4xl font-bold text-primary">3M</h3>
            <p className="text-primary md:text-lg">
              Authorized Specialist dealer
            </p>
          </div>
        </section>

        <section className="testimonials-section bg-white flex flex-wrap justify-around p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="testimonial-item flex flex-col items-center justify-center p-4">
            <p className="text-primary md:text-lg font-light italic">
              "I can only recommend SDS GmbH. The products are high quality and
              above all durable. Communication was quick and easy. I
              particularly appreciated the technical understanding in the
              consultation."
            </p>
            <h4 className="text-primary md:text-lg font-bold mt-2">
              Viktor Bratkovics, Production Manager Foils + Printing Lang GmbH
            </h4>
          </div>
          <div className="testimonial-item flex flex-col items-center justify-center p-4">
            <p className="text-primary md:text-lg font-light italic">
              "I appreciate the consulting competence of SDS GmbH. You quickly
              notice that you are dealing with people from the trade here. The
              products ordered are of high quality and the delivery was also
              fast."
            </p>
            <h4 className="text-primary md:text-lg font-bold mt-2">
              Alexander Appoew, Printing Shop Manager alesco Foils GmbH
            </h4>
          </div>
        </section>
      </div>
      <ContactUsSection />
    </Page>
  );
};

export default AboutUsPage;
