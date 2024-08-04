import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white px-6 py-2 rounded-lg shadow-md w-96 mt-[5em]">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="h-fit pb-16">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register-page" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
