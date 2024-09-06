/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // Ensure this path is included
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1240px',
        '2xl': '1400px',
      },
    },
    backgroundSize: {
      '50%': '50%',
      '80%': '80%',
    },
    extend: {
      shadow: {
        'primary-glow': 'var(--shadow-elevation-low)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(45deg, hsl(var(--primary)) , hsl(var(--secondary)))',
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
        hyperdrive: ['var(--font-hyperdrive)', 'sans-serif'],
      },
      fontSize: {
        h1: 'clamp(var(--font-size-h1-mobile), 5vw ,var(--font-size-h1))',
        h2: 'clamp(var(--font-size-h2-mobile), 5.5vw, var(--font-size-h2))',
        'h2.5':
          'clamp(var(--font-size-h2-mobile), 5.5vw, var(--font-size-h2-5))',
        h3: 'clamp(var(--font-size-h3-mobile), 3vw, var(--font-size-h3))',
        h4: 'clamp(calc(var(--font-size-body-mobile)+1rem), 4vw, calc(var(--font-size-body)+1rem))',
        banner: 'clamp(1rem, 4vw, 3.25rem)',
        body: 'clamp(var(--font-size-body-mobile), 2vw, var(--font-size-body))',
        'h1-mobile': 'var(--font-size-h1-mobile)',
        'h2-mobile': 'var(--font-size-h2-mobile)',
        'h3-mobile': 'var(--font-size-h3-mobile)',
        'body-mobile': 'var(--font-size-body-mobile)',
        quote:
          'clamp(var(--font-size-quote-mobile), 4vw, var(--font-size-quote))',
        'quote-sm':
          'clamp(var(--font-size-quote-mobile ), 4vw, calc(var(--font-size-quote) - 0.5rem))',
        'quote-mobile': 'var(--font-size-quote-mobile)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-border-gradient-radius'),
  ],
};
