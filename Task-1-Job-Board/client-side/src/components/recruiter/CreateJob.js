import React, { useState } from 'react'
import { CreateNewJob } from '../../apiFunctions/getJobs'

function CreateJob() {

  const [jobDetail, setJobDetail] = useState({
    title: '',
    companyName: '', experienceReq: '', industry: '', salary: '', location: '', opening: '', jobType: '', desc: '', roleCategory: '', skills: ''
  })

  const handleChange = (e) => {
    setJobDetail({ ...jobDetail, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(jobDetail);
    CreateNewJob(jobDetail);
  }

  return (
    <section className='p-4 md:px-24 lg:px-48 md:py-8'>
      <h3 className='font-semibold text-lg md:text-2xl mb-8'>Fill Job Details</h3>
      <form className='space-y-4'>
        <div>
          <label for="title" class="block text-sm text-gray-800">Job Title</label>
          <input type="text" placeholder='Job Name' id='title' name='title' value={jobDetail.title} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="companyName" class="block text-sm text-gray-800">Company Name</label>
          <input type="text" placeholder='Company Name' id='companyName' name='companyName' value={jobDetail.companyName} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="experienceReq" class="block text-sm text-gray-800">Experience Required</label>
          <input type="number" placeholder='eg. 0-1' id='experienceReq' name='experienceReq' value={jobDetail.experienceReq} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="salary" class="block text-sm text-gray-800">Salary Provided(in LPA)</label>
          <input type="number" placeholder='eg. 3-4'
            id='salary' name='salary' value={jobDetail.salary} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="opening" class="block text-sm text-gray-800">No. Of Openings</label>
          <input type="number" placeholder='eg. 1' id='opening' name='opening' value={jobDetail.opening} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="location" class="block text-sm text-gray-800">Job location</label>
          <input type="text" placeholder='Jaipur, Rajasthan' id='location' name='location' value={jobDetail.location} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="desc" class="block text-sm text-gray-800">Brief</label>
          <textarea placeholder='Brief about Role and Responsibities' id='desc' name='desc' value={jobDetail.desc} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="industry" class="block text-sm text-gray-800">Industry Type</label>
          <input type="text" placeholder='eg. IT' id='industry' name='industry' value={jobDetail.industry} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="jobType" class="block text-sm text-gray-800 ">Employement Type</label>
          <select id="jobType" name='jobType' value={jobDetail.jobType} onChange={handleChange} className='border-2 mt-2'>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div>
          <label for="roleCategory" class="block text-sm text-gray-800">Role Category</label>
          <input type="text" placeholder='eg. Software Development' id="roleCategory" name='roleCategory' value={jobDetail.roleCategory} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
          <label for="skill" class="block text-sm text-gray-800">Skills Required</label>
          <input type="text" placeholder='eg. Java, JavaScript, HTML' id="skills" name='skills' value={jobDetail.skills} onChange={handleChange}
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <button type='submit' onClick={handleSubmit} className='inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg'>Post the Job</button>
      </form>
    </section>
  )
}

export default CreateJob
