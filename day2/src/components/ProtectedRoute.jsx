// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Not logged in? Send to /login (the public route in App.jsx)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Logged in? Render the protected page
  return children;
}