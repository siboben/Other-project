import React from 'react';
import { useAuth } from './AuthProvider';

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="p-4 bg-gray-100 shadow-md">
      <a href="#home" className="mr-4">Home</a>
      {isAuthenticated ? (
        <a href="#dashboard" className="mr-4">Dashboard</a>
      ) : (
        <a href="#login" className="mr-4">Login</a>
      )}
    </nav>
  );
};

export default Navigation;