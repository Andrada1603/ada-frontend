module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#53B0AE',
        accent: '#F74371',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
    },
  },
  purge: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
