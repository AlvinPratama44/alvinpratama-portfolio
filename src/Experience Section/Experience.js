import React, { useEffect, useRef, useState } from "react";

import exp1 from "../Image/PT GS Battery.jpg";
import exp2 from "../Image/Binus.jpg";

const ExperienceCard = ({ title, company, year, description, image, reverse }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-10 mb-20 transition-all duration-700 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Gambar */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-2xl w-[500px] h-[320px] object-cover"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 italic text-lg mb-3">
          {company} • {year}
        </p>
        <p className="mt-2 text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Web Designer",
      company: "PT GS Battery",
      year: "Jan 2023 - Jul 2023",
      description: "Making Internal Website and Mockups using Figma & VScode.",
      image: exp1,
    },
    {
      title: "Researcher",
      company: "Binus University",
      year: "Aug 2023 - Feb 2024",
      description: "Researching the UI Usability of BINUS intelligence-based interest measurement application (P4AI).",
      image: exp2,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-20">
        Experience
      </h2>
      <div className="max-w-6xl w-full">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
