import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

  const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword: "", contactNo: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cred.password !== cred.cpassword) {
      alert("enter same password");
    }
    const response = await fetch(`http://localhost:5000/api/userauth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, contactNo: cred.contactNo })
    });
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate('/user');
    }
    else {
      alert(json.error)

    }
  }
  return (
    <div class="relative flex flex-col justify-center min-h-screen py-4 overflow-hidden">
      <div
        class=" p-6 m-auto bg-white border-t border-red-600 rounded shadow-lg shadow-red-800/50 md:max-w-md w-10/12">
        <h1 class="text-3xl font-semibold text-center text-red-700">LOGO</h1>

        <form class="mt-6">
          <div>
            <label for="name" class="block text-sm text-gray-800">Full Name</label>
            <input type="text" name='name' value={cred.name} id='name'
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} />
          </div>
          <div className='mt-4'>
            <label for="email" class="block text-sm text-gray-800">Email</label>
            <input type="email" name='email' value={cred.email} id='email'
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} />
          </div>
          <div className='mt-4'>
            <label for="contactNo" class="block text-sm text-gray-800">Mobile Number</label>
            <input type="number" name='contactNo' value={cred.contactNo} id='contactNo'
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} />
          </div>
          <div class="mt-4">
            <div>
              <label for="password" class="block text-sm text-gray-800">Password</label>
              <input type="password" name='password' value={cred.password} id='password'
                class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} />
            </div>
            <div class="mt-4">
              <div>
                <label for="cpassword" class="block text-sm text-gray-800">Confirm Password</label>
                <input type="password" name='cpassword' value={cred.cpassword} id='cpassword'
                  class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} />
              </div>
            </div>
            <Link to="/" class="text-xs text-gray-600 hover:underline">Forget Password?</Link>
            <div className='mt-4'>
              <label for="file" class="block text-sm text-gray-800">Upload Resume</label>
              <input type="file"
                class="block w-full mt-2 text-red-700 bg-white focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div class="mt-6">
              <button onClick={handleSubmit}
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                Register Now
              </button>
            </div>
          </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Already have an account? <Link to='/login' href="#"
          class="font-medium text-red-600 hover:underline">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
