import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './contexts/auth/AuthProvider';

import theme from './theme/index';
import App from './App';

import '@fontsource/poppins'; // PORQUE NO EN THEME?
import '@fontsource/raleway'; // PORQUE NO EN THEME?

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);

// https://www.jimraptis.com/blog/build-a-landing-page-with-chakra-ui-part-1
