import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { store } from 'app/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(
  'https://chat-apps-learning-languages.pockethost.io'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
