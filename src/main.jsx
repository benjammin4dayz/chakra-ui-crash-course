import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';

export const customSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `Courier New` },
        body: { value: `Tahoma` },
      },
      colors: {
        brand: {
          900: '#024fc9',
          800: '#146af5',
          700: '#297742',
          600: '#337df2',
          500: '#4287f5',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={customSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
