/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A12",
        surface: "#14141F",
        surface2: "#1B1B29",
        violet: "#7C3AED",
        magenta: "#EC4899",
        cyan: "#22D3EE",
        mist: "#9CA3AF",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #7C3AED 0%, #EC4899 100%)",
      },
    },
  },
  plugins: [],
};
