module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#fff",
          text: "#333",
        },
        dark: {
          background: "#333",
          text: "#fff",
        },
      },
    },
  },
  plugins: [],
};
