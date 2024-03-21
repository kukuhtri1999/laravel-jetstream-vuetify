import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./vendor/laravel/jetstream/**/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        sans: ['"Poppins"'],
        poppins: ['"Poppins"'],
        h1: ['"Poppins"'],
        display: ['"Poppins"'],
        body: ['"Poppins"'],
      },
      white: "#ffffff",
      primary: "#00a65a",
      primaryBg: "#b3ffce",
      secondary: "#8863f9",
    },
    screens: {
      sm: "440px",
      md: "768px",
      lg: "1280px",
    },
  },

  plugins: [forms, typography],
};
