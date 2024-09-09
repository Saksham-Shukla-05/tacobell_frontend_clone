/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#303030",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "custom-black": "0  3px 10px rgba(0, 0, 0, 0.7)", // Customize as needed
      },
      transitionDelay: {
        300: "300ms",
        500: "500ms",
        700: "700ms",
        900: "900ms",
      },
      borderRadius: {
        "5xl": "50%",
      },
      screens: {
        myScreenSize: "525px", // Custom 'custom' breakpoint
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
};
