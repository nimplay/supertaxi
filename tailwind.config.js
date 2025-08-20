/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Agregar la fuente personalizada
      fontFamily: {
        tech: ['"ShareTech"', "ui-monospace", "monospace"],
        exo2: ['"Exo2"', "ui-sans-serif", "sans-serif"],
      },
      // Agregar los colores personalizados
      colors: {
        navy: {
          DEFAULT: "#405673",
          light: "#4d6590",
          dark: "#32445c",
        },
        sky: {
          DEFAULT: "#88D4F2",
          light: "#a5e1fa",
          dark: "#6cb4d9",
        },
        gold: {
          DEFAULT: "#F2B33D",
          light: "#f5c362",
          dark: "#d99a25",
        },
        orange: {
          DEFAULT: "#BF6B04",
          light: "#dd8015",
          dark: "#985503",
        },
        brown: {
          DEFAULT: "#8C4303",
          light: "#a85a16",
          dark: "#6c3502",
        },
      },
    },
  },
  plugins: [],
};
