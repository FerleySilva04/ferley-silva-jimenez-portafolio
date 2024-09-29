import { ButtonProps } from "@/types/ComponentInterfaces";
import React from "react";
import classNames from "classnames";

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  size = "medium",
  className,
  email,
}) => {
  const variants = {
    default:
      "bg-accent text-white hover:bg-button-hover rounded-md shadow-md py-2 transition duration-300 transform hover:scale-105",
    outline:
      "border border-accent text-accent hover:bg-accent/20 rounded-md shadow-md py-2 transition duration-300",
    ghost: "text-accent bg-transparent hover:bg-accent/10 rounded-md py-2 transition duration-300",
    link: "text-accent bg-transparent hover:underline hover:underline-offset-4 px-0 m-0",
  };

  const sizes = {
    small: "px-2 text-sm",
    medium: "px-4 text-base",
    large: "px-6 text-lg",
  };

  const commonClasses = classNames(variants[variant], sizes[size], className);

  return email ? (
    <a
      href={`mailto:${email}`}
      className={commonClasses}
    >
      {text}
    </a>
  ) : (
    <button className={commonClasses}>
      {text}
    </button>
  );
};
