import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/league-spartan'
import '@fontsource-variable/noto-sans-tc'

export default extendTheme({
  // fonts: {
  // 	heading: `'Noto Sans TC Variable', '
  // 	League Spartan Variable',sans-serif`,
  // 	body: `'Noto Sans TC Variable', '
  // 	League Spartan Variable',sans-serif`,
  // },
  styles: {
    global: () => ({
      body: {
        bg: '#F5F3ED',
      },
    }),
  },
  space: {
    px: '1px',
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    '2xl': '2.5rem',
    '3xl': '4rem',
    '4xl': '5rem',
    '5xl': '6.25rem',
  },
  textStyles: {
    h1: {
      fontSize: '64px',
      fontWeight: '700',
      lineHeight: '96px',
      letterSpacing: '0.06em',
    },
    h2: {
      fontSize: ['48px', '40px'],
      fontWeight: '500',
      lineHeight: '73px',
      letterSpacing: '0.06em',
    },
    h3: {
      fontSize: { base: '24px', sm: '28px' },
      fontWeight: ['700', '500'],
      lineHeight: '60px',
      letterSpacing: '0.06em',
    },
    h4: {
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '42px',
      letterSpacing: '0.06em',
    },
    content: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '29px',
      letterSpacing: '0.06em',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '21px',
      letterSpacing: '0.06em',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '18px',
      letterSpacing: '0.06em',
    },
  },
  fontSizes: {
    lg: '18px',
    xl: '40px',
  },

  colors: {
    white: '#fff',
    primary: '#F5F3ED',
    secondary: '#313B36',
    accent: '#C28145',
    beige: {
      100: '#EDE9E1',
      200: '#E3E1DB',
      300: '#D7CFBF',
      400: '#9D9791',
    },
    'dark-green': '#585D57',
  },
})
