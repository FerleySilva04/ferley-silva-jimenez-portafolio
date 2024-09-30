import React, { useCallback, useEffect } from "react";
import { Heading } from "../atoms/Heading";
import { Description } from "../atoms/Description";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";

export const Portafolio = () => {
  const projects = [
    {
      title: "Calculadora",
      description:
        "Esta calculadora ha sido desarrollada utilizando HTML, CSS, y JavaScript, permitiendo realizar operaciones básicas como suma, resta, multiplicación, y división.",
      link: "https://github.com/FerleySilva04/calculadora",
      image: "images/calculadora.svg",
    },
    {
      title: "Portafolio",
      description:
        "Este portafolio personal ha sido desarrollado aplicando conocimientos de desarrollo web frontend, utilizando tecnologías modernas como NextJS, React y TailwindCSS.",
      link: "https://github.com/FerleySilva04/ferley-silva-portafolio.git",
      image: "images/portafolio.svg",
    },
    {
      title: "ContacData",
      description:
        "Esta aplicación móvil, desarrollada en Kotlin utilizando Jetpack Compose, recolecta información personal del usuario a través de un formulario sencillo.",
      link: "https://github.com/FerleySilva04/LabsCM20242-Gr06.git",
      image: "images/phone.svg",
    },
  ];

  const TOTAL_PROJECTS = projects.length;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % TOTAL_PROJECTS);
    }
  }, [isAnimating, TOTAL_PROJECTS]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + TOTAL_PROJECTS) % TOTAL_PROJECTS);
    }
  }, [isAnimating, TOTAL_PROJECTS]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-2 py-2 bg-sky-100 mx-auto mb-4">
      <article className="flex flex-col justify-center items-center gap-1 mb-2">
        <Heading text="Proyectos" size="medium" className="font-bold" />
        <Description
          text="Durante mi carrera, he trabajado en diversos proyectos aplicando mis conocimientos en NextJS, TailwindCSS, React, CSS, y JavaScript, así como en el desarrollo de aplicaciones móviles en Android."
          className="w-full h-auto text-center text-justify px-4"
        />
      </article>
      <article className="relative w-full max-w-md overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <section className="flex flex-col justify-center items-center text-center gap-2 bg-background rounded-md p-6">
                <Image
                  width={100}
                  height={60}
                  className="object-contain"
                  src={project.image}
                  alt="Imagen del proyecto"
                  priority
                />
                <Heading text={project.title} className="font-bold text-lg" />
                <p className="leading-5 text-justify text-sm">{project.description}</p>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    text="Ir al proyecto →"
                    variant="link"
                    className="w-[140px] h-[36px]"
                  />
                </Link>
              </section>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-sky-600 rounded-full p-1 focus:outline-none text-white" // Cambiado p-1
          aria-label="Previous slide"
          style={{ zIndex: 10, width: '32px', height: '32px' }} // Cambiado a 32px
        >
          <ArrowLeft size={16} /> {/* Tamaño de la flecha */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-sky-600 rounded-full p-1 focus:outline-none text-white" // Cambiado p-1
          aria-label="Next slide"
          style={{ zIndex: 10, width: '32px', height: '32px' }} // Cambiado a 32px
        >
          <ArrowRight size={16} /> {/* Tamaño de la flecha */}
        </button>
      </article>
    </div>
  );
};
