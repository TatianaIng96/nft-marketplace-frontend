/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { UsersAndNFTsProvider } from './store/UsersAndNFTsContext';
import { ThemeProvider } from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Auth0Provider
        domain="dev-camilosz.us.auth0.com"
        clientId="7zXQHrLTCFWWJNLGHr6r2626Rky9mpaW"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <UsersAndNFTsProvider>
          <RouterProvider router={router} />
        </UsersAndNFTsProvider>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
