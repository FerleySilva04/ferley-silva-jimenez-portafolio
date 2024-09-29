import React from "react";
import { Heading } from "../atoms/Heading";
import { Description } from "../atoms/Description";
import { Divider } from "../atoms/Divider";

export const Education = () => {
  const education = [
    {
      place: "Universidad de Antioquia",
      role: "Estudiante",
      dateStart: "Junio 2018",
      dateEnd: "Actualidad",
      title: "Pregrado en Ingeniería en Sistemas",
      description:
        "Estudiante de Ingeniería en Sistemas en la Universidad de Antioquia. Actualmente estoy en el nivel 8.",
    },
    {
      place: "TalentoTech",
      role: "Estudiante",
      dateStart: "Agosto 2024",
      dateEnd: "Actualidad",
      title: "Curso de Inteligencia Artificial",
      description:
        "Curso de inteligencia artificial utilizando Python.",
    },
    {
      place: "SENA",
      role: "Estudiante",
      dateStart: "Marzo 2012",
      dateEnd: "Marzo 2012",
      title: "Animación con Flash Professional CS5",
      description:
        "Curso de 40 horas enfocado en la animación con la herramienta Flash Professional CS5.",
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-4 py-4">
      <article className="flex flex-col justify-center items-center gap-2 mb-4">
        <Heading text="Educación" size="medium" className="font-sans" />
        <Description
          text="Soy estudiante de Ingeniería en Sistemas en la Universidad de Antioquia y me apasiona el aprendizaje continuo de tecnologías emergentes y herramientas innovadoras."
          className="w-[480px] h-[68px] text-center"
        />
      </article>
      <article className="mt-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-sky-100 gap-4 rounded-sm shadow-md"
          >
            <section className="flex p-8 items-start w-full">
              <div className="flex flex-col w-full">
                <Heading className="font-sans" size="small" text={edu.place} />
                <p className="flex gap-2 items-center">
                  <span className="text-sm">{edu.role}</span>
                  <span className="bg-cofio-500 px-2 text-white text-xs">{`${edu.dateStart} - ${edu.dateEnd}`}</span>
                </p>
              </div>
              <div className="flex flex-col w-full">
                <Heading className="font-sans" size="small" text={edu.title} />
                <Description text={edu.description} className="text-pretty leading-5" />
              </div>
            </section>
            <Divider />
          </div>
        ))}
      </article>
    </div>
  );
};
