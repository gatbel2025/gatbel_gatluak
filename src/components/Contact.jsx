import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1kgf73", // Replace with your EmailJS service ID
        "template_4f3c1pb", // Replace with your EmailJS template ID
        e.target,
        "3KnXZqRhFsAYw-_R4" // Replace with your EmailJS public key
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="pt-2 pb-4 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>

      <div className="max-w-5xl mx-auto px-2 flex flex-col md:flex-row gap-16">

        <div className="md:w-1/2 flex flex-col justify-center gap-16 dark:bg-gray-900 p-8 rounded-lg">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-sky-500 mt-1" />
            <div>
              <h3 className="font-bold text-base">Call Me</h3>
              <p className="text-sm">+211928950409</p>
              <p className="text-sm">+211912019093</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-sky-500 mt-1" />
            <div>
              <h3 className="font-bold text-base">Email</h3>
              <p className="text-sm">gatbelgatluak2020@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-sky-500 mt-1" />
            <div>
              <h3 className="font-bold text-base">Location</h3>
              <p className="text-sm">Akobo, South Sudan</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-4 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="block font-medium text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-sky-100 text-sm border-l rounded-md dark:bg-gray-700"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="subject" className="block font-medium text-sm mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 text-sm bg-sky-100 border rounded-md dark:bg-gray-700"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block font-medium text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-sky-100 text-sm border rounded-md dark:bg-gray-700"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="block font-medium text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-sky-100 text-sm border rounded-md dark:bg-gray-700"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-40 bg-sky-500 text-white py-2 rounded-md shadow hover:bg-sky-600 transition duration-300 text-sm"
            >
              Send Message
            </button>

            {status && (
              <div className="mt-3 text-center text-sm font-medium text-green-500 dark:text-green-400">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
