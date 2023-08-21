import React from 'react'

function CreateJob() {
  return (
    <section className='p-4 md:px-24 lg:px-48 md:py-8'>
      <h3 className='font-semibold text-lg md:text-2xl mb-8'>Fill Job Details</h3>
      <form className='space-y-4'>
        <div>
          <label for="jobName" class="block text-sm text-gray-800">Job Name</label>
          <input type="text" placeholder='Job Name'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="companyName" class="block text-sm text-gray-800">Company Name</label>
          <input type="text"
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="experience" class="block text-sm text-gray-800">Experience Required</label>
          <input type="number" placeholder='eg. 0-1'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="salary" class="block text-sm text-gray-800">Salary Provided(in LPA)</label>
          <input type="number" placeholder='eg. 3-4'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="opening" class="block text-sm text-gray-800">No. Of Openings</label>
          <input type="number" placeholder='eg. 1'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="desc" class="block text-sm text-gray-800">Job Location</label>
          <textarea placeholder='Brief about Role and Responsibities'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="role" class="block text-sm text-gray-800">Role</label>
          <input type="text" placeholder='eg. FrontEnd Developer'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="industry" class="block text-sm text-gray-800">Industry Type</label>
          <input type="text"
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="employment" class="block text-sm text-gray-800 ">Employement Type</label>
          <select id="employment" className='border-2 mt-2'>
            <option value="volvo">Full Time</option>
            <option value="saab">Part Time</option>
            <option value="opel">Internship</option>
          </select>
        </div>
        <div>
          <label for="role-category" class="block text-sm text-gray-800">Role Category</label>
          <input type="text" placeholder='eg. Software Development'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="skill" class="block text-sm text-gray-800">Skills Required</label>
          <input type="text" placeholder='eg. Java, JavaScript, HTML'
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <button type='submit' className='inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg'>Post the Job</button>
      </form>
    </section>
  )
}

export default CreateJob
