https://www.youtube.com/watch?v=T63nY70eZF0

npx create-next-app@latest --experimental-app

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

content: [

    "./app/**/*.{js,ts,jsx,tsx}",

    "./pages/**/*.{js,ts,jsx,tsx}",

    "./components/**/*.{js,ts,jsx,tsx}",

---

npm i @next/font
Adding variable to better manage fonts on the project
(result: bad solution at the moment)

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['700', '600'],
  variable: '--font-redHat',
})

extend: {
      fontFamily: {
        redHat: ["var(--font-redHat"],
      },

API from:
https://www.themoviedb.org/

---

update next.config.js for images domains

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig

---

add grid variable in Tailwind.config

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["var(--font-redHat"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
}

---