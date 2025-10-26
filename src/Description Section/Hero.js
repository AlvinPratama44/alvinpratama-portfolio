import React from "react";
import Image1 from "../Image/Image Alvin.jpg";

export default function Hero() {
  return (
    // Tambahkan pt-32 agar Hero turun sejajar dengan navbar fixed
    <section className="max-w-7xl mx-auto pt-8 bg-gray-10">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Kiri - Teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-8xl md:text-6xl font-bold text-gray-800 leading-tight">
            Alvin Pratama Putra
          </h1>

          <p className="text-2xl md:text-xl text-black-600 mt-2">
            Web Design & UI/UX Designer
          </p>

          <p className="mt-5 text-lg text-gray-600">
            Hi, I'm Alvin Pratama Putra, a passionate Web Design and UI/UX Designer. I'm a Binus University graduate currently sharpening my skills through bootcamps and Online Learning. I enjoy creating clean, user-friendly designs that solve real problems.
            <br/>
            Welcome to my portfolio!
          </p>

          {/* Tombol Aksi */}
          <div className="mt-5 flex justify-center md:justify-start gap-4">
            <a
  href="https://linkedin.com/in/alvinpratamap"
  target="_blank"
  rel="noopener noreferrer"
  className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center 
             rounded-xl cursor-pointer relative overflow-hidden transition-all 
             duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
             before:absolute before:top-0 before:-left-full before:w-full before:h-full 
             before:bg-gradient-to-r before:from-[#21409D] before:to-[#2561EF] 
             before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
             before:rounded-xl hover:before:left-0 text-white"
>
  Connect
</a>


            <button
              className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center 
                         rounded-xl cursor-pointer relative overflow-hidden transition-all 
                         duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
                         before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                         before:bg-gradient-to-r before:from-[#228727] before:to-[#41AE43] 
                         before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
                         before:rounded-xl hover:before:left-0 text-white"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Kanan - Gambar */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={Image1}
            alt="Image Hero"
            className="framer-motion w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Garis Pembatas */}
      <div className="border-t border-[1px]"></div>
    </section>
  );
}
