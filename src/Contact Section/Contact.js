import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
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
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16 bg-gray-50"
    >
      <h1
        className={`text-4xl font-bold text-center mb-12 text-gray-800 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div
          className={`transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have a project in mind or just want to say hi? Feel free to contact me via the form or directly.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📧 Email: <a href="mailto:your@email.com" className="text-blue-600 hover:underline">a.pratamap44@gmail.com</a></li>
            <li>📞 Phone: +62 821 2275 8433</li>
            <li>📍 Location: Jakarta, Indonesia</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          className={`bg-white shadow-md rounded-lg p-6 transition-all duration-700 delay-400
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
