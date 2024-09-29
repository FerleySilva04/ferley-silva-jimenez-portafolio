import React from "react";
import { Divider } from "@/components/atoms/Divider";
import { About } from "@/components/molecules/AboutSection";
import { Languages } from "@/components/molecules/ProgLanguage";
import { Profile } from "@/components/molecules/UserProfile";
import { Skills } from "@/components/molecules/Skills";

export default function SideBar() {
  return (
    <section className="w-72 h-screen sticky top-0 flex flex-col justify-center items-center shadow-lg px-4 bg-sky-100"> {/* Cambiado a bg-sky-100 */}
      <Profile />
      <Divider length="80%" />
      <About />
      <Divider length="100%" />
      <Languages />
      <Divider length="100%" />
      <Skills />
    </section>
  );
}

