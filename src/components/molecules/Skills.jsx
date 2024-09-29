import { programmingLanguages } from "@/constants/Skills";
import React from "react";
import { ProgressBar } from "../atoms/StatusBar";

export const Skills = () => {
  return (
    <>
      {programmingLanguages.map((language, index) => (
        <div key={index} className="w-full">
          <ProgressBar
            percentage={language.level}
            language={language.pLanguage}
          />
        </div>
      ))}
    </>
  );
};
