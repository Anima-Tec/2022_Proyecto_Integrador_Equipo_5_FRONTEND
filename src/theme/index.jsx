import { extendTheme } from '@chakra-ui/react';
import FormInput from './components/FormInput';
import colors from './foundations/colors';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...colors,
  config,
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
  components: {
    Form: FormInput,
  },
});

export default theme;
