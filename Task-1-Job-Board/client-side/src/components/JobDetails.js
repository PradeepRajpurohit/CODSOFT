import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBag, BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import JobList from './JobList'
import { useSelector } from 'react-redux'

function JobDetails() {

  const job = useSelector(state => state.job.job)
  const user = useSelector(state => state.user.user)

  const navigate = useNavigate();

  const handleApply = ()=>{
    if(!user.name){
      alert('login to user account')
      navigate('/login')
    }
    else{
      navigate('/apply-for-job')
    }
  }

  return (
    <div className='lg:grid grid-cols-10 lg:px-20'>
      <div className='p-4 space-y-2 col-span-6 '>
        <div className='bg-white p-2 rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
          <div className='mb-2'>
            <h2 className='text-lg font-semibold md:text-xl text-black'>{job.title}</h2>
            <p className='font-medium'>{job.companyName}</p>
          </div>
          <div className='flex max-[375px]:text-sm '>
            <span className='flex items-center space-x-1 mr-2'><BsBag /><p>{job.experienceRequired} yrs | </p></span>
            <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>{job.salary} LPA | </p></span>
          </div>
          <p className='flex items-center mb-2 space-x-1'><IoLocationOutline /><span>{job.location}</span></p>
          <hr />
          <div className='flex justify-between items-center'>
            <div className='md:flex font-medium md:space-x-2'>
              <p className='text-sm'>Posted: {job.date} <span className='mx-2 hidden md:inline'>|</span></p>
              <p className='text-sm'>Openings: {job.opening}<span className='mx-2 hidden md:inline'>|</span></p>
              <p className='text-sm'>Applicants: {job.application}</p>
            </div>

            <div className='my-2'>
              <button onClick={handleApply} className="inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none  rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg">Apply Now</button>
            </div>
          </div>

        </div>
        <div className='bg-white p-2 rounded-md space-y-4 shadow-lg shadow-red-800/50 text-gray-700'>
          <h2 className='text-lg font font-semibold'>Job Description</h2>
          <div>
            <h3 className='font-medium'>Role & Resposibilities</h3>
            <p>{job.desc}</p>
          </div>
          <div className='font-medium'>
            <p>Role: <span className='font-normal'>{job.title}</span></p>
            <p>Industry Type: <span className='font-normal'>{job.indutry}</span></p>
            <p>Employement Type: <span className='font-normal'>{job.jobType}</span></p>
            <p>Role Category: <span className='font-normal'>{job.roleCategory}</span></p>
          </div>
          <div>
            <h3 className='font-medium'>Key Skills</h3>
            <p>{job.skills}</p>
          </div>
        </div>

        <div className='bg-white p-2 rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>

          <h3 className='font-medium text-lg'>About company</h3>
          <p>Professional Automotives Pvt. Ltd is a leading logistics company specializing in providing efficient and comprehensive transportation and supply chain solutions to businesses in the automotive industry. With a strong focus on reliability, professionalism, and customer satisfaction, we are committed to ensuring seamless logistics operations and driving the success of our clients.Services:Automotive LogisticsWarehousing and DistributionSupply Chain ManagementTechnology and Innovation : We leverage advanced technology and embrace innovation to deliver superior logistics services. Our state-of-the-art tracking systems provide real-time visibility, enabling you to monitor your shipments at every stage of the journey. We also employ data analytics and automation tools to optimize routing, enhance operational efficiency, and provide actionable insights for informed decision-making</p>
          <h3 className='font-medium text-lg'>Company Info</h3>
          <p className='font-medium'>Address: <span className=''>Professional Automotives Pvt. Ltd. Near UDB Orchid Building, Main Ajmer Road, Village Narasingpura, Post Mahapura, Jaipur, Rajasthan(302026)</span></p>
        </div>

      </div>
      <div className='col-span-4'>
        <h3 className='mt-2 ml-4 text-2xl font-semibold '>More Jobs</h3>
        <JobList/>
      </div>
    </div>
  )
}

export default JobDetails
