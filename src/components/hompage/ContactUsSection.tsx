import { tw } from "../../utils/tw";
import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";

type Props = {
  title?: string;
  className?: string;
};

const ContactUsSection = ({ title = "Contact Us", className }: Props) => {
  return (
    <div
      id="contact"
      className={tw(
        "bg-white flex items-center justify-center flex-col py-28 gap-16",
        className
      )}
    >
      <SectionHeader title={title} />
      <ContactForm />
    </div>
  );
};

export default ContactUsSection;
