import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMysql,
  SiCanva,
} from "react-icons/si";

const skills = [
  { name: "HTML", Icon: FaHtml5, color: "text-red-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "React", Icon: FaReact, color: "text-blue-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Flutter", Icon: SiFlutter, color: "text-blue-500" },
  { name: "Dart", Icon: SiDart, color: "text-blue-600" },
  { name: "Firebase", Icon: SiFirebase, color: "text-yellow-500" },
  { name: "Figma", Icon: FaFigma, color: "text-pink-500" },
  { name: "Canva", Icon: SiCanva, color: "text-blue-400" },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-600" },
  { name: "Databases", Icon: FaDatabase, color: "text-indigo-500" },
  { name: "GitHub", Icon: FaGithub, color: "text-black dark:text-white" },
];

const Skills = () => (
  <section id="skills" className="pt-24 pb-4 px-12 sm:px-8 md:px-10 lg:px-6 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        My Skills
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center group transition-transform hover:scale-110"
          >
            <Icon className={`text-5xl ${color} mb-2`} />
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:font-semibold">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
