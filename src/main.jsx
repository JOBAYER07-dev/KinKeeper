import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import ErrorLayout from './Error/ErrorLayout'
import FriendsShowPage from './Pages/FriendsShowPage/FriendsShowPage'
import FriendDetails from './Pages/FriendDetails/FriendDetails'
import TimelinePage from './Pages/TimelinePage/TimelinePage'
import FriendshipAnalytics from './Pages/FriendshipAnalytics/FriendshipAnalytics'
import Homepage from './Pages/Homepage/Homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: '/friends/:friendId',
        element: <FriendDetails />,
      },
      {
        path: '/timeline',
        element: <TimelinePage />,
      },
      {
        path: '/analytics',
        element: <FriendshipAnalytics/>
      }
    ],
    errorElement: <ErrorLayout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
