// src/components/FloatingIcons.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const icons = [
  { Icon: FaHtml5, color: "text-red-500" },
  { Icon: FaCss3Alt, color: "text-blue-500" },
  { Icon: FaJs, color: "text-yellow-400" },
  { Icon: FaReact, color: "text-blue-400" },
  { Icon: SiTailwindcss, color: "text-teal-400" },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {icons.map(({ Icon, color }, index) => (
      <Icon
        key={index}
        className={`${color} text-6xl animate-floating absolute`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingIcons;