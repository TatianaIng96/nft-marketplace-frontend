// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { UsersAndNFTsProvider } from './store/UsersAndNFTsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersAndNFTsProvider>
      <RouterProvider router={router} />
    </UsersAndNFTsProvider>
  </React.StrictMode>,
);
