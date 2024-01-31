/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height:{
        '100':"28rem",
        '200':"45rem",
        '150':"35rem"
      },
      width:{
        '100':"35rem"
      },
     
    },
  },
  plugins: [],
}

