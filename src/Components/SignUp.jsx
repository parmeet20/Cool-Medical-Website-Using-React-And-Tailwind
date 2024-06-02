import React from 'react';
import { CgPassword } from 'react-icons/cg';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="min-h-screen p-6 dark:bg-gray-900 flex pt-16 transition ease-in-out duration-500 items-center justify-center">
      <div className="dark:bg-white/70 bg-gray-100 rounded-lg shadow-md px-8 py-12 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Account</h1>

        <form action="/signup" method="post" className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-md w-full py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-md w-full py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <CgPassword className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded-md w-full py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="terms" name="terms" className="w-4 h-4 mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Agree to Terms & Conditions
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
