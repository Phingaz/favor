/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000009",
        secondary: "#fff",
        main: "#4EA5D9",
        links: "#0FF4C6",
      },
      animation: {
        open: "open_ham 0.4s cubic-bezier(0.37, 1.62, 0.9, 0.74)",
        close: "close_ham 0.5s ease-in-out forwards",
      },
      keyframes: {
        open_ham: {
          from: { width: "0", display: "none", opacity: "0" },
          to: { width: "[40%]", display: "flex", opacity: "1" },
        },
        close_ham: {
          from: { width: "[40%]", display: "flex", opacity: "1" },
          to: { width: "0", display: "none", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
