import React, { useEffect, useRef, useState } from "react";
import svg1 from "../SVG/Web Design.svg";
import svg2 from "../SVG/UI Design.svg";
import svg3 from "../SVG/UX Research.svg";

const works = [
  {
    src: svg1,
    title: "Web Design",
    desc: "Creating the visual looks and feels of a Website. Designing Layouts of Web pages",
  },
  {
    src: svg2,
    title: "UI Designer",
    desc: "Design User Interfaces for applications and study user applications interactions",
  },
  {
    src: svg3,
    title: "UX Researcher",
    desc: "Researching User Experience of their needs, goals, behaviors, and problems through research and analysis",
  },
];

export default function WorkSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto mt-12 py-12 px-6"
      id="work"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Work Section
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {works.map((work, idx) => (
          <div
            key={idx}
            style={{ transitionDelay: `${idx * 200}ms` }} // staggered
            className={`w-80 p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center
              transition-all duration-700 ease-out
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={work.src}
              alt={work.title}
              className="h-24 w-24 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
            <p className="text-gray-600">{work.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
