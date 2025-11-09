// src/components/AnimatedText.jsx
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => (
  <motion.h1
    className="text-4xl font-bold text-center mt-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {text}
  </motion.h1>
);

export default AnimatedText;
