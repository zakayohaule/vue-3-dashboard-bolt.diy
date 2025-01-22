module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5'
        },
        secondary: {
          DEFAULT: '#6b7280',
          dark: '#4b5563'
        }
      }
    }
  },
  plugins: []
}
