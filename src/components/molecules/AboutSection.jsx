import { aboutInfo } from "@/constants/AboutInformation";
import React from "react";

export const About = () => {
  return (
    <>
      {aboutInfo.map((info, index) => (
        <section
          key={index}
          className="flex justify-between items-center h-5 w-full text-sm"
        >
          <strong>{info.attribute}</strong>
          <span>{info.value}</span>
        </section>
      ))}
    </>
  );
};
