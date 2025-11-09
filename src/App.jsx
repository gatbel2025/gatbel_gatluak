import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import FloatingIcons from "./components/FloatingIcons";
import AnimatedText from "./components/AnimatedText";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Theme Toggle Button */}
      <Navbar />
      <ThemeToggle />
      {/* Main Content */}
      <AnimatedText />
      <FloatingIcons />

      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <Section />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
          </div>
  );
}

export default App;
