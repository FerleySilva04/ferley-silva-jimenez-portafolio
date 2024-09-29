import React from "react";
import { Heading } from "../atoms/Heading";
import { Description } from "../atoms/Description";
import { Button } from "../atoms/Button";
import Image from "next/image";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl bg-sky-100 shadow-lg gap-6 p-8 rounded-lg border border-sky-300">
      <section className="flex flex-col gap-6 flex-1">
        <div className="text-4xl font-semibold text-sky-800">
          <Heading text="Soy Ferley Silva" size="large" />
          <span className="text-sky-700">
            Desarrollador <strong className="text-sky-600">Backend y Frontend.</strong>
          </span>
        </div>
        <Description text="Actualmente soy estudiante de Ingeniería en Sistemas en la Universidad de Antioquia." />
        <Description text="Apasionado por el diseño de interfaces y enfocado en mejorar la experiencia del usuario en la web." />
        <Button
          text="Contrátame →"
          className="w-[154px] h-[40px] text-center bg-sky-800 text-white rounded-md hover:bg-sky-700 transition duration-200"
          email="ferley.silvaj@udea.edu.co"
        />
      </section>
      <aside className="flex-shrink-0">
        <Image
          className="object-cover rounded-full border-2 border-sky-300"
          width={150}
          height={150}
          sizes="100%"
          src={"/images/me.jpg"}
          alt="Foto en la que aparezco yo"
          priority={false}
        />
      </aside>
    </div>
  );
};
