import { CircularIconProps } from "@/types/ComponentInterfaces";
import Link from "next/link";
import React from "react";

export const CircularIcon: React.FC<CircularIconProps> = ({ icon, url, alt }) => {
  return (
    <Link
      className="rounded-full flex items-center justify-center w-12 h-12 my-1 bg-blue-500 text-white shadow-md hover:scale-110 duration-200 transition-transform ease-in"
      href={url}
      aria-label={alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
};
