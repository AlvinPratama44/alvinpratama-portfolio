// src/components/Certifications.jsx
import React, { useEffect, useRef, useState } from "react";
import exp1 from "../Image/Alvin UIUX Webhozz.jpg";
import exp2 from "../Image/Alvin JavaP.jpg";
import exp3 from "../Image/Alvin Javun.jpg";

/**
 * Ganti src dengan path gambar sertifikatmu (jpg/png/svg).
 * Jika tidak ada gambar, kamu bisa pakai placeholder atau hapus bagian <img>.
 */
const CERTS = [
  {
    id: 1,
    title: "Web Design",
    issuer: "WebHozz | Web & IT Training",
    date: "Mar 2024",
    src: "/certs/cert1.jpg",
    link: "#",
  },
  {
    id: exp1,
    title: "UI/UX Design",
    issuer: "WebHozz | Web & IT Training",
    date: "Jun 2024",
    src: exp1,
    link: "#",
  },
  {
    id: exp3,
    title: "Java Fundamental",
    issuer: "WebHozz | Web & IT Training",
    date: "Sep 2024",
    src: exp3,
    link: "#",
  },
  {
    id: exp2,
    title: "Java Programming",
    issuer: "WebHozz | Web & IT Training",
    date: "Nov 2024",
    src: exp2,
    link: "#",
  },
  {
    id: 5,
    title: "Product & Project Management",
    issuer: "MySkill",
    date: "Jan 2025",
    src: "/certs/cert5.jpg",
    link: "#",
  },
];

export default function Certifications() {
  const cardRefs = useRef([]);
  const [visibleMap, setVisibleMap] = useState({});
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, CERTS.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = entry.target.dataset.index;
          setVisibleMap((prev) => ({
            ...prev,
            [idx]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.18 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-1">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Certifications
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Here are a few professional certificates I've earned. Scroll to see them animate in.
      </p>

      <div className="flex flex-col gap-8">
        {CERTS.map((cert, i) => {
          const isVisible = visibleMap[i] === true;
          const fromLeft = i % 2 === 0; // even index: enter from left, odd from right
          // stagger small delay so cards appear sequentially
          const delayMs = i * 120;

          return (
            <article
              key={cert.id}
              data-index={i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${delayMs}ms` }}
              className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-6
                md:gap-8 p-6 rounded-2xl bg-white shadow-md overflow-hidden
                transition-transform duration-700 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98"}
                ${isVisible ? "" : ""}
              `}
            >
              {/* Left: image (or right depending on layout) */}
              <div
                className={`flex-shrink-0 w-full md:w-80 h-44 md:h-auto rounded-lg overflow-hidden shadow-sm
                  transition-transform duration-700
                  ${isVisible ? "scale-100" : fromLeft ? "-translate-x-8" : "translate-x-8"}
                `}
                aria-hidden
              >
                <button
                  onClick={() => setLightbox({ open: true, src: cert.src, title: cert.title })}
                  className="w-full h-full block focus:outline-none"
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              </div>

              {/* Right: content */}
              <div className="flex-1">
                <div
                  className={`transition-transform duration-700 ${isVisible ? "translate-x-0" : fromLeft ? "-translate-x-6" : "translate-x-6"}`}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-2 gap-3">
                    <span>{cert.issuer}</span>
                    <span className="inline-block">⦁</span>
                    <time>{cert.date}</time>
                  </div>

                  <p className="text-gray-600 mt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View credential
                    </a>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-6"
          onClick={() => setLightbox({ open: false, src: "", title: "" })}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="font-semibold">{lightbox.title}</h4>
              <button
                onClick={() => setLightbox({ open: false, src: "", title: "" })}
                className="text-gray-600 hover:text-gray-900"
                aria-label="close"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img src={lightbox.src} alt={lightbox.title} className="w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
