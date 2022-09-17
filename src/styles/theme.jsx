import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#5C9EAD',
    primaryDark: '#326273',
    secondary: '#E39774',
    secondaryDark: '#BE7858',
    bgColor: '#18181B',
    greyHard: '#666666',
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
        font: 'body',
        m: 3,
        // display: 'flex',
        // flexDirection: 'column',
      },
    }),
  },
});

export default theme;
