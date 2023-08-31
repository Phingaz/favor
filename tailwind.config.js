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
        close: "close_ham 0.5s ease",
      },
      keyframes: {
        open_ham: {
          from: { width: "0", opacity: "0", display: "none" },
          to: { width: "[40%]", opacity: "1", display: "flex" },
        },
        close_ham: {
          from: { width: "[40%]", opacity: "1", display: "flex" },
          to: { width: "0", opacity: '0', display: 'none'   },
        },
      },
    },
  },
  plugins: [],
};
