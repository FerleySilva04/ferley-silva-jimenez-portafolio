import Image from "next/image";
import React from "react";
import { Heading } from "@components/atoms/Heading";
import { Description } from "../atoms/Description";

export const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <figure className="relative">
        <Image
          className="rounded-full shadow-md"
          width={100}
          height={100}
          sizes="100dvh"
          src={"/images/Ferley.png"}
          alt="Foto de perfil"
          priority={false}
        />
        {/* Puntito verde */}
        <span className="absolute top-1 left-1 w-4 h-4 bg-cofio-400 rounded-full"></span>
      </figure>
      < Heading text="Ferley Silva" />
      <Description text="Estudiante" />
    </section>
  );
};
