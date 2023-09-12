import Home from 'app/pages/Home';
import Login from 'app/pages/Login';
import ProtectRoute from 'app/shared/ProtectRoute';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectRoute>
        <Home />
      </ProtectRoute>
    ),
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
