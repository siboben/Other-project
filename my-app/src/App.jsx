

import './App.css'
import React from 'react';
import { AuthProvider } from './AuthProvider';
import Navigation from './Navigation';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <div className="p-4">
        <Login />
        <Logout />
      </div>
    </AuthProvider>
  );
};

export default App;
