module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  screen: {
    '2sm': '320px', // min-width: 320px
      'sm': '375px', // min-width: 375px
      'md': '425px', // min-width: 425px
      'lg': '768px', // min-width: 768px
      'xl': '1024px', // min-width: 1024px 
      '2xl': '1440px', // min-width: 1440px
    
  },
  theme: {
    extend: {},
  },
  plugins: [],
}