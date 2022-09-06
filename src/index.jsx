/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './styles/theme';
import '@fontsource/raleway/400.css';
import '@fontsource/poppins/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
