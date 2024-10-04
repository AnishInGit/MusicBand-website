import React from 'react';
import { Navigate } from 'react-router-dom';

const SESSION_DURATION = 15 * 60 * 1000; // 15 minutes

function ProtectedRoute({ element }) {
  const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  const loginTime = localStorage.getItem('loginTime');
  
  if (isAdminAuthenticated && loginTime) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - loginTime;

    if (timeElapsed > SESSION_DURATION) {
      // If session is expired, reset localStorage and redirect to login page
      localStorage.removeItem('isAdminAuthenticated');
      localStorage.removeItem('loginTime');
      return <Navigate to="/admin" />;
    }

    return element; // Allow access if session is valid
  }

  // Redirect to login if not authenticated
  return <Navigate to="/admin" />;
}

export default ProtectedRoute;
