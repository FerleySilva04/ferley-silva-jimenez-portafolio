import React from "react";
import { DescriptionProps } from "@/types/ComponentInterfaces";
import classNames from "classnames";

export const Description: React.FC<DescriptionProps> = ({
  text,
  className,
}) => {
  return (
    <p className={classNames("text-base text-gray-600", className)}>{text}</p>
  );
};

