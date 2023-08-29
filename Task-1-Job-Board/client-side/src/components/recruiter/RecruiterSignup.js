import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CompanyDetail } from '../../apiFunctions/getCompanyDetail';

function RecruiterSignup() {

  const [cred, setCred] = useState({ cname: "", email: "", password: "", cpassword: "", desc: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cred.password !== cred.cpassword) {
      alert("enter same password");
    }
    const response = await fetch(`http://localhost:5000/api/companyauth/createcompany`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: cred.cname, email: cred.email, password: cred.password, desc: cred.desc })
    });
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      dispatch(CompanyDetail());
      navigate('/company-overview');
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
          <div className=''>
            <label for="cname" class="block text-sm text-gray-800">Company Name</label>
            <input type="text" id='cname' name='cname' value={cred.cname} onChange={handleChange}
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className='mt-4'>
            <label for="email" class="block text-sm text-gray-800">Official Email</label>
            <input type="email" id='email' name='email' value={cred.email} onChange={handleChange}
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className='mt-4'>
            <label for="description" class="block text-sm text-gray-800">Company Info</label>
            <textarea id='desc' name='desc' value={cred.desc} onChange={handleChange}
              class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div class="mt-4">
            <div>
              <label for="password" class="block text-sm text-gray-800">Password</label>
              <input type="password" id='password' name='password' value={cred.password} onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div class="mt-4">
              <div>
                <label for="cpassword" class="block text-sm text-gray-800">Password</label>
                <input type="password" id='cpassword' name='cpassword' value={cred.cpassword} onChange={handleChange}
                  class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
            </div>
            <Link to="/" class="text-xs text-gray-600 hover:underline">Forget Password?</Link>
            <div class="mt-6">
              <button onClick={handleSubmit}
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                Register Now
              </button>
            </div>
          </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Already have an account? <Link to='/recruiter-login' href="#"
          class="font-medium text-red-600 hover:underline">Login</Link></p>
      </div>
    </div>
  )
}

export default RecruiterSignup
