/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      colors: {
        malachite: "#04E762",
        darkSpringGreen: "#306B34",
        celestialBlue: "#00A1E4",
        mauve: "#DEC0F1",
        darkSlateGreen: "#1C5253",
      },
      fontFamily: {
        jetBrainsMono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
