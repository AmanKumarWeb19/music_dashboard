// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-background": "rgb(230, 252, 237)",
        "sidebar-background": "rgb(255,255,255)",
        "home-background": "rgb(254,223,225)",
        "course-background": "rgb(229,231,235)",
      },
    },
  },
  plugins: [],
};
