import React from "react";
import { Heading } from "../atoms/Heading";
import { Description } from "../atoms/Description";
import { SkillCard } from "../atoms/SkillCard";
import {
  Code,
  Server,
  ClipboardCheck,
  TestTube,
  Users,
  GitBranch,
} from "lucide-react";

export const Knowledge = () => {
  const skills = [
    {
      title: "Desarrollo web",
      description: "TypeScript, Next.js, TailwindCSS, CSS, HTML, React.js",
      icon: <Code className="h-16 w-16 text-cofio-500" />,
    },
    {
      title: "Desarrollo backend",
      description: "Java, Python, Node.js",
      icon: <Server className="h-16 w-16 text-cofio-500" />,
    },
    {
      title: "Gestión de proyectos",
      description: "Scrum",
      icon: <ClipboardCheck className="h-16 w-16 text-cofio-500" />,
    },
    {
      title: "QA y Testing",
      description: "JUnit, Plan de calidad",
      icon: <TestTube className="h-16 w-16 text-cofio-500" />,
    },
    {
      title: "Habilidades blandas",
      description: "Comunicación, Adaptabilidad",
      icon: <Users className="h-16 w-16 text-cofio-500" />,
    },
    {
      title: "DevOps",
      description: "Git",
      icon: <GitBranch className="h-16 w-16 text-cofio-500" />,
    },
    
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-4 py-4">
      <article className="flex flex-col justify-center items-center gap-2 mb-4">
        <Heading text="Mi conocimiento" size="medium" className="font-sans" />
        <Description
          text="Mi experiencia abarca un amplio espectro de herramientas técnicas, apoyada por habilidades interpersonales que son vitales para un rendimiento destacado en el trabajo."
          className="w-[480px] h-[68px] text-center"
        />
      </article>
      <section className="grid grid-cols-3 gap-4 w-full">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </section>
    </div>
  );
};
