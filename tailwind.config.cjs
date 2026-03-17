module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--getgrant-blue)',
        'primary-foreground': 'var(--primary-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
