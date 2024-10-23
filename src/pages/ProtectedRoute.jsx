import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import DashBoardLayOut from './DashBoardLayOut';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  // Directly return Navigate if not authenticated
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // Pass the current location to redirect back after login
      />
    );
  }

  return <DashBoardLayOut/>; // Render the protected component if authenticated
};

export default ProtectedRoute;