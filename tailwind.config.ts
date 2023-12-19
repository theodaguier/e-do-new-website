import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

/*

@layer base {
  @font-face {
    font-family: "abc-favorit light";
    font-style: normal;
    src: url("./../public/fonts/ABCFavorit-Light.woff2") format("woff2"),
      url("./../public/fonts/ABCFavorit-Light.woff") format("woff");
    font-weight: 300;
  }
  @font-face {
    font-family: "abc-favorit regular";
    font-style: normal;
    src: url("./../public/fonts/ABCFavorit-Regular.woff2") format("woff2"),
      url("./../public/fonts/ABCFavorit-Regular.woff") format("woff");
    font-weight: 400;
  }
  @font-face {
    font-family: "abc-favorit bold";
    font-style: normal;
    src: url("./../public/fonts/ABCFavorit-Bold.woff2") format("woff2"),
      url("./../public/fonts/ABCFavorit-Bold.woff") format("woff");
    font-weight: 700;
  }
 @font-face {
    font-family: "Wulkan Light Italic";
    font-style: light;
    src: url("./../public/fonts/Wulkan-Display-Light-Italic.woff2")
        format("woff2"),
      url("./../public/fonts/Wulkan-Display-Light-Italic.woff") format("woff");
  }
  @font-face {
    font-family: "Wulkan Light";
    font-style: light;
    src: url("./../public/fonts/Wulkan-Display-Light.woff2") format("woff2"),
      url("./../public/fonts/Wulkan-Display-Light.woff") format("woff");
  }
    @font-face {
    font-family: "favorit mono";
    font-style: normal;
    src: url("./../public/fonts/ABCFavoritMono-Book.woff2") format("woff2"),
      url("./../public/fonts/ABCFavoritMono-Book.woff") format("woff");
  }
}

*/

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    colors: {
      black: "#121212",
      white: "#ffffff",
      blue: "#3437ff",
      pink: "#dcb0ff",
      orange: "#FF6347",
      "grey-dark": "#6c6c70",
      "grey-light": "#aeaeb2",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "3.75rem",
      "6xl": "4.5rem",
      "7xl": "6rem",
      "8xl": "8rem",
    },
    fontFamily: {
      "abc-favorit-light": ['"abc-favorit light"', "sans-serif"],
      "abc-favorit-regular": ['"abc-favorit regular"', "sans-serif"],
      "abc-favorit-bold": ['"abc-favorit bold"', "sans-serif"],
      "wulkan-light": ['"wulkan light"', "sans-serif"],
      "wulkan-light-italic": ['"wulkan light italic"'],
      "favorit-mono": ['"favorit mono"'],
    },
    borderRadius: {
      none: "0",
      xs: "0.3125rem",
      sm: "0.5rem",
      default: "1rem",
      lg: "1.125rem",
      xl: "1.1875rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.75rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
