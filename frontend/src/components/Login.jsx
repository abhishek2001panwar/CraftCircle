// AuthComponent.js
import React, { useState } from 'react';

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login form submitted');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Add registration logic here
    console.log('Registration form submitted');
  };

  const handleGoogleSignIn = () => {
    // Add Google sign-in logic here
    console.log('Google Sign-In');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-pink-200 to-green-200">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gradient">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>
        )}

        <div className="my-4 flex items-center justify-between">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-center space-x-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {/* Replace with Google icon */}
            <span className="text-sm">Sign in with Google</span>
          </button>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline text-sm"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
