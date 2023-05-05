const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// ------------------------------
// Color themes
// ------------------------------
const themes = {
  'base': {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#d0d7f7',
    300: '#aab9ff',
    400: '#8994ff',
    500: '#6b70fc',
    600: '#554fee',
    700: '#453ccd',
    800: '#3830a2',
    900: '#272173',
  },
  'theme-1': {
    50: '#ecfdf4',
    100: '#c9f2de',
    200: '#9de9c6',
    300: '#56d0a0',
    400: '#00b380',
    500: '#009268',
    600: '#007955',
    700: '#006344',
    800: '#005038',
    900: '#003422',
  },
  'theme-2': {
    50: '#fdf2f8',
    100: '#f7e2ee',
    200: '#f8cce5',
    300: '#f5a4d0',
    400: '#f271b5',
    500: '#e13d90',
    600: '#c31667',
    700: '#a1004b',
    800: '#84003d',
    900: '#590028',
  },
}

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--primary-50': getRgbChannels(themes.base['50']),
        '--primary-100': getRgbChannels(themes.base['100']),
        '--primary-200': getRgbChannels(themes.base['200']),
        '--primary-300': getRgbChannels(themes.base['300']),
        '--primary-400': getRgbChannels(themes.base['400']),
        '--primary-500': getRgbChannels(themes.base['500']),
        '--primary-600': getRgbChannels(themes.base['600']),
        '--primary-700': getRgbChannels(themes.base['700']),
        '--primary-800': getRgbChannels(themes.base['800']),
        '--primary-900': getRgbChannels(themes.base['900']),
      },
    })

    Object.entries(themes).forEach(([key, value]) => {
      addBase({
        [`[data-theme="${key}"]`]: {
          '--primary-50': getRgbChannels(value['50']),
          '--primary-100': getRgbChannels(value['100']),
          '--primary-200': getRgbChannels(value['200']),
          '--primary-300': getRgbChannels(value['300']),
          '--primary-400': getRgbChannels(value['400']),
          '--primary-500': getRgbChannels(value['500']),
          '--primary-600': getRgbChannels(value['600']),
          '--primary-700': getRgbChannels(value['700']),
          '--primary-800': getRgbChannels(value['800']),
          '--primary-900': getRgbChannels(value['900']),
        },
      })
    })
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            50: 'rgb(var(--primary-50) / <alpha-value>)',
            100: 'rgb(var(--primary-100) / <alpha-value>)',
            200: 'rgb(var(--primary-200) / <alpha-value>)',
            300: 'rgb(var(--primary-300) / <alpha-value>)',
            400: 'rgb(var(--primary-400) / <alpha-value>)',
            500: 'rgb(var(--primary-500) / <alpha-value>)',
            600: 'rgb(var(--primary-600) / <alpha-value>)',
            700: 'rgb(var(--primary-700) / <alpha-value>)',
            800: 'rgb(var(--primary-800) / <alpha-value>)',
            900: 'rgb(var(--primary-900) / <alpha-value>)',
          },
        },
      },

      fontSize: {
        'xs':  ['var(--font-size-xs)',   { lineHeight: '1' }],
        'sm':  ['var(--font-size-sm)',   { lineHeight: '1.25' }],
        'base':['var(--font-size-base)', { lineHeight: '1.25' }],
        'lg':  ['var(--font-size-lg)',   { lineHeight: '1' }],
        'xl':  ['var(--font-size-xl)',   { lineHeight: '1' }],
        '2xl': ['var(--font-size-2xl)',  { lineHeight: '1' }],
        '3xl': ['var(--font-size-3xl)',  { lineHeight: '1' }],
        '4xl': ['var(--font-size-4xl)',  { lineHeight: '1' }],
        '5xl': ['var(--font-size-5xl)',  { lineHeight: '1' }],
        '6xl': ['var(--font-size-6xl)',  { lineHeight: '1' }],
        '7xl': ['var(--font-size-7xl)',  { lineHeight: '1' }],
        '8xl': ['6rem',                  { lineHeight: '1' }],
        '9xl': ['8rem',                  { lineHeight: '1' }],
      },

      padding: {
        '0':   '0',
        'px':  '1px',
        '0.5': 'var(--spacing-05)',
        '1':   'var(--spacing-1)',
        '1.5': 'var(--spacing-05)',
        '2':   'var(--spacing-2)',
        '2.5': 'var(--spacing-25)',
        '3':   'var(--spacing-3)',
        '3.5': 'var(--spacing-35)',
        '4':   'var(--spacing-4)',
        '5':   'var(--spacing-5)',
        '6':   'var(--spacing-6)',
        '7':   'var(--spacing-7)',
        '8':   'var(--spacing-8)',
        '9':   'var(--spacing-9)',
        '10':  'var(--spacing-10)',
        '11':  'var(--spacing-11)',
        '12':  'var(--spacing-12)',
        '14':  'var(--spacing-14)',
        '16':  'var(--spacing-16)',
        '20':  'var(--spacing-20)',
        '24':  'var(--spacing-24)',
        '28':  'var(--spacing-28)',
        '32':  'var(--spacing-32)',
        '36':  'var(--spacing-36)',
        '40':  'var(--spacing-40)',
        '44':  'var(--spacing-44)',
        '48':  'var(--spacing-48)',
        '52':  'var(--spacing-52)',
        '56':  'var(--spacing-56)',
        '60':  'var(--spacing-60)',
        '64':  'var(--spacing-64)',
        '72':  'var(--spacing-72)',
        '80':  'var(--spacing-80)',
        '96':  'var(--spacing-96)',
      },
    },
  }
)
