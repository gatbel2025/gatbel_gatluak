import { motion } from "framer-motion";
import { GraduationCap, Laptop2, BadgeCheck, Download } from "lucide-react";

const AboutMe = () => (
  <section
    id="about"
    className="pt-24 pb-4 flex flex-col items-center px-6 text-gray-900 dark:text-white"
  >
    {/* Heading */}
    <motion.h2
      className="text-4xl font-bold mb-8 text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    {/* About Section */}
    <motion.div
      className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-3 mb-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Bio */}
      <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
        <p className="text-base leading-relaxed">
          Hello, I'm <strong>Gatbel Gatluak</strong> — a passionate software developer specializing in frontend web and mobile app development, dedicated to building intuitive, high-performance digital experiences.
        </p>
        <p className="text-base leading-relaxed">
          I specialize in modern tools like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Flutter</strong>, transforming design concepts into functional, user-centric applications.
        </p>
        <p className="text-base leading-relaxed">
          My approach combines clean code, responsive design, and performance optimization to deliver seamless solutions. I also embrace continuous learning and agile methodologies to stay ahead in the evolving tech landscape.
        </p>
        <a
          href="https://drive.google.com/file/d/12B90gCYQsifUupwrCR4hgTf9CFkh1eyN/view?usp=sharing"
          download
          className="inline-flex items-center gap-2 px-3 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-md shadow transition w-fit mx-auto md:mx-0"
        >
          <Download className="w-4 h-4" />
          Download Résumé
        </a>
      </div>
    </motion.div>

    {/* Education, Work, and Certifications */}
    <div className="w-full px-6 md:px-16 pt-2 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
          <GraduationCap className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Education</h3>
        </div>

        <div>
          <h4 className="font-semibold text-base">Jimma University</h4>
          <p className="text-sm text-gray-500 mb-1">2021 – 2025 (Expected)</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            BSc in Software Engineering
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Relevant coursework: Web Development, Mobile Programming, Agile Methodologies
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Key project: Cross-platform Breast Cancer Support System with integrated Chatbot built with Flutter and Firebase
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-base">Jawe Secondary and Preparatory School, Gambella</h4>
          <p className="text-sm text-gray-500 mb-1">2016 – 2019</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Secondary School Leaving Examination (SSLE) Certificate
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Score: 514/600
          </p>
        </div>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
          <Laptop2 className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Work Experience</h3>
        </div>

        <div>
          <h4 className="font-semibold text-base">Web Development Intern</h4>
          <p className="text-sm text-gray-500 mb-2">Debo Engineering | Nov 2024 – Mar 2025</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Developed responsive UIs with React.js and Tailwind CSS, enhancing user engagement by 30%.</li>
            <li>Integrated RESTful APIs for dynamic data rendering and collaborated on Agile workflows.</li>
            <li>Optimized application performance, reducing load times by 20%.</li>
          </ul>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
          <BadgeCheck className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Certifications</h3>
        </div>

        <div>
          <h4 className="font-semibold text-base">
            Professional Development Skills for the Digital Age
          </h4>
          <p className="text-sm text-gray-500 mb-1">ALX Africa | 3 Months</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Mastered 8 core meta-skills: Problem-Solving, Critical Thinking, Collaboration, Communication, Adaptability, Emotional Intelligence, Leadership, and Digital Fluency.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-base">
            Introduction to Agile Development and Scrum
          </h4>
          <p className="text-sm text-gray-500 mb-1">IBM (via Coursera) | 1 Month</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Certified in Agile methodologies, sprint planning, and Scrum frameworks. Hands-on experience with Jira, user stories, and iterative development.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutMe;
