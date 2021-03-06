const defaultSans = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"'
]

const defaultSerif = [
  'Georgia',
  'Cambria',
  '"Times New Roman"',
  'Times',
  'serif'
]

module.exports = {
  purge: ['./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.5rem'
      },
      spacing: {
        14: '3.375rem'
      }
    },
    fontFamily: {
      display: ['Inter', ...defaultSans],
      body: ['Inter', ...defaultSerif]
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.900'),
          blockquote: {
            borderLeftColor: theme('colors.gray.700')
          },
          'code::before': {
            content: ''
          },
          'code::after': {
            content: ''
          },
          'ol > li::before': {
            color: theme('colors.gray.700')
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.700')
          }
        }
      }
    })
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
