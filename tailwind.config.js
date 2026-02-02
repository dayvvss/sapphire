/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        sapphire: {
          50: "#f5f7ff",
          100: "#e9ecff",
          200: "#cfd7ff",
          300: "#a8b6ff",
          400: "#7c90ff",
          500: "#4f6bff",
          600: "#3f56db",
          700: "#3244b0",
          800: "#28368a",
          900: "#212d6e"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
