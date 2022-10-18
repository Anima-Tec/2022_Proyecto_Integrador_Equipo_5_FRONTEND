import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/index';
import App from './App';

import '@fontsource/raleway';
import '@fontsource/poppins';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
);

// https://www.jimraptis.com/blog/build-a-landing-page-with-chakra-ui-part-1
