import React from 'react'
import {Link} from 'react-router-dom';

function RecruiterLogin() {
  return (
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        class=" p-6 m-auto bg-white border-t border-red-600 rounded shadow-lg shadow-red-800/50 md:max-w-md w-10/12">
        <h1 class="text-3xl font-semibold text-center text-red-700">LOGO</h1>

        <form class="mt-6">
          <div>
            <label for="email" class="block text-sm text-gray-800">Registered Email</label>
            <input type="email"
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div class="mt-4">
            <div>
              <label for="password" class="block text-sm text-gray-800">Password</label>
              <input type="password"
                class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <Link to="/" class="text-xs text-gray-600 hover:underline">Forget Password?</Link>
            <div class="mt-6">
              <button
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                Login
              </button>
            </div>
            </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to='/recruiter-signup' href="#"
          class="font-medium text-red-600 hover:underline">Sign up</Link></p>
      </div>
    </div>

  )
}

export default RecruiterLogin
