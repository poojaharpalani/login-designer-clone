/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "Graphik",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
          "sans-serif",
        ],
      },
      strokeWidth: {
        custom: "0.3225",
      },
    },
    plugins: [],
  },
};
