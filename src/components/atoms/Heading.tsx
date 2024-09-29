import { HeadingProps } from "@/types/ComponentInterfaces";
import React from "react";

export const Heading: React.FC<HeadingProps> = ({
  text,
  size = "small",
  className,
}) => {
  const sizeStyles = {
    small: "text-lg",
    medium: "text-4xl",
    large: "text-5xl",
  };

  return <h4 className={`${sizeStyles[size]} ${className}`}>{text}</h4>;
};