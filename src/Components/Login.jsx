import React, { useEffect } from "react";
import { CgPassword } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const Login = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="min-h-screen p-8 dark:bg-gray-900 flex transition ease-in-out duration-500 items-center justify-center">
      <div className="dark:bg-white/70 bg-gray-100 backdrop-blur-lg rounded-lg shadow-md px-8 py-12 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back!</h1>

        <form action="/login" method="post" className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-2.5 text-gray-500" />
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
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="w-4 h-4 mr-2"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
