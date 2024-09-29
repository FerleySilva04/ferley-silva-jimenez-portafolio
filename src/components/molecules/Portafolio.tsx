import React from "react";
import { Heading } from "../atoms/Heading";
import { Description } from "../atoms/Description";
import Image from "next/image";
import { Button } from "../atoms/Button";

export const Portafolio = () => {
  const projects = [
    {
      title: "Calculadora",
      description:
        "Calculadora que realiza operaciones basicas de suma, resta, multiplicación y división, llevada a cabo con HTML, CSS y JavaScript. ",
      link: "https://github.com/FerleySilva04/calculadora",
      image: "images/calculadora.svg",
    },
    {
      title: "Portafolio",
      description:
        "Portafolio personal, aplicando conocimientos de desarrollo web frontend, usando NextJS, React, Tailwind",
      link: "https://github.com/FerleySilva04/ferley-silva-portafolio.git",
      image: "images/portafolio.svg",
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-4 py-4">
      <article className="flex flex-col justify-center items-center gap-2 mb-4">
        <Heading text="Proyectos" size="medium" className="font-sans" />
        <Description
          text="Estos son algunos de mis proyectos en los que he trabajado, usando NextJS, TailwindCSS, React, CSS, JavaScript"
          className="w-[480px] h-[68px] text-center"
        />
      </article>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-background rounded-md p-4 shadow-md">
            <Image
              width={600}
              height={200}
              className="object-contain h-40 mb-2"
              src={project.image}
              alt="Imagen del proyecto"
              priority
            />
            <Heading text={project.title} className="font-sans mb-2" />
            <p className="leading-5 mb-4">{project.description}</p>
            <Button
              text="Ir al proyecto →"
              variant="link"
              className="w-[180px] h-[40px]"
            />
          </div>
        ))}
      </article>
    </div>
  );
};
