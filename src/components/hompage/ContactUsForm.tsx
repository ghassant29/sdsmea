import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactUsForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    subject: false,
    message: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setErrorMessage(null);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      user_name: !formData.user_name,
      user_email: !formData.user_email || !validateEmail(formData.user_email),
      subject: !formData.subject,
      message: !formData.message
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      setErrorMessage("Please fill in all fields correctly.");
      return;
    }

    emailjs
      .sendForm(
        "service_4xy71nc",
        "template_x19qf6j",
        form.current as HTMLFormElement,
        "5n9tfWh6PUyAN6F0_"
      )
      .then(
        () => {
          setStatusMessage(
            "Thank you for your reach. We'll get back to you soon."
          );
          setErrorMessage(null);
          // Clear form after submission
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatusMessage(null);
          setErrorMessage(
            "Failed to send the message. Please try again later."
          );
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
        <div className="mb-4">
          <label
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.user_name ? "border-red-500" : ""
            }`}
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your name"
            value={formData.user_name}
            onChange={handleChange}
          />
          {errors.user_name && (
            <p className="text-red-500 text-xs italic">
              Please enter your name.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.user_email ? "border-red-500" : ""
            }`}
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your email"
            value={formData.user_email}
            onChange={handleChange}
          />
          {errors.user_email && (
            <p className="text-red-500 text-xs italic">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.subject ? "border-red-500" : ""
            }`}
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs italic">
              Please enter a subject.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message ? "border-red-500" : ""
            }`}
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">
              Please enter your message.
            </p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      {statusMessage && (
        <div className="mt-4 p-4 text-green-700 bg-green-200 rounded">
          {statusMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-4 text-red-700 bg-red-200 rounded">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default ContactUsForm;
