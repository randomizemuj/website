/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

     
      screens: {
        // 'xs':'400px',
        // // => @media (min-width: 400px) { ... }

        'xxsm': '375px', // min-width
        'xsm': '390px', // min-width
        'md': '700px' // min-width
      },
      fontSize: {
        '10xl': '10rem',
      },
      
      letterSpacing: {
        tightest: '-.06em',
      },
      gradientColorStops: {
        'gradient-1-start': '#007CF0',
        'gradient-1-end': '#00DFD8',
        'gradient-2-start': '#7928CA',
        'gradient-2-end': '#FF0080',
        'gradient-3-start': '#FF4D4D',
        'gradient-3-end': '#F9CB28',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
        text: 'text 5s ease infinite'
      },
      height: {
        100: '30rem',
      },
    },
 },
  plugins: [],
}

