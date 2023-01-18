/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce_slow 5s infinite",
      },
      keyframes: {
        bounce_slow: {
          "25%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "0%, 100%": {
            transform: "translateY(5%)",
            animationTimingFunction: "cubic-bezier(0.7, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
