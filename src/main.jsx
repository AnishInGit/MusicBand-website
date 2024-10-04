import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import AdminLogin from './adminComponets/AdminLogin.jsx';
import ErrorPage from './adminComponets/Errorpage.jsx';
import Adminpage from './adminComponets/Adminpage.jsx';
import ProtectedRoute from './adminComponets/ProtectedRoute.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <AdminLogin />,
  },
  {
    path: '/adminpage',
    element: <ProtectedRoute element={<Adminpage />} />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
