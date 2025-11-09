import { motion } from "framer-motion";
import HomeImage from "../assets/images/salam-restaurant.png";
import ExpenseImage from "../assets/images/expense-manager.png";
import PortfolioImage from "../assets/images/personal-portfolio.png"; // Import the portfolio image

const projects = [
  {
    title: "Salam Fast Food Restaurant",
    description: "A responsive food ordering platform built with React and Tailwind CSS, designed for a fast and user-friendly experience.",
    image: HomeImage,
    link: "https://your-live-link-salam-restaurant.com",
  },
  {
    title: "Expense Manager",
    description: "A smart expense tracker and budgeting app built using Flutter for cross-platform financial management.",
    image: ExpenseImage,
    link: "https://your-live-link-expense-manager.com",
  },
  {
    title: "Personal Portfolio",
    description: "A sleek and modern personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    image: PortfolioImage,
    link: "https://your-live-link-portfolio.com",
  },
];

const Projects = () => (
  <section id="projects" className="pt-24 pb-2 px-4 sm:px-12 lg:px-24">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
      My Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {projects.map(({ title, description, image, link }, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-xl w-72 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-64 overflow-hidden relative">
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-full object-contain"
              />
            </div>
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
