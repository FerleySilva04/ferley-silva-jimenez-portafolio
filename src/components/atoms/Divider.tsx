import React from "react";
import { DividerProps } from "@/types/ComponentInterfaces";

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  thickness = "1px",
  length = "80%",
}) => {
  /* Por defecto el separador es horizontal */
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`${isVertical ? "my-2 " : "mx-2 my-2 "} bg-gray-400 w-full`}
      style={{
        width: isVertical ? thickness : length,
        height: isVertical ? length : thickness,
      }}
    />
  );
};
