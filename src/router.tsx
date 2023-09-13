import { Home, Login, Chat } from 'app/pages';
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
  {
    path: '/chat/:id',
    element: (
      <ProtectRoute>
        <Chat />
      </ProtectRoute>
    ),
  },
]);
