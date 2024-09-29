import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Color de fondo suave
        foreground: "var(--foreground)", // Color de texto oscuro
        accent: "var(--accent)", // Color de acento para botones y tarjetas
        buttonHover: "var(--button-hover)", // Color para el hover del botón
        // Nueva paleta de colores basada en #ADD8E6
        sky: {
          100: "#ADD8E6", // Azul claro
          200: "#87CEEB", // Azul cielo
          300: "#00BFFF", // Azul profundo
          400: "#1E90FF", // Azul dodger
          500: "#4682B4", // Azul acero
          600: "#4169E1", // Azul royal
          700: "#6495ED", // Azul cornflower
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Fuente principal
      },
    },
  },
  plugins: [],
};

export default config;
