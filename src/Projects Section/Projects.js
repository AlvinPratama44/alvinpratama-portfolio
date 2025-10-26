import React, { useEffect, useRef, useState } from "react";

import pro1 from "../Image/Project Layout Mapping.jpg";
import pro2 from "../Image/Project Mockup GS.jpg";
import pro3 from "../Image/Qahwa Logo.jpg";
import pro4 from "../Image/Tokopedia Mockup.jpg";
import pro5 from "../Image/Portofolio Website.jpg";

const projects = [
  {
    src: pro5,
    date: "2025-07-1T19:10:07.818Z",
    dateText: "1 Jul 2025",
    title: "Web Portofolio",
    desc: "Designed a Personal Portfolio Website using React and Tailwind CSS to showcase my projects and skills.",
    read: "Personal Project",
  },
  {
    src: pro4,
    date: "2025-03-01T10:00:00.000Z",
    dateText: "20 Sep 2025",
    title: "Website Clone Mockup",
    desc: "Making Tokopedia Web Mockup and Learn The UI Elements of Tokopedia Website.",
    read: "Personal Project",
  },
  {
    src: pro1,
    date: "2025-03-10T14:30:00.000Z",
    dateText: "2 May 2023",
    title: "Website Internal IT Projects",
    desc: "Designed an IT Device Layout Map for PT GS Battery to support company evaluation requirements.",
    read: "IT Project",
  },
  {
    src: pro2,
    date: "2025-03-20T08:15:00.000Z",
    dateText: "30 Mar 2023",
    title: "Website Portal Web",
    desc: "Designed a UI mockup for a Preventive Workshop Portal application to improve UI/UX skills",
    read: "IT Project",
  },
  {
    src: pro3,
    date: "2025-03-25T16:45:00.000Z",
    dateText: "10 Oct 2022",
    title: "Mobile Application Design",
    desc: "Mobile Applications for consumer to easy buy coffee beans through phone.",
    read: "School Project",
  },
];

export default function Projects() {
  const cardsRef = useRef([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("opacity-100", entry.isIntersecting);
          entry.target.classList.toggle("translate-y-0", entry.isIntersecting);
          entry.target.classList.toggle("scale-100", entry.isIntersecting);
        }),
      { threshold: 0.2 }
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 bg-white" id="projects">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="w-96 opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out
                       hover:scale-105 group p-5 bg-gray-100 rounded-xl shadow-lg flex flex-col"
          >
            {/* Gambar */}
            <figure
              className="overflow-hidden rounded-lg relative mb-2 cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.src}
                alt={project.title}
                className="object-cover object-center aspect-video bg-gray-100 w-full h-48 hover:opacity-90 transition"
              />
            </figure>

            <time dateTime={project.date} className="text-xs text-gray-500">
              {project.dateText}
              <span className="mx-2">⦁</span>
              {project.read}
            </time>

            <p className="text-xl mt-2 text-gray-800">{project.title}</p>

            <p className="line-clamp-2 text-sm text-gray-600 opacity-70 mt-1 group-hover:opacity-90 transition-opacity duration-300 flex-grow">
              {project.desc}
            </p>

            {/* Tombol View Project */}
            <button
              onClick={() => alert(`View details for ${project.title}`)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full max-h-[70vh] object-contain bg-gray-100"
            />
            <div className="p-4">
              <p className="text-gray-600">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
