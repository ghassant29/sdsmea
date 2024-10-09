import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsSend } from "react-icons/bs";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_a3tmz66", // Replace with your EmailJS service ID
          "template_x19qf6j", // Replace with your EmailJS template ID
          form.current,
          "5n9tfWh6PUyAN6F0_" // Replace with your EmailJS public key
        )
        .then(
          () => {
            setStatusMessage(
              "Thank you for your message! We'll get back to you soon."
            );
            setErrorMessage(null);
            form.current?.reset(); // Clear the form fields
          },
          (error) => {
            console.error("Email send failed:", error.text);
            setErrorMessage(
              "Failed to send the message. Please try again later."
            );
            setStatusMessage(null);
          }
        );
    }
  };

  return (
    <section className="text-gray-600 body-font relative max-w-7xl">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative outline-none">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 outline-none border-none rounded-lg"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3588496545212!2d55.29891547405889!3d25.157358277736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6867967dbc21%3A0xe924fc3850c6f8bf!2sMeydan%20Racecourse!5e0!3m2!1sen!2slb!4v1726672065773!5m2!1sen!2slb"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Dubai, U.A.E <br />
                Meydan Road, Nad Al Sheba <br />
                Meydan Grandstand, 6th floor
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-red-500 leading-relaxed"
                href="mailto:purchase@sdsmea.com"
              >
                purchase@sdsmea.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
                href="tel:+971585321455"
                className="text-red-500 leading-relaxed"
              >
                +971585321455
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Get in touch with us for any inquiries, support, or feedback — we're
            here to help!
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name" // Make sure this matches your template variable
                className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // Make sure this matches your template variable
                className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // Make sure this matches your template variable
                className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message" // Make sure this matches your template variable
                className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center text-white bg-cpink border-0 py-2 px-6 focus:outline-none hover:bg-cpink/80 rounded text-lg transition-colors"
            >
              Send
              <BsSend className="inline-block ml-3" />
            </button>
          </form>
          {statusMessage && (
            <p className="text-green-600 mt-4">{statusMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
          <p className="text-xs text-gray-500 mt-3">
            By submitting this form I confirm that I agree with the privacy
            policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
