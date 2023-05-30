/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  variants:{
   extend:{
    backgroundColor:['focus'],
    translate:['hover'],
   },
  
  },
  theme: {
    extend: {}
    ,
  },
  plugins: [],
}

