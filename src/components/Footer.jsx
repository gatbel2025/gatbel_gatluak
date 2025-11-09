import React from "react";
import { ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-10">
      {/* Back to Top */}
      <div className="text-center mb-8">
        <a
          href="#top"
          className="text-2xl font-bold inline-flex items-center gap-2"
        >
          <ArrowUp className="w-6 h-6" />
          Back to the Top
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-12 text-3xl mb-8">
        <a
          href="https://web.facebook.com/gatbel.gatluakyiech/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/gatbelg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/251977410983" // Use format: wa.me/2519XXXXXXXX
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:gatbelgatluak2020@gmail.com"
          className="hover:text-gray-200 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm">
        © 2025 Gatbel Gatluak. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
