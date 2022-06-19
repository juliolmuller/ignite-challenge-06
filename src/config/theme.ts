import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '290px',
  md: '580px',
  lg: '870px',
  xl: '1160px',
  '2xl': '1450px',
};

const colors = {
  brand: {
    highlight: '#ffba08',
    highlight50: 'rgba(255, 186, 8, 0.5);',
  },
  dark: {
    black: '#000000',
    text: '#47585b',
    info: '#999999',
    info50: 'rgba(153, 153, 153, 0.5)',
  },
  light: {
    white: '#ffffff',
    text: '#f5f8fa',
    info: '#dadada',
  },
};

const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"Poppins", sans-serif',
};

const styles = {
  global: {
    body: {
      bg: 'light.white',
      color: 'dark.text',
    },
  },
};

export default extendTheme({
  breakpoints,
  colors,
  fonts,
  styles,
});
