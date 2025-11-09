// src/components/Section.jsx
const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="min-h-screen flex flex-col justify-center items-center px-4"
  >
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

export default Section;
