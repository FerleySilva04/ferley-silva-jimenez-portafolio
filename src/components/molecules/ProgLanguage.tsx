import React from "react";
import { languages } from "@/constants/Languages";
import { ProgressBar } from "../atoms/StatusBar";

export const Languages = () => {
  return (
    <>
      {languages.map((language, index) => (
        <div key={index} className="w-full">
          <ProgressBar percentage={language.level} language={language.idiom} />
        </div>
      ))}
    </>
  );
};
