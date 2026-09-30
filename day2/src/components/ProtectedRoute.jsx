// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

// This component acts as a gatekeeper for any route that requires login
export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // If NOT logged in, redirect to /login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected page
  return children;
}