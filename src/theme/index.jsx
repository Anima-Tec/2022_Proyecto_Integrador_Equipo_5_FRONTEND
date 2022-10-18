import { extendTheme } from '@chakra-ui/react';
import FormInput from './components/FormInput';
import colors from './foundations/colors';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};
const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
};
const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
  extraBold: 900,
};
const lineHeights = {
  normal: 'normal',
  none: '1',
  shorter: '1.25',
  short: '1.375',
  base: '1.5',
  tall: '1.625',
  taller: '2',
};
const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};
const sizes = {
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  screenHeight: '100vh',
  screenWidth: '100vw',
};
const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const theme = extendTheme({
  ...colors,
  config,
  breakpoints,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  sizes,
  zIndices,
  fonts: {
    heading: '\'Raleway\', sans-serif',
    body: '\'Poppins\', sans-serif',
  },
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: 'Poppins',
        bg: 'bgColor',
        color: 'white',
        m: '24px',
        h1: {
          // <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">TEXTO</Heading>
          // fontFamily: 'Raleway',
          // fontSize: '4xl',
          // fontWeight: 'extraBold',
          lineHeight: 'shorter',
          letterSpacing: 'wide',
          textAlign: 'center',
        },
        h2: {
          // <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="bold">TEXTO</Heading>
          // fontFamily: 'Raleway',
          // fontSize: '2xl',
          // fontWeight: 'bold',
          lineHeight: 'shorter',
          letterSpacing: 'wide',
          textAlign: 'left',
        },
        h3: {
          // <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">TEXTO</Heading>
          // fontFamily: 'Poppins',
          // fontSize: 'xl',
          // fontWeight: 'bold',
          lineHeight: 'shorter',
          letterSpacing: 'wide',
          textAlign: 'left',
        },
        h4: {
          // <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold">TEXTO</Heading>
          // fontFamily: 'Poppins',
          // fontSize: 'lg',
          // fontWeight: 'bold',
          lineHeight: 'shorter',
          letterSpacing: 'wide',
          textAlign: 'left',
        },
        h5: {
          // <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">TEXTO</Heading>
          // fontFamily: 'Poppins',
          // fontSize: 'md',
          // fontWeight: 'bold',
          lineHeight: 'shorter',
          letterSpacing: 'wide',
          textAlign: 'left',
          color: 'gray',
        },
        p: {
          fontFamily: 'Poppins',
          fontSize: 'sm',
          fontWeight: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'wide',
          textAlign: 'left',
        },
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
