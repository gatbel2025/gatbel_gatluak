import React from "react";

const services = [
  {
    title: "Frontend Development",
    points: [
      "Craft responsive, user-friendly websites.",
      "Build with HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Focus on performance, accessibility, and mobile-first design."
    ],
  },
  {
    title: "Mobile App Development (Flutter)",
    points: [
      "Develop cross-platform apps for Android and iOS.",
      "Use Flutter and Dart for beautiful, high-performance apps.",
      "Ensure smooth UI, offline support, and fast load times."
    ],
  },
  {
    title: "UI/UX Design",
    points: [
      "Create intuitive and attractive user interfaces.",
      "Design using Figma and Adobe XD tools.",
      "Prioritize usability, flow, and consistent visual identity."
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-4 px-4 md:px-16 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Here's what I can offer to help bring your ideas to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-sky-100 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
