// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { UsersAndNFTsProvider } from './store/UsersAndNFTsContext';
import { ThemeProvider } from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UsersAndNFTsProvider>
        <RouterProvider router={router} />
      </UsersAndNFTsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
