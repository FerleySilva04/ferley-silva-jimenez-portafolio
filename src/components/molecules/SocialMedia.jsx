import React from "react";
import { Heading } from "../atoms/Heading";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"; // Importa los íconos de react-icons
import { CircularIcon } from "../atoms/CircularIcon";

export const SocialMedia = () => {
  const socialsLinks = [
    {
      socialName: "GitHub",
      url: "https://github.com/FerleySilva04",
      icon: <FaGithub className="w-8 h-8" />, // Tamaño aumentado
    },
    {
      socialName: "Facebook",
      url: "https://www.facebook.com/ferleyjose.silvajimenez.1/",
      icon: <FaFacebook className="w-8 h-8" />, // Tamaño aumentado
    },
    {
      socialName: "LinkedIn",
      url: "https://www.linkedin.com/in/ferley-jose-silva-jimenez-52046b330/",
      icon: <FaLinkedin className="w-8 h-8" />, // Tamaño aumentado
    },
  ];

  return (
    <section className="flex flex-col justify-start items-start">
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
