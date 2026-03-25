/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        flood: { 50:'#eef7ff',100:'#d9edff',200:'#bce0ff',300:'#8eceff',400:'#59b3ff',500:'#2e91ff',600:'#1570f5',700:'#0d58e1',800:'#1247b6',900:'#143f8f' },
        storm: { 900:'#060c14',800:'#0a1320',700:'#0e1b2e',600:'#14243d',500:'#1b3050' },
        bali:  { gold:'#c9a84c',bronze:'#8b5e1e',earth:'#5c3d1e',terrace:'#4a7c59',forest:'#2d5a3d',stone:'#7a7060',saffron:'#e8862a' },
      },
    },
  },
  plugins: [],
}