/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        primaryDark: "#1e40af",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      boxShadow: {
        premium: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};