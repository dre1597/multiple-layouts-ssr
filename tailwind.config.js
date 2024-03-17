/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    borderRadius: {
      full: '9999px',
      pill: '500px',
      xl: 'calc(var(--radius) * 5) /* 20px */',
      lg: 'calc(var(--radius) * 3) /* 12px */',
      md: 'calc(var(--radius) * 2) /* 8px */',
      sm: 'calc(var(--radius) + 2px) /* 6px */',
      xs: 'calc(var(--radius)) /* 4px */',
      none: '0px',
    },
    extend: {},
  },
  plugins: [],
};

