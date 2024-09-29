import { StatusBarProps } from "@/types/ComponentInterfaces";
import React from "react";

// Componente de barra de progreso que recibe propiedades de porcentaje y lenguaje
export const ProgressBar: React.FC<StatusBarProps> = ({
  percentage,
  language,
}) => {
  return (
    <section className="w-full">
      {/* Encabezado que muestra el lenguaje y el porcentaje */}
      <header className="flex justify-between text-base mb-1">
        <span className="text-foreground">{language}</span>
        <span className="text-foreground">{percentage} %</span>
      </header>
      {/* Contenedor de la barra de progreso */}
      <div className="w-full bg-gray-200 rounded-md h-2">
        <div
          className="bg-accent h-2 rounded-lg transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
};

