import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#5C9EAD',
    primaryDark: '#326273',
    secondary: '#E39774',
    secondaryDark: '#BE7858',
    bgColor: '#18181B',
    grey: '#666666',
  },
  fonts: {
    heading: '\'Raleway\', sans-serif',
    body: '\'Poppins\', sans-serif',
  },
  styles: {
    global: () => ({
      'html, body': {
        bg: 'bgColor',
        color: 'white',
        m: 3,
        // display: 'flex',
        // flexDirection: 'column',
      },
      h1: {
        fontSize: 40,
        color: 'white',
      },
      FormLabel: {
        color: 'white',
      },
    }),
  },
});

export default theme;
