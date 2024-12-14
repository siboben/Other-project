import React from 'react';
import { useAuth } from './AuthProvider';

const Login = () => {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return <h2 className="text-center mt-8">You are already logged in.</h2>;
  }

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 border rounded shadow-lg">
      <h2 className="text-xl mb-4">Login</h2>
      <button
        onClick={login}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
