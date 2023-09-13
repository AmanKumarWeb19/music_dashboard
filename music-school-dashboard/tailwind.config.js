// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-background': 'rgb(230, 252, 237)',
      },
    },
  },
  plugins: [],
};
