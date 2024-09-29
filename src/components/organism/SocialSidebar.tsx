import React from "react";
import { SocialMedia } from "@/components/molecules/SocialMedia";

export default function SocialSideBar() {
  return (
    <section className="w-24 h-screen sticky top-0 flex justify-center items-head shadow-lg bg-sky-100"> 
      <SocialMedia />
    </section>
  );
}

