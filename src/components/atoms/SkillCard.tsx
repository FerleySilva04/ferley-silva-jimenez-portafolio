import { SkillCardProps } from "@/types/ComponentInterfaces";
import React from "react";
import { Heading } from "./Heading";
import { Description } from "./Description";

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article className="flex flex-col justify-center items-center bg-sky-100 p-4 gap-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 ease-out">
      <figure className="text-sky-400 text-3xl">{icon}</figure> {/* Icono en color azul */}
      <Heading text={title} className="font-sans text-sky-600" /> {/* Título en color azul oscuro */}
      <Description text={description} className="text-sm text-sky-500/70" /> {/* Descripción en un tono más suave */}
    </article>
  );
};

