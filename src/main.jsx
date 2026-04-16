import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import ErrorLayout from './Error/ErrorLayout';
import FriendDetails from './Pages/FriendDetails/FriendDetails';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import FriendshipAnalytics from './Pages/FriendshipAnalytics/FriendshipAnalytics';
import Homepage from './Pages/Homepage/Homepage';
import { FadeLoader } from 'react-spinners';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch('/FriendsData.json').then(res => res.json()),
      },
      {
        path: '/friends/:friendId',
        element: <FriendDetails />,
        loader: async ({ params }) => {
          const res = await fetch('/FriendsData.json');
          const data = await res.json();
          return data.find(f => f.id === Number(params.friendId));
        },
      },
      {
        path: '/timeline',
        element: <TimelinePage />,
        loader: () => fetch('/FriendsData.json').then(res => res.json()),
      },
      {
        path: '/analytics',
        element: <FriendshipAnalytics />,
      },
    ],
    errorElement: <ErrorLayout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <FadeLoader color="#36d7b7" />
        </div>
      }
    />
  </StrictMode>,
);
