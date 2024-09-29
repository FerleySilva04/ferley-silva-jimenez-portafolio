import React from "react";
import { Heading } from "../atoms/Heading";
import { GithubIcon, Facebook } from "lucide-react"; // Asegúrate de que FacebookIcon esté disponible en lucide-react
import { CircularIcon } from "../atoms/CircularIcon";

export const SocialMedia = () => {
  const socialsLinks = [
    {
      socialName: "GitHub",
      url: "https://github.com/FerleySilva04",
      icon: <GithubIcon />,
    },
    {
      socialName: "Facebook",
      url: "https://www.facebook.com/ferleyjose.silvajimenez.1/", // Cambia "tu-usuario" por tu nombre de usuario real de Facebook
      icon: <Facebook />, // Asegúrate de que este icono exista
    },
  ];

  return (
    <section className="flex flex-col justify-head items-head">
      <Heading text="Links" className="font-sans mb-4" />
      {socialsLinks.map((social, index) => (
        <CircularIcon
          url={social.url}
          icon={social.icon}
          alt={social.socialName}
          key={index}
        />
      ))}
    </section>
  );
};
