import { Coffee } from "lucide-react"; // Cambiado a un ícono más acorde
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-sky-100 p-4 w-full"> {/* Color de fondo ajustado */}
      <p className="text-xl flex gap-4 items-center justify-center">
        <span>Creado con dedicación y pasión</span>
        <Coffee className="text-blue-700" /> {/* Ícono cambiado */}
        <span>
          por <strong>Ferley Silva</strong> © 2024 {/* Añadido el año */}
        </span>
      </p>
    </div>
  );
};
