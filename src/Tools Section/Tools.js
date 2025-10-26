import React, { useState, useEffect } from "react";

import tool1 from "../SVG/Figma.svg";
import tool2 from "../SVG/React.svg";
import tool3 from "../SVG/Html.svg";
import tool4 from "../SVG/Msword.svg";
import tool5 from "../SVG/Javas.svg";
import tool6 from "../SVG/Vscode.svg";
import tool7 from "../SVG/Git.svg";
import tool8 from "../SVG/Cpanel.svg";

export default function Banner() {
  const companies = [
    { logo: tool1},
    { logo: tool2},
    { logo: tool3},
    { logo: tool4},
    { logo: tool5},
    { logo: tool6},
    { logo: tool7},
    { logo: tool8},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <div className="py-12">
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 px-2 md:px-6 lg:px-10">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-5 px-6 py-6 rounded-xl shadow-lg transition-all duration-500
                ${
                  index === activeIndex
                    ? "scale-110 shadow-2xl bg-gray-200"
                    : "scale-100 bg-gray-100 opacity-80"
                }`}
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain transition-all duration-500
                  ${index === activeIndex ? "animate-pulse" : ""}`}
              />
              <span
                className={`text-white font-semibold text-sm sm:text-base md:text-lg transition-opacity duration-500
                  ${index === activeIndex ? "opacity-100" : "opacity-60"}`}
              >
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
