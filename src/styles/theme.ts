import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
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
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'light.white',
        color: 'dark.text',
      },
    },
  },
});
