import React from 'react';
import { useAuth } from './AuthProvider';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <h2 className="text-center mt-8">You are not logged in.</h2>;
  }

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl">You are logged in!</h2>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
