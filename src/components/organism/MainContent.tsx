import React from "react";
import { Education } from "@/components/molecules/Education";
import { Footer } from "@/components/molecules/Footer";
import { Knowledge } from "@/components/molecules/Knowledge";
import { ProfileCard} from "@/components/molecules/ProfileCard";
import { Portafolio } from "@/components/molecules/Portafolio";

export default function MainContent() {
  return (
    <section className="flex-1 h-full overflow-y-auto flex flex-col items-center space-y-4">
      <ProfileCard/>
      <Knowledge />
      <Education />
      <Portafolio />
      <Footer />
    </section>
  );
}